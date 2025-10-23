import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const API_BASE_URL = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';

interface InternshipFormData {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  course: string;
  renderTimeHours: string;
  ojtCoordinatorName: string;
  ojtCoordinatorEmail: string;
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

/**
 * Get contact by ID
 */
async function getContactById(contactId: string, apiKey: string): Promise<GoHighLevelContact> {
  const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Version': API_VERSION,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Get contact error:', errorData);
    throw new Error(`Failed to get contact: ${response.statusText}`);
  }

  const data = await response.json();
  return data.contact;
}

/**
 * Create a new contact in GoHighLevel
 */
async function createContact(formData: InternshipFormData, locationId: string, apiKey: string): Promise<GoHighLevelContact> {
  const contactData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    locationId: locationId,
    source: 'Website Internship Application',
    tags: ['internship-application', 'student'],
  };

  const response = await fetch(`${API_BASE_URL}/contacts/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Version': API_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));

    // Handle duplicate contact error
    if (errorData.statusCode === 400 && errorData.meta && errorData.meta.contactId) {
      console.log('Contact already exists, using existing ID:', errorData.meta.contactId);
      const existingContact = await getContactById(errorData.meta.contactId, apiKey);
      return existingContact;
    }

    console.error('Create contact error:', errorData);
    throw new Error(`Failed to create contact: ${response.statusText} - ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.contact;
}

/**
 * Upload file to GoHighLevel media library using axios
 * Returns the file URL
 */
async function uploadFileToGoHighLevel(fileData: string, fileName: string, fileType: string, locationId: string, apiKey: string): Promise<string> {
  try {
    const axios = require('axios');
    const FormData = require('form-data');

    // Convert base64 to buffer
    const base64Data = fileData.split(',')[1] || fileData;
    const binaryData = Buffer.from(base64Data, 'base64');

    // Create form data
    const formData = new FormData();
    formData.append('file', binaryData, {
      filename: fileName,
      contentType: fileType,
    });

    // Use axios for the upload (better multipart/form-data support)
    const response = await axios.post(`${API_BASE_URL}/medias/upload-file`, formData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Version': API_VERSION,
        ...formData.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    console.log('File uploaded successfully:', response.data);

    // Return the file URL
    return response.data.url || response.data.fileUrl || response.data.uploadedUrl || '';
  } catch (error: any) {
    console.error('File upload exception:', error.response?.data || error.message);
    throw new Error(`Failed to upload file: ${error.response?.data?.message || error.message}`);
  }
}

/**
 * Add a note to a contact with internship details
 */
async function addInternshipNote(contactId: string, formData: InternshipFormData, fileUrl: string | null, apiKey: string): Promise<void> {
  const noteContent = `
INTERNSHIP APPLICATION

School: ${formData.school}
Course/Degree: ${formData.course}
Required Hours: ${formData.renderTimeHours}

OJT Coordinator:
Name: ${formData.ojtCoordinatorName}
Email: ${formData.ojtCoordinatorEmail}

Attached File: ${formData.fileName}
${fileUrl ? `File URL: ${fileUrl}` : ''}

---
Submitted via website internship form
  `.trim();

  const response = await fetch(`${API_BASE_URL}/contacts/${contactId}/notes`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Version': API_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      body: noteContent,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Add note error:', errorData);
    console.warn('Failed to add note to contact, but continuing...');
  }
}

/**
 * Create a new opportunity in GoHighLevel with custom fields
 */
async function createOpportunity(
  contactId: string,
  formData: InternshipFormData,
  fileUrl: string | null,
  locationId: string,
  pipelineId: string,
  stageId: string,
  apiKey: string
): Promise<GoHighLevelOpportunity> {
  const opportunityData: any = {
    pipelineId: pipelineId,
    locationId: locationId,
    name: `Internship - ${formData.firstName} ${formData.lastName} (${formData.school})`,
    pipelineStageId: stageId,
    status: 'open',
    contactId: contactId,
    monetaryValue: 0,
  };

  // Add custom field for internship files if we have a file URL
  if (fileUrl) {
    opportunityData.customFields = [
      {
        id: 'zKee9dS3gAMvNCih0KuP', // Internship Files custom field ID
        key: 'opportunity.internship_files',
        field_value: fileUrl,
      }
    ];
  }

  const response = await fetch(`${API_BASE_URL}/opportunities/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Version': API_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(opportunityData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Create opportunity error:', errorData);
    throw new Error(`Failed to create opportunity: ${response.statusText} - ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.opportunity;
}

/**
 * Netlify serverless function handler
 */
export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Get environment variables
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;
    const pipelineId = process.env.GOHIGHLEVEL_INTERNSHIP_PIPELINE_ID;
    const stageId = process.env.GOHIGHLEVEL_INTERNSHIP_STAGE_ID;

    // Validate configuration
    if (!apiKey || !locationId || !pipelineId || !stageId) {
      console.error('Missing environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Parse request body
    const formData: InternshipFormData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email ||
        !formData.school || !formData.course || !formData.renderTimeHours ||
        !formData.ojtCoordinatorName || !formData.ojtCoordinatorEmail ||
        !formData.attachedFile || !formData.fileName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create or get existing contact
    const contact = await createContact(formData, locationId, apiKey);

    // Upload file to GoHighLevel media library
    let fileUrl: string | null = null;
    try {
      fileUrl = await uploadFileToGoHighLevel(formData.attachedFile, formData.fileName, formData.fileType, locationId, apiKey);
      console.log('File uploaded with URL:', fileUrl);
    } catch (error) {
      console.error('File upload failed, but continuing:', error);
      // Don't fail the entire request if file upload fails
    }

    // Add note to contact with internship details and file URL
    await addInternshipNote(contact.id, formData, fileUrl, apiKey);

    // Create opportunity with file URL in custom field
    const opportunity = await createOpportunity(contact.id, formData, fileUrl, locationId, pipelineId, stageId, apiKey);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        contactId: contact.id,
        opportunityId: opportunity.id,
        message: 'Internship application submitted successfully',
      }),
    };
  } catch (error) {
    console.error('Error in submit-internship function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to submit internship application',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
