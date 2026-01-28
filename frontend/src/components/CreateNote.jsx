import { useState } from "react"
import { AddIcon } from "./Icons"
import client from "../axiosClient"

export function CreateNote(props) {
  const [newNote, setNewNote] = useState("")
  const [error, setError] = useState("")

  async function saveNote() {
    console.log("Saving", newNote)

    if (newNote.length < 3) {
      setError("Note must be at least 3 characters long")
      return
    } else {
      setError("")
    }

    /*
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
    */

    const response = await client.post("/note", {
      content: newNote
    })

    const json = response.data

    console.log(json)

    props.setNotes([json.note, ...props.notes])

    setNewNote("")
  }

  return (
    <div className="card">
      <div className="flex flex-col gap-3">
        <textarea
          value={newNote}
          onChange={function (event) {
            if (event.target.value.length < 3) {
              setError("Note must be at least 3 characters long")
            } else {
              setError("")
            }

            // if (event.target.value.length >= 3) {
            //   setError("")
            // }

            setNewNote(event.target.value)
          }}
          className="textarea"
          placeholder="What's on your mind?"
        />
        <span style={{ fontSize: "small", color: "red" }}>{error}</span>
        <div className="flex justify-between items-center">
          <button
            className="btn btn-primary"
            style={{ marginLeft: "auto" }}
            onClick={saveNote}
            // disabled={error !== ""}
            // disabled={error !== "" || newNote.length === 0}
            disabled={newNote.length < 3}
          >
            <AddIcon />
            Add Note
          </button>
        </div>
      </div>
    </div>
  )
}
