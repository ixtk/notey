import { useState } from "react"
import { EditIcon, DeleteIcon } from "./Icons"
import client from "../axiosClient"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"

function Note({ noteData, notes, setNotes }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newContent, setNewContent] = useState(noteData.content)
  const [error, setError] = useState("")
  const { loggedInUser } = useContext(AuthContext)

  async function deleteNote(noteIdToDelete) {
    console.log("Deleting", noteIdToDelete)

    /*
    const response = await fetch(
      `http://localhost:3000/notes/${noteIdToDelete}`,
      {
        method: "DELETE"
      }
    )
    */

    const response = await client.delete(`/notes/${noteIdToDelete}`)

    // prevNotes.filter(note => note.id !== noteIdToDelete)

    const updatedNotes = notes.filter(function (note) {
      if (note._id === noteIdToDelete) {
        return false
      } else {
        return true
      }
    })

    setNotes(updatedNotes)
  }

  function cancelEdit() {
    setIsEditing(false)
  }

  function handleNoteChange(event) {
    if (event.target.value.length < 3) {
      setError("Note must be at least 3 characters long")
    } else {
      setError("")
    }

    setNewContent(event.target.value)
  }

  async function editNote() {
    console.log("Editing note to:", newContent)

    /*
    const response = await fetch(
      `http://localhost:3000/notes/${noteData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: newContent
        })
      }
    )

    const updatedNote = await response.json()
    */

    if (newContent.length < 3) {
      setError("Note must be at least 3 characters long")
      return
    } else {
      setError("")
    }

    const response = await client.put(`/notes/${noteData._id}`, {
      content: newContent
    })

    const updatedNote = response.data

    const updatedNotes = notes.map(function (note) {
      if (note._id === noteData._id) {
        return updatedNote
      } else {
        return note
      }
    })

    setNotes(updatedNotes)

    setIsEditing(false)
  }

  return (
    <div className="card">
      {isEditing === true ? (
        <>
          <textarea onChange={handleNoteChange} className="textarea">
            {noteData.content}
          </textarea>
          <span style={{ fontSize: "small", color: "red" }}>{error}</span>
        </>
      ) : (
        <div>
          <img src={noteData.imageUrl} alt="" />
          <div className="note-content mb-4">{noteData.content}</div>
        </div>
      )}

      {/* logged in + note author */}
      {loggedInUser !== null && loggedInUser === noteData.userId?.email && (
        <div className="flex justify-between items-center">
          <div className="card-actions">
            {isEditing === true ? (
              <>
                <button
                  onClick={cancelEdit}
                  className="btn btn-ghost"
                  title="Cancel"
                >
                  Cancel
                </button>
                <button
                  onClick={editNote}
                  className="btn btn-primary"
                  title="Save"
                  disabled={newContent.length < 3}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={function () {
                    setIsEditing(true)
                  }}
                  className="btn btn-ghost"
                  title="Edit"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => deleteNote(noteData._id)}
                  className="btn btn-ghost danger"
                  title="Delete"
                >
                  <DeleteIcon />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* note author email */}
      <p>{noteData.userId?.email}</p>
    </div>
  )
}

export default Note
