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

export const deleteNoteById = async function (request, response) {
  const noteIdToDelete = request.params.noteIdToDelete

  console.log(noteIdToDelete)

  await NoteModel.findByIdAndDelete(noteIdToDelete)

  response.json({ message: "Deleted" })
}

export const editNoteById = async function (request, response) {
  const noteIdToEdit = request.params.noteIdToEdit
  const newContent = request.body.content

  const updatedNote = await NoteModel.findByIdAndUpdate(
    noteIdToEdit,
    {
      content: newContent
    },
    { new: true }
  )

  response.json(updatedNote)
}
