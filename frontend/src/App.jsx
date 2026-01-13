import { useState, useEffect } from "react"
import { Navigation } from "./components/Navigation"
import { AddIcon, EditIcon, DeleteIcon } from "./components/Icons"
import { Walkthrough } from "./components/Walkthrough"

function App() {
  const [notes, setNotes] = useState([])
  const [showWalkthrough, setShowWalkthrough] = useState(false)
  const [newNote, setNewNote] = useState("")

  async function getNotes() {
    const response = await fetch("http://localhost:3000/notes")
    const json = await response.json()

    console.log(json.notes)

    setNotes(json.notes)
  }

  async function saveNote() {
    console.log("Saving", newNote)

    const response = await fetch("http://localhost:3000/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: newNote
      })
    })

    const json = await response.json()

    console.log(json)

    setNotes([json.note, ...notes])

    setNewNote("")
  }

  async function deleteNote(noteIdToDelete) {
    console.log("Deleting", noteIdToDelete)

    const response = await fetch(
      `http://localhost:3000/notes/${noteIdToDelete}`,
      {
        method: "DELETE"
      }
    )

    // prevNotes.filter(note => note.id !== noteIdToDelete)

    const updatedNotes = notes.filter(function(note) {
      if (note._id === noteIdToDelete) {
        return false
      } else {
        return true
      }
    })

    setNotes(updatedNotes)
  }

  useEffect(function () {
    getNotes()
  }, [])

  if (showWalkthrough) {
    return <Walkthrough onClose={() => setShowWalkthrough(false)} />
  }

  const noteElements = notes.map((note) => (
    <div key={note._id} className="card">
      {/* <h3>{note._id}</h3> */}
      <div className="note-content mb-4">{note.content}</div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted">{note.timestamp}</span>

        <div className="card-actions">
          <button className="btn btn-ghost" title="Edit">
            <EditIcon />
          </button>
          <button
            onClick={() => deleteNote(note._id)}
            className="btn btn-ghost danger"
            title="Delete"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="layout">
      <Navigation onWalkthroughClick={() => setShowWalkthrough(true)} />

      <main className="container" style={{ maxWidth: "800px" }}>
        <div style={{ padding: "0 0.5rem 2rem" }}>
          <p className="text-muted">Capture ideas, lists, and thoughts.</p>
        </div>

        <div className="card">
          <div className="flex flex-col gap-3">
            <textarea
              value={newNote}
              onChange={function (event) {
                setNewNote(event.target.value)
              }}
              className="textarea"
              placeholder="What's on your mind?"
            />
            <div className="flex justify-between items-center">
              <button
                className="btn btn-primary"
                style={{ marginLeft: "auto" }}
                onClick={saveNote}
              >
                <AddIcon />
                Add Note
              </button>
            </div>
          </div>
        </div>

        {notes.length === 0 && (
          <div
            className="text-muted"
            style={{ textAlign: "center", padding: "3rem 0" }}
          >
            No notes found.
          </div>
        )}

        {notes.length > 0 && <div className="note-list">{noteElements}</div>}
      </main>
    </div>
  )
}

export default App
