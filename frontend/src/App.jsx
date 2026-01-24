import { useState, useEffect } from "react"
import { Navigation } from "./components/Navigation"
import { Walkthrough } from "./components/Walkthrough"
import Note from "./components/Note"
import { CreateNote } from "./components/CreateNote"
import client from "./axiosClient"

function App() {
  const [notes, setNotes] = useState([])
  const [showWalkthrough, setShowWalkthrough] = useState(false)

  useEffect(function () {
    async function getNotes() {
      // const response = await fetch("http://localhost:3000/notes")
      // const json = await response.json()

      const response = await client.get("/notes")
      const json = response.data

      console.log(json.notes)

      setNotes(json.notes)
    }

    getNotes()
  }, [])

  if (showWalkthrough) {
    return <Walkthrough onClose={() => setShowWalkthrough(false)} />
  }

  const noteElements = notes.map(function (note) {
    return (
      <Note key={note._id} noteData={note} notes={notes} setNotes={setNotes} />
    )
  })

  return (
    <div className="layout">
      <Navigation onWalkthroughClick={() => setShowWalkthrough(true)} />

      <main className="container" style={{ maxWidth: "800px" }}>
        <div style={{ padding: "0 0.5rem 2rem" }}>
          <p className="text-muted">Capture ideas, lists, and thoughts.</p>
        </div>

        <CreateNote setNotes={setNotes} notes={notes} />

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
