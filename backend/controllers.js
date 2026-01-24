import NoteModel from "./NoteModel.js"

export async function getAllNotes(request, response) {
  const notes = await NoteModel.find()

  response.json({ notes: notes })
}

export async function createNewNote(request, response) {
  const newContent = request.body.content

  console.log(newContent)

  const newNote = await NoteModel.create({
    content: newContent
  })

  response.status(201).json({ note: newNote })
}
