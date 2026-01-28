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
    origin: "http://localhost:5173"
  })
)

app.get("/notes", getAllNotes)
app.post("/note", createNewNote)
app.delete("/notes/:noteIdToDelete", deleteNoteById)
app.put("/notes/:noteIdToEdit", editNoteById)

mongoose
  .connect("mongodb://127.0.0.1:27017/notey")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
