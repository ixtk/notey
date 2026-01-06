import { useState, useEffect } from "react"
import { Navigation } from "./components/Navigation"
import { AddIcon, EditIcon, DeleteIcon } from "./components/Icons"

function App() {
  const [notes, setNotes] = useState([])

  async function getNotes() {
    const response = await fetch("http://localhost:3000/notes")
    const json = await response.json()

    console.log(json.notes)

    setNotes(json.notes)
  }

  useEffect(function () {
    getNotes()
  }, [])

  const noteElements = notes.map((note) => (
    <div key={note.id} className="card">
      <div className="note-content mb-4">{note.content}</div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted">{note.timestamp}</span>

        <div className="card-actions">
          <button className="btn btn-ghost" title="Edit">
            <EditIcon />
          </button>
          <button className="btn btn-ghost danger" title="Delete">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="layout">
      <Navigation />

      <main className="container">
        <div style={{ padding: "0 0.5rem 2rem" }}>
          <p className="text-muted">Capture ideas, lists, and thoughts.</p>
        </div>

        <div className="card">
          <div className="flex flex-col gap-3">
            <textarea className="textarea" placeholder="What's on your mind?" />
            <div className="flex justify-between items-center">
              <button
                className="btn btn-primary"
                style={{ marginLeft: "auto" }}
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
