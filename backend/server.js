import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)

const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const NoteModel = mongoose.model("Note", NoteSchema)

app.get("/notes", async function (request, response) {
  const notes = await NoteModel.find()

  response.json({ notes: notes })
})

app.post("/note", async function (request, response) {
  const newContent = request.body.content

  console.log(newContent)

  const newNote = await NoteModel.create({
    content: newContent
  })

  response.status(201).json({ note: newNote })
})

app.delete("/notes/:noteIdToDelete", async function (request, response) {
  const noteIdToDelete = request.params.noteIdToDelete

  console.log(noteIdToDelete)

  await NoteModel.findByIdAndDelete(noteIdToDelete)

  response.json({ message: "Deleted" })
})

// notes/123
// notes/abc
app.put("/notes/:noteIdToEdit", async function (request, response) {
  const noteIdToEdit = request.params.noteIdToEdit
  const newContent = request.body.content

  const updatedNote = await NoteModel.findByIdAndUpdate(noteIdToEdit, {
    content: newContent
  })

  response.json(updatedNote)
})

mongoose
  .connect("mongodb://127.0.0.1:27017/notey")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
