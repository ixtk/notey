import { useState, useEffect } from "react"
import { Navigation } from "./components/Navigation"
import { AddIcon } from "./components/Icons"
import { Walkthrough } from "./components/Walkthrough"
import Note from "./components/Note"

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

  useEffect(function () {
    getNotes()
  }, [])

  if (showWalkthrough) {
    return <Walkthrough onClose={() => setShowWalkthrough(false)} />
  }

  const noteElements = notes.map(function (note) {
    return <Note noteData={note} notes={notes} setNotes={setNotes} />
  })

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
