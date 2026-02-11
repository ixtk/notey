import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export const NoteModel = mongoose.model("Note", NoteSchema)
