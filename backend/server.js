import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {
  createNewNote,
  deleteNoteById,
  editNoteById,
  getAllNotes
} from "./controllers.js"

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: process.env.FRONTEND_URL
  })
)

app.get("/notes", getAllNotes)
app.post("/note", createNewNote)
app.delete("/notes/:noteIdToDelete", deleteNoteById)
app.put("/notes/:noteIdToEdit", editNoteById)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
