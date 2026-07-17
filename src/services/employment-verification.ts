// Secure employment verification form submission service
// Calls Netlify serverless function instead of direct API

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

/**
 * Convert File object to Base64 string
 */
export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Submit employment verification request via Netlify serverless function
 * This keeps API keys secure on the server side
 */
export async function submitEmploymentVerificationForm(formData: EmploymentVerificationFormData): Promise<{
  success: boolean;
  contactId: string;
  opportunityId: string;
  message: string;
}> {
  try {
    const response = await fetch('/api/submit-employment-verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit employment verification request');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting employment verification request:', error);
    throw error;
  }
}
