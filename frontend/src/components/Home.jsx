import client from "../axiosClient"
import { useState, useEffect } from "react"
import Note from "./Note"
import { CreateNote } from "./CreateNote"

export function HomePage() {
  const [notes, setNotes] = useState([])

  // null = user is NOT logged in
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(function () {
    async function getNotes() {
      // const response = await fetch("http://localhost:3000/notes")
      // const json = await response.json()

      const response = await client.get("/notes")
      const json = response.data

      console.log(json.notes)

      setNotes(json.notes)
    }

    async function getCurrentUser() {
      const response = await client.get("/profile")
      const json = response.data

      if (json.email) {
        setLoggedInUser(json.email)
      }

      console.log(json)
    }

    getCurrentUser()
    getNotes()
  }, [])

  const noteElements = notes.map(function (note) {
    return (
      <Note key={note._id} noteData={note} notes={notes} setNotes={setNotes} />
    )
  })

  return (
    <main className="container">
      <div className="page-subtitle">
        <p className="text-muted">Capture ideas, lists, and thoughts.</p>
      </div>

      {loggedInUser === null ? (
        <p>Login to create a note</p>
      ) : (
        <CreateNote setNotes={setNotes} notes={notes} />
      )}

      {notes.length === 0 && (
        <div className="text-muted no-notes">No notes found.</div>
      )}

      {notes.length > 0 && <div className="note-list">{noteElements}</div>}
    </main>
  )
}
