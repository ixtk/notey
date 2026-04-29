import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    imageUrls: {
      type: [String],
      default: []
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
)

export const NoteModel = mongoose.model("Note", NoteSchema)
