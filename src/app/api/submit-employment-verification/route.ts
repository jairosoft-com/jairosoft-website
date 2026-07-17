import axios from "axios";
import FormData from "form-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_BASE_URL = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";

interface EmploymentVerificationFormData {
  firstName: string;
  lastName: string;
  position: string;
  specificRequest: string;
  email: string;
  attachedFile: string; // Base64 encoded file
  fileName: string;
  fileType: string;
}

interface GoHighLevelContact {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface GoHighLevelOpportunity {
  id: string;
  name: string;
  pipelineId: string;
  pipelineStageId: string;
  status: string;
}

async function getContactById(
  contactId: string,
  apiKey: string
): Promise<GoHighLevelContact> {
  const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: API_VERSION,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Get contact error:", errorData);
    throw new Error(`Failed to get contact: ${response.statusText}`);
  }

  const data = await response.json();
  return data.contact;
}

async function createContact(
  formData: EmploymentVerificationFormData,
  locationId: string,
  apiKey: string
): Promise<GoHighLevelContact> {
  const contactData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    locationId: locationId,
    source: "Website Employment Verification",
    tags: ["employment-verification", "hr-request"],
  };

  const response = await fetch(`${API_BASE_URL}/contacts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: API_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));

    if (errorData.statusCode === 400 && errorData.meta && errorData.meta.contactId) {
      console.log("Contact already exists, using existing ID:", errorData.meta.contactId);
      const existingContact = await getContactById(errorData.meta.contactId, apiKey);
      return existingContact;
    }

    console.error("Create contact error:", errorData);
    throw new Error(
      `Failed to create contact: ${response.statusText} - ${JSON.stringify(errorData)}`
    );
  }

  const data = await response.json();
  return data.contact;
}

/**
 * Upload file to GoHighLevel media library using axios + form-data.
 * Returns the file URL.
 */
async function uploadFileToGoHighLevel(
  fileData: string,
  fileName: string,
  fileType: string,
  apiKey: string
): Promise<string> {
  try {
    const base64Data = fileData.split(",")[1] || fileData;
    const binaryData = Buffer.from(base64Data, "base64");

    const formData = new FormData();
    formData.append("file", binaryData, {
      filename: fileName,
      contentType: fileType,
    });

    const response = await axios.post(`${API_BASE_URL}/medias/upload-file`, formData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: API_VERSION,
        ...formData.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    console.log("File uploaded successfully:", response.data);
    return response.data.url || response.data.fileUrl || response.data.uploadedUrl || "";
  } catch (error: any) {
    console.error("File upload exception:", error.response?.data || error.message);
    throw new Error(
      `Failed to upload file: ${error.response?.data?.message || error.message}`
    );
  }
}

async function addVerificationNote(
  contactId: string,
  formData: EmploymentVerificationFormData,
  fileUrl: string | null,
  apiKey: string
): Promise<void> {
  const noteContent = `
EMPLOYMENT VERIFICATION REQUEST

Employee Name: ${formData.firstName} ${formData.lastName}
Position: ${formData.position}

Specific Request:
${formData.specificRequest}

Authorization File: ${formData.fileName}
${fileUrl ? `File URL: ${fileUrl}` : ""}

---
Submitted via website employment verification form
  `.trim();

  const response = await fetch(`${API_BASE_URL}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: API_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body: noteContent }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Add note error:", errorData);
    console.warn("Failed to add note to contact, but continuing...");
  }
}

async function createOpportunity(
  contactId: string,
  formData: EmploymentVerificationFormData,
  fileUrl: string | null,
  locationId: string,
  pipelineId: string,
  stageId: string,
  apiKey: string
): Promise<GoHighLevelOpportunity> {
  const opportunityData: any = {
    pipelineId: pipelineId,
    locationId: locationId,
    name: `Employment Verification - ${formData.firstName} ${formData.lastName}`,
    pipelineStageId: stageId,
    status: "open",
    contactId: contactId,
    monetaryValue: 0,
  };

  if (fileUrl) {
    opportunityData.customFields = [
      {
        id: "employment_verification_files", // TODO: replace with the actual GHL custom field ID
        key: "opportunity.employment_verification_files",
        field_value: fileUrl,
      },
    ];
  }

  const response = await fetch(`${API_BASE_URL}/opportunities/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: API_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(opportunityData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Create opportunity error:", errorData);
    throw new Error(
      `Failed to create opportunity: ${response.statusText} - ${JSON.stringify(errorData)}`
    );
  }

  const data = await response.json();
  return data.opportunity;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;
    const pipelineId = process.env.GOHIGHLEVEL_EMPLOYMENT_VERIFICATION_PIPELINE_ID;
    const stageId = process.env.GOHIGHLEVEL_EMPLOYMENT_VERIFICATION_STAGE_ID;

    if (!apiKey || !locationId || !pipelineId || !stageId) {
      console.error("Missing environment variables");
      return Response.json({ error: "Server configuration error" }, { status: 500 });
    }

    const formData: EmploymentVerificationFormData = await request
      .json()
      .catch(() => ({}) as EmploymentVerificationFormData);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.position ||
      !formData.specificRequest ||
      !formData.attachedFile ||
      !formData.fileName
    ) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const contact = await createContact(formData, locationId, apiKey);

    let fileUrl: string | null = null;
    try {
      fileUrl = await uploadFileToGoHighLevel(
        formData.attachedFile,
        formData.fileName,
        formData.fileType,
        apiKey
      );
      console.log("File uploaded with URL:", fileUrl);
    } catch (error) {
      console.error("File upload failed, but continuing:", error);
    }

    await addVerificationNote(contact.id, formData, fileUrl, apiKey);
    const opportunity = await createOpportunity(
      contact.id,
      formData,
      fileUrl,
      locationId,
      pipelineId,
      stageId,
      apiKey
    );

    return Response.json(
      {
        success: true,
        contactId: contact.id,
        opportunityId: opportunity.id,
        message: "Employment verification request submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in submit-employment-verification route:", error);
    return Response.json(
      {
        error: "Failed to submit employment verification request",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
