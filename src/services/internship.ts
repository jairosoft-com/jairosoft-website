// Secure internship form submission service
// Calls Netlify serverless function instead of direct API

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
 * Submit internship application via Netlify serverless function
 * This keeps API keys secure on the server side
 */
export async function submitInternshipForm(formData: InternshipFormData): Promise<{
  success: boolean;
  contactId: string;
  opportunityId: string;
  message: string;
}> {
  try {
    const response = await fetch('/.netlify/functions/submit-internship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit internship application');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting internship application:', error);
    throw error;
  }
}
