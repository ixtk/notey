import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton({
  url: `${import.meta.env.VITE_BACKEND_URL}/api/uploadthing`
})
