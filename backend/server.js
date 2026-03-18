import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {
  createNewNote,
  deleteNoteById,
  editNoteById,
  getAllNotes,
  loginUser,
  registerUser,
  getCurrentUser,
  logoutUser,
  checkAuth
} from "./controllers.js"
import cookieParser from "cookie-parser"

import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
)

app.get("/notes", getAllNotes)
app.post("/note", checkAuth, createNewNote)
app.delete("/notes/:noteIdToDelete", checkAuth, deleteNoteById)
app.put("/notes/:noteIdToEdit", checkAuth, editNoteById)
app.post("/register", registerUser)
app.post("/login", loginUser)
app.get("/profile", getCurrentUser)
app.post("/logout", logoutUser)

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MongoDB connected")

    app.listen(3000, () => {
      console.log("Server running on port 3000")
    })
  } catch (error) {
    console.error(error)
  }
}

startServer()
