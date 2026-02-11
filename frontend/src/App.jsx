import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Walkthrough } from "./components/Walkthrough"
import Note from "./components/Note"
import { CreateNote } from "./components/CreateNote"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import client from "./axiosClient"

function HomePage() {
  const [notes, setNotes] = useState([])

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

      <CreateNote setNotes={setNotes} notes={notes} />

      {notes.length === 0 && (
        <div className="text-muted no-notes">
          No notes found.
        </div>
      )}

      {notes.length > 0 && <div className="note-list">{noteElements}</div>}
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="walkthrough" element={<Walkthrough />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
