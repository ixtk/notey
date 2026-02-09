import NoteModel from "./NoteModel.js"

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
