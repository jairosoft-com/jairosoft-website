import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const API_BASE_URL = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}

interface GoHighLevelContact {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  companyName?: string;
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
async function createContact(formData: ContactFormData, locationId: string, apiKey: string): Promise<GoHighLevelContact> {
  const contactData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    companyName: formData.company || undefined,
    locationId: locationId,
    source: 'Website Contact Form',
    tags: ['website-inquiry', formData.subject.toLowerCase().replace(/\s+/g, '-')],
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

    // Handle duplicate contact error - GoHighLevel returns the existing contact ID
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
 * Add a note to a contact to store the form message
 */
async function addContactNote(contactId: string, formData: ContactFormData, apiKey: string): Promise<void> {
  const noteContent = `
Inquiry Type: ${formData.subject}
Company: ${formData.company || 'Not provided'}

Message:
${formData.message}

---
Submitted via website contact form
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
 * Create a new opportunity in GoHighLevel
 */
async function createOpportunity(
  contactId: string,
  formData: ContactFormData,
  locationId: string,
  pipelineId: string,
  stageId: string,
  apiKey: string
): Promise<GoHighLevelOpportunity> {
  const opportunityData = {
    pipelineId: pipelineId,
    locationId: locationId,
    name: `${formData.subject} - ${formData.firstName} ${formData.lastName}`,
    pipelineStageId: stageId,
    status: 'open',
    contactId: contactId,
    monetaryValue: 0,
  };

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
    const pipelineId = process.env.GOHIGHLEVEL_PIPELINE_ID;
    const stageId = process.env.GOHIGHLEVEL_STAGE_ID;

    // Validate configuration
    if (!apiKey || !locationId || !pipelineId || !stageId) {
      console.error('Missing environment variables');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Parse request body
    const formData: ContactFormData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Create or get existing contact
    const contact = await createContact(formData, locationId, apiKey);

    // Add note to contact with the form message
    await addContactNote(contact.id, formData, apiKey);

    // Create opportunity
    const opportunity = await createOpportunity(contact.id, formData, locationId, pipelineId, stageId, apiKey);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        contactId: contact.id,
        opportunityId: opportunity.id,
        message: 'Contact and opportunity created successfully',
      }),
    };
  } catch (error) {
    console.error('Error in submit-contact function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to submit contact form',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
