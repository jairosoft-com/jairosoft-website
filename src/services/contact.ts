// Secure contact form submission service
// Calls Netlify serverless function instead of direct API

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}

/**
 * Submit contact form via Netlify serverless function
 * This keeps API keys secure on the server side
 */
export async function submitContactForm(formData: ContactFormData): Promise<{
  success: boolean;
  contactId: string;
  opportunityId: string;
  message: string;
}> {
  try {
    const response = await fetch('/.netlify/functions/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit contact form');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}
