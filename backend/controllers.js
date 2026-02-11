import bcrypt from "bcryptjs"
import { NoteModel } from "./NoteModel.js"
import { UserModel } from "./UserModel.js"

export async function getAllNotes(request, response) {
  const notes = await NoteModel.find()

  response.json({ notes: notes })
}

export async function createNewNote(request, response) {
  const newContent = request.body.content

  console.log(newContent, typeof newContent, newContent.length)

  if (typeof newContent !== "string") {
    return response
      .status(400)
      .json({ message: "Note content must be a string" })
  } else if (newContent.length < 3) {
    return response.status(400).json({ message: "Note length must be at least 3" })
  }

  console.log(newContent)

  const newNote = await NoteModel.create({
    content: newContent
  })

  response.status(201).json({ note: newNote })
}

export const deleteNoteById = async function (request, response) {
  const noteIdToDelete = request.params.noteIdToDelete

  console.log(noteIdToDelete)

  await NoteModel.findByIdAndDelete(noteIdToDelete)

  response.json({ message: "Deleted" })
}

export const editNoteById = async function (request, response) {
  const noteIdToEdit = request.params.noteIdToEdit
  const newContent = request.body.content

  if (typeof newContent !== "string") {
    return response
      .status(400)
      .json({ message: "Note content must be a string" })
  } else if (newContent.length < 3) {
    return response
      .status(400)
      .json({ message: "Note length must be at least 3" })
  }

  const updatedNote = await NoteModel.findByIdAndUpdate(
    noteIdToEdit,
    {
      content: newContent
    },
    { new: true }
  )

  response.json(updatedNote)
}

export async function registerUser(request, response) {
  const email = request.body.email
  const password = request.body.password

  if (typeof email !== "string" || typeof password !== "string") {
    return response
      .status(400)
      .json({ message: "Email and password must be strings" })
  }

  if (email.length < 3) {
    return response.status(400).json({ message: "Email is too short" })
  }

  if (password.length < 6) {
    return response.status(400).json({ message: "Password must be at least 6" })
  }

  const existingUser = await UserModel.findOne({ email: email })

  if (existingUser) {
    return response.status(409).json({ message: "Email is already in use" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await UserModel.create({
    email: email,
    password: hashedPassword
  })

  response.status(201).json({
    user: {
      id: newUser._id,
      email: newUser.email
    }
  })
}

export async function loginUser(request, response) {
  const email = request.body.email
  const password = request.body.password

  if (typeof email !== "string" || typeof password !== "string") {
    return response
      .status(400)
      .json({ message: "Email and password must be strings" })
  }

  const user = await UserModel.findOne({ email: email })

  if (!user) {
    return response.status(401).json({ message: "Invalid credentials" })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return response.status(401).json({ message: "Invalid credentials" })
  }

  response.json({
    user: {
      id: user._id,
      email: user.email
    }
  })
}
