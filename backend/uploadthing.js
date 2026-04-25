import { createUploadthing } from "uploadthing/express"

const f = createUploadthing()

export const uploadRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "30MB",
      maxFileCount: 1
    }
  }).onUploadComplete((data) => {
    console.log("upload completed", data)
  })
}
