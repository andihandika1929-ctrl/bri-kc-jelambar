const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export async function uploadImageToCloudinary(file: File): Promise<string> {
  if (!cloudName || !uploadPreset) {
    throw new Error(
      'Konfigurasi Cloudinary belum lengkap: set VITE_CLOUDINARY_CLOUD_NAME dan VITE_CLOUDINARY_UPLOAD_PRESET di .env.local.'
    );
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  let response: Response;
  try {
    response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });
  } catch (err: any) {
    throw new Error('Gagal terhubung ke Cloudinary: ' + (err?.message || 'network error'));
  }

  let data: any = null;
  try {
    data = await response.json();
  } catch {
    // body bukan JSON
  }

  if (!response.ok) {
    throw new Error(
      `Upload Cloudinary gagal (${response.status}): ${data?.error?.message || response.statusText}`
    );
  }

  if (!data?.secure_url) {
    throw new Error('Upload Cloudinary berhasil tetapi secure_url tidak ditemukan pada respons.');
  }

  return data.secure_url as string;
}
