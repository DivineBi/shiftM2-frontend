export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);

  
  formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dda0hstsb/image/upload",
    {
        method: 'POST',
        body: formData
    }

  );

  if (!res.ok) {
    throw new Error('Failed to upload image');
  }

  const data = await res.json();
  return data.secure_url; // Return the URL of the uploaded image
}