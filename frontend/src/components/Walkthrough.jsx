import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useState } from "react"

export function Walkthrough({ onClose }) {
  const [activeSection, setActiveSection] = useState("overview")

  const sections = [
    { id: "overview", label: "მიმოხილვა" },
    { id: "setup", label: "პროექტის დაყენება" },
    { id: "create", label: "note-ის შექმნა" },
    { id: "edit", label: "note-ის რედაქტირება" },
    { id: "delete", label: "note-ის წაშლა" },
    { id: "core", label: "ძირითადი კონცეფციები" },
    { id: "architecture", label: "არქიტექტურა" }
  ]

  const CodeBadge = ({ type }) => (
    <div
      style={{
        position: "absolute",
        bottom: "0.5rem",
        right: "0.5rem",
        padding: "0.25rem 0.625rem",
        borderRadius: "4px",
        fontSize: "0.75rem",
        fontWeight: "600",
        background: "var(--primary)",
        color: "white",
        zIndex: 1
      }}
    >
      {type === "backend" ? "Backend" : "Frontend"}
    </div>
  )

  const InlineCode = ({ children }) => (
    <code
      style={{
        fontFamily: "monospace",
        fontSize: "0.875em",
        background: "rgba(0, 0, 0, 0.05)",
        padding: "0.125rem 0.375rem",
        borderRadius: "3px",
        color: "var(--text)"
      }}
    >
      {children}
    </code>
  )

  return (
    <div className="layout">
      <nav className="nav">
        <div className="container nav-content" style={{ maxWidth: "1200px" }}>
          <span className="logo" style={{ cursor: "default" }}>
            notey.
          </span>
          <button className="btn btn-ghost" onClick={onClose} type="button">
            Back to App
          </button>
        </div>
      </nav>

      <div
        className="container"
        style={{
          maxWidth: "1200px",
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start"
        }}
      >
        {/* Sidebar Navigation */}
        <aside
          style={{
            width: "220px",
            position: "sticky",
            top: "100px",
            flexShrink: 0
          }}
        >
          <div className="card" style={{ padding: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem"
              }}
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`btn ${
                    activeSection === section.id ? "btn-primary" : "btn-ghost"
                  }`}
                  style={{
                    justifyContent: "flex-start",
                    width: "100%",
                    fontSize: "0.875rem",
                    textAlign: "left",
                    fontFamily: "inherit"
                  }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="card" style={{ marginBottom: "2rem" }}>
              <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                მიმოხილვა
              </h2>
              <p className="text-muted" style={{ marginBottom: "1rem" }}>
                ეს არის სრული walkthrough notey აპლიკაციის შესაქმნელად - MERN
                stack აპლიკაცია note-ების მართვისთვის.
              </p>
              <h3 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>
                რას ვისწავლით:
              </h3>
              <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>პროექტის დაყენება</strong>: Express backend და React
                  frontend-ის კონფიგურაცია
                </li>
                <li>
                  <strong>note-ის შექმნა</strong>: POST მოთხოვნით ახალი
                  note-ების MongoDB-ში შენახვა
                </li>
                <li>
                  <strong>note-ის რედაქტირება</strong>: როგორ გავაკეთოთ
                  რედაქტირება და რატომ გავიტანეთ Note ცალკე კომპონენტში
                </li>
                <li>
                  <strong>note-ის წაშლა</strong>: DELETE მოთხოვნით note-ების
                  წაშლა
                </li>
                <li>
                  <strong>არქიტექტურა</strong>: როგორ მუშაობს frontend-backend
                  კომუნიკაცია
                </li>
              </ul>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "var(--bg)",
                  borderRadius: "8px"
                }}
              >
                <p className="text-muted">
                  💡 <strong>რჩევა:</strong> გამოიყენეთ ზედა მენიუ სხვადასხვა
                  თემებზე გადასასვლელად. ყველა კოდი ნაბიჯ-ნაბიჯ არის ახსნილი
                  ქართულად.
                </p>
              </div>
            </div>
          )}

          {/* Setup Section */}
          {activeSection === "setup" && (
            <>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  პროექტის დაყენება
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Backend-ის ინიციალიზაცია
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    შექმენით backend საქაღალდე და გაუკეთეთ Node.js-ის
                    ინიციალიზაცია:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  >
                    {`mkdir backend
cd backend
npm init -y`}
                  </SyntaxHighlighter>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    ბიბლიოთეკების ინსტალაცია
                  </h3>
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {`npm install express cors mongoose
npm install --save-dev nodemon`}
                  </SyntaxHighlighter>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <strong>express</strong>: ვებ-ფრეიმვორქი Node.js-ისთვის
                    </li>
                    <li>
                      <strong>cors</strong>: სხვადასხვა მისამართიდან მოთხოვნების
                      დაშვება
                    </li>
                    <li>
                      <strong>mongoose</strong>: MongoDB-სთან მუშაობის ხელსაწყო
                    </li>
                    <li>
                      <strong>nodemon</strong>: სერვერის ავტომატური გადატვირთვა
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    package.json კონფიგურაცია
                  </h3>
                  <SyntaxHighlighter
                    language="json"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  >
                    {`{
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  }
}`}
                  </SyntaxHighlighter>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Mongoose Schema
                  </h3>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const NoteModel = mongoose.model("Note", NoteSchema)`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    საწყისი server.js
                  </h3>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    >
                      {`import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

const NoteSchema = new mongoose.Schema(
  { content: { type: String, required: true } },
  { timestamps: true }
)

const NoteModel = mongoose.model("Note", NoteSchema)

// ენდპოინტები მოგვიანებით დაემატება

mongoose
  .connect("mongodb://127.0.0.1:27017/notey")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend დაყენება
                  </h3>
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  >
                    {`npm create vite@latest frontend
cd frontend
npm install`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </>
          )}

          {/* Create Section */}
          {activeSection === "create" && (
            <>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  note-ის შექმნა
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend - ფორმის UI
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    textarea და ღილაკი ახალი note-ის შესაყვანად:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`<div className="card">
  <textarea
    value={newNote}
    onChange={function(event) {
      setNewNote(event.target.value)
    }}
    className="textarea"
    placeholder="What's on your mind?"
  />
  
  <button
    className="btn btn-primary"
    onClick={saveNote}
  >
    Add Note
  </button>
</div>`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    <InlineCode>value=&#123;newNote&#125;</InlineCode>{" "}
                    აკავშირებს ფორმას state-თან, ხოლო{" "}
                    <InlineCode>onChange</InlineCode> ყოველი შეყვანის დროს
                    ანახლებს state-ს.
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend - POST მოთხოვნის გაგზავნა
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    App.jsx-ში <InlineCode>saveNote</InlineCode> ფუნქცია
                    აგზავნის POST მოთხოვნას:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`async function saveNote() {
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
  
  // ვამატებთ ახალ note-ს არსებულ სიაში
  setNotes([json.note, ...notes])
  
  // ვასუფთავებთ ფორმას
  setNewNote("")
}`}
                    </SyntaxHighlighter>
                  </div>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <InlineCode>method: "POST"</InlineCode>: მონაცემების
                      გაგზავნის მეთოდი
                    </li>
                    <li>
                      <InlineCode>headers</InlineCode>: ვეუბნებით სერვერს, რომ
                      JSON-ს ვგზავნით
                    </li>
                    <li>
                      <InlineCode>body</InlineCode>: JSON.stringify გარდაქმნის
                      ობიექტს JSON string-ად
                    </li>
                    <li>
                      <InlineCode>[json.note, ...notes]</InlineCode>: ახალ
                      note-ს ვამატებთ სიის დასაწყისში
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Backend - POST Endpoint
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    server.js-ში ვამატებთ ენდპოინტს ახალი note-ის შესაქმნელად:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// server.js
app.post("/note", async function(request, response) {
  const newContent = request.body.content
  
  const newNote = await NoteModel.create({
    content: newContent
  })
  
  response.status(201).json({ note: newNote })
})`}
                    </SyntaxHighlighter>
                  </div>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <InlineCode>request.body.content</InlineCode>:
                      Frontend-იდან გამოგზავნილი ტექსტი
                    </li>
                    <li>
                      <InlineCode>NoteModel.create()</InlineCode>: MongoDB-ში
                      ახალი note-ის შექმნა
                    </li>
                    <li>
                      <InlineCode>status(201)</InlineCode>: "Created" -
                      წარმატებით შექმნის კოდი
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Edit Section */}
          {activeSection === "edit" && (
            <>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  note-ის რედაქტირება
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    პრობლემა: გლობალური isEditing State
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    თავდაპირველად <InlineCode>isEditing</InlineCode> state იყო
                    App.jsx-ში, რაც იწვევდა პრობლემას: როცა Edit-ზე დაჭერას
                    ვახდენდით, ყველა note გადადიოდა რედაქტირების რეჟიმში.
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// ❌ არასწორი მიდგომა - App.jsx-ში
function App() {
  const [isEditing, setIsEditing] = useState(false) // ერთი state ყველა note-სთვის!
  
  const noteElements = notes.map((note) => (
    <div key={note._id}>
      {isEditing ? <textarea /> : <div>{note.content}</div>}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  ))
}`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    ეს იმიტომ ხდებოდა, რომ ერთი{" "}
                    <InlineCode>isEditing</InlineCode> ცვლადი აკონტროლებდა ყველა
                    note-ის მდგომარეობას.
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend - გადაჭრა: Note კომპონენტი
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    ამოვიღეთ note-ის ლოგიკა ცალკე Note.jsx კომპონენტში, სადაც
                    თითოეულ note-ს აქვს საკუთარი{" "}
                    <InlineCode>isEditing</InlineCode> state:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// ✅ სწორი მიდგომა - Note.jsx
import { useState } from "react"

function Note({ noteData, notes, setNotes }) {
  // თითოეულ Note კომპონენტს აქვს საკუთარი state!
  const [isEditing, setIsEditing] = useState(false)
  const [newContent, setNewContent] = useState(noteData.content)
  
  return (
    <div className="card">
      {isEditing ? (
        <textarea 
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <div>{noteData.content}</div>
      )}
      
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  )
}

export default Note`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    ახლა App.jsx მხოლოდ რენდერავს Note კომპონენტებს:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// App.jsx
const noteElements = notes.map(function (note) {
  return <Note 
    key={note._id}
    noteData={note} 
    notes={notes} 
    setNotes={setNotes} 
  />
})`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend - რედაქტირების შენახვა
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    Note.jsx-ში ვამატებთ PUT მოთხოვნას note-ის განახლებისთვის:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`async function editNote() {
  const response = await fetch(
    \`http://localhost:3000/notes/\${noteData._id}\`,
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
  
  const json = await response.json()
  
  // State-ის განახლება
  const updatedNotes = notes.map((note) => {
    if (note._id === noteData._id) {
      return json.note // განახლებული note
    }
    return note
  })
  
  setNotes(updatedNotes)
  setIsEditing(false)
}`}
                    </SyntaxHighlighter>
                  </div>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <InlineCode>method: "PUT"</InlineCode>: არსებული რესურსის
                      განახლების მეთოდი
                    </li>
                    <li>
                      <InlineCode>noteData._id</InlineCode>: კონკრეტული note-ის
                      იდენტიფიკატორი
                    </li>
                    <li>
                      <InlineCode>notes.map()</InlineCode>: ვიპოვით და ვანახლებთ
                      კონკრეტულ note-ს სიაში
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Backend - PUT Endpoint
                  </h3>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// server.js
app.put("/notes/:id", async function(request, response) {
  const noteId = request.params.id
  const newContent = request.body.content
  
  const updatedNote = await NoteModel.findByIdAndUpdate(
    noteId,
    { content: newContent },
    { new: true } // დააბრუნებს განახლებულ დოკუმენტს
  )
  
  response.json({ note: updatedNote })
})`}
                    </SyntaxHighlighter>
                  </div>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <InlineCode>:id</InlineCode>: URL პარამეტრი note-ის
                      იდენტიფიკაციისთვის
                    </li>
                    <li>
                      <InlineCode>findByIdAndUpdate()</InlineCode>: MongoDB
                      მეთოდი დოკუმენტის განახლებისთვის
                    </li>
                    <li>
                      <InlineCode>&#123; new: true &#125;</InlineCode>: აბრუნებს
                      განახლებულ დოკუმენტს (არა ძველს)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    რატომ არის ეს უკეთესი?
                  </h3>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <strong>იზოლაცია</strong>: თითოეულ note-ს აქვს
                      დამოუკიდებელი state
                    </li>
                    <li>
                      <strong>ორგანიზება</strong>: note-ის ლოგიკა ერთ ადგილას
                    </li>
                    <li>
                      <strong>მასშტაბურობა</strong>: ადვილად ემატება ახალი
                      ფუნქციები
                    </li>
                    <li>
                      <strong>React პრინციპები</strong>: მცირე, ფოკუსირებული
                      კომპონენტები
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Delete Section */}
          {activeSection === "delete" && (
            <>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  note-ის წაშლა
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend - ღილაკის დამატება
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    Note.jsx კომპონენტში ვამატებთ Delete ღილაკს:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`<button
  onClick={() => deleteNote(noteData._id)}
  className="btn btn-ghost danger"
  title="Delete"
>
  <DeleteIcon />
</button>`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    <InlineCode>() =&gt; deleteNote(noteData._id)</InlineCode> -
                    arrow function-ია, რომელიც deleteNote-ს იძახებს მხოლოდ
                    მაშინ, როცა ღილაკს დავაჭერთ.
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Frontend - DELETE მოთხოვნა
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    Note.jsx კომპონენტში <InlineCode>deleteNote</InlineCode>{" "}
                    ფუნქცია:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`async function deleteNote(noteIdToDelete) {
  // DELETE მოთხოვნა backend-ზე
  const response = await fetch(
    \`http://localhost:3000/notes/\${noteIdToDelete}\`,
    {
      method: "DELETE"
    }
  )
  
  // წავშალოთ note ლოკალურად state-დან
  const updatedNotes = notes.filter(function (note) {
    return note._id !== noteIdToDelete
  })
  
  setNotes(updatedNotes)
}`}
                    </SyntaxHighlighter>
                  </div>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <InlineCode>method: "DELETE"</InlineCode>: რესურსის წაშლის
                      მეთოდი
                    </li>
                    <li>
                      <InlineCode>notes.filter()</InlineCode>: ყველა note-ის
                      დაბრუნება გარდა იმისა, რომლის <InlineCode>_id</InlineCode>{" "}
                      ემთხვევა <InlineCode>noteIdToDelete</InlineCode>-ს
                    </li>
                    <li>
                      <InlineCode>setNotes</InlineCode>: state-ის განახლება
                      (React-ი ხელახლა რენდერავს UI-ს)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Backend - DELETE Endpoint
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    server.js-ში ვამატებთ DELETE ენდპოინტს:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// server.js
app.delete("/notes/:id", async function(request, response) {
  const noteId = request.params.id
  
  await NoteModel.findByIdAndDelete(noteId)
  
  response.json({ message: "Note deleted successfully" })
})`}
                    </SyntaxHighlighter>
                  </div>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <InlineCode>:id</InlineCode>: URL პარამეტრი note-ის
                      იდენტიფიკაციისთვის
                    </li>
                    <li>
                      <InlineCode>findByIdAndDelete()</InlineCode>: MongoDB
                      მეთოდი დოკუმენტის წაშლისთვის
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Core Concepts Section */}
          {activeSection === "core" && (
            <>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  ძირითადი კონცეფციები
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    რა არის .map() მეთოდი?
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    <InlineCode>.map()</InlineCode> არის JavaScript მეთოდი,
                    რომელიც გადაივლის Array-ის თითოეულ ელემენტს და აბრუნებს ახალ
                    Array-ს გარდაქმნილი ელემენტებით.
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// მარტივი მაგალითი
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(function(num) {
  return num * 2
})
// doubled = [2, 4, 6, 8, 10]

// ჩვენს აპში:
const noteElements = notes.map(function (note) {
  return <Note key={note._id} noteData={note} />
})
// noteElements = [<Note />, <Note />, <Note />...]`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    React-ში <InlineCode>.map()</InlineCode>-ს ვიყენებთ
                    მონაცემების სიის (Array) კომპონენტების სიად (Array)
                    გარდაქმნისთვის. თითოეული note ობიექტი გარდაიქმნება{" "}
                    <InlineCode>&lt;Note /&gt;</InlineCode> კომპონენტად.
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    რატომ arrow function onClick-ში?
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    Delete ღილაკზე ვწერთ{" "}
                    <InlineCode>
                      onClick=&#123;() =&gt; deleteNote(id)&#125;
                    </InlineCode>{" "}
                    და არა{" "}
                    <InlineCode>onClick=&#123;deleteNote(id)&#125;</InlineCode>.
                    განსხვავება:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// ❌ არასწორი - ფუნქცია მაშინვე გაეშვება!
<button onClick={deleteNote(noteData._id)}>Delete</button>
// deleteNote ფუნქცია გაეშვება რენდერის დროს, არა click-ის დროს

// ✅ სწორი - arrow function ქმნის ახალ ფუნქციას
<button onClick={() => deleteNote(noteData._id)}>Delete</button>
// deleteNote გაეშვება მხოლოდ მაშინ, როცა ღილაკს დავაჭერთ

// ასევე შეიძლება ასე:
<button onClick={function() { deleteNote(noteData._id) }}>Delete</button>`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    Arrow function <InlineCode>() =&gt; ...</InlineCode>{" "}
                    "ახვევს" ფუნქციის გამოძახებას, რითიც React-ს ვეუბნებით: "ეს
                    კოდი გაუშვი მაშინ, როცა მომხმარებელი ღილაკს დააჭერს", და არა
                    მაშინვე.
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    საიდან მოდის note-ის ID?
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    <InlineCode>_id</InlineCode> ველს აგენერირებს MongoDB, როცა
                    ახალ დოკუმენტს ვქმნით. ეს არის უნიკალური იდენტიფიკატორი.
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// როცა MongoDB-ში note-ს ვქმნით:
const newNote = await NoteModel.create({
  content: "Hello World"
})

console.log(newNote)
// {
//   _id: "6751a3f2b8c4d5e6f7a8b9c0",  ← MongoDB-მ დააგენერირა!
//   content: "Hello World",
//   createdAt: "2024-01-15T10:30:00.000Z",
//   updatedAt: "2024-01-15T10:30:00.000Z"
// }`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    ეს <InlineCode>_id</InlineCode> გვჭირდება, რომ:
                  </p>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      React-ში <InlineCode>key</InlineCode> prop-ად გამოვიყენოთ
                    </li>
                    <li>განვსაზღვროთ, რომელი note უნდა განვაახლოთ (PUT)</li>
                    <li>განვსაზღვროთ, რომელი note უნდა წავშალოთ (DELETE)</li>
                  </ul>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    როგორ ვიცით, რომელი note იედითება?
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    თითოეული <InlineCode>&lt;Note /&gt;</InlineCode> კომპონენტი
                    არის დამოუკიდებელი instance საკუთარი state-ით. ამიტომ, როცა
                    ერთ note-ში <InlineCode>setIsEditing(true)</InlineCode>-ს
                    ვიძახებთ, იცვლება მხოლოდ ამ კონკრეტული კომპონენტის state.
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`// თითოეული Note კომპონენტი:
function Note({ noteData, notes, setNotes }) {
  // ეს state არის უნიკალური ამ კონკრეტული Note-სთვის!
  const [isEditing, setIsEditing] = useState(false)
  const [newContent, setNewContent] = useState(noteData.content)
  
  // როცა Edit-ზე ვაჭერთ:
  // მხოლოდ ეს კონკრეტული კომპონენტის isEditing იცვლება true-ზე
  function startEdit() {
    setIsEditing(true)
  }
  
  return (
    <div>
      {isEditing ? <textarea /> : <p>{noteData.content}</p>}
      <button onClick={startEdit}>Edit</button>
    </div>
  )
}

// App.jsx ქმნის 3 დამოუკიდებელ Note კომპონენტს:
// <Note /> ← საკუთარი isEditing
// <Note /> ← საკუთარი isEditing  
// <Note /> ← საკუთარი isEditing`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    ეს React-ის ძირითადი პრინციპია: კომპონენტები არიან
                    დამოუკიდებელი, თავიანთი state-ით. თითოეული Note კომპონენტი
                    არის როგორც ცალკე მინი-აპლიკაცია თავისი მონაცემებით.
                  </p>
                </div>

                <div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Conditional Rendering (პირობითი რენდერი)
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    JSX-ში ხშირად ვიყენებთ ternary operator-ს (
                    <InlineCode>? :</InlineCode>), რომ პირობის მიხედვით
                    სხვადასხვა UI გამოვაჩინოთ:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="jsx"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    >
                      {`// თუ isEditing === true, გამოაჩინე textarea
// თუ isEditing === false, გამოაჩინე div
{isEditing ? (
  <textarea value={newContent} onChange={...} />
) : (
  <div>{noteData.content}</div>
)}

// მარტივი სქემა:
// { პირობა ? გამოაჩინე_ეს : თუ_არა_გამოაჩინე_ეს }`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Architecture Section */}
          {activeSection === "architecture" && (
            <>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  არქიტექტურა და მუშაობის პრინციპი
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    CORS - Cross-Origin Resource Sharing
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    CORS უსაფრთხოების მექანიზმია. ჩვენი Frontend
                    (localhost:5173) და Backend (localhost:3000) განსხვავებულ
                    პორტებზე მუშაობენ, ამიტომ ბრაუზერი მათ სხვადასხვა წყაროდ
                    აღიქვამს:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="backend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    >
                      {`// server.js
app.use(cors({
  origin: "http://localhost:5173" // Frontend-ის მისამართი
}))`}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    React State Management
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    useState hook-ი აკონტროლებს მონაცემებს:
                  </p>
                  <div style={{ position: "relative" }}>
                    <CodeBadge type="frontend" />
                    <SyntaxHighlighter
                      language="javascript"
                      style={vscDarkPlus}
                      customStyle={{
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      {`const [notes, setNotes] = useState([])  // note-ების მასივი
const [newNote, setNewNote] = useState("")  // ფორმის ტექსტი

// state-ის ცვლილება → React ასახავს ეკრანზე`}
                    </SyntaxHighlighter>
                  </div>
                  <p className="text-muted">
                    როცა setNotes-ს ვიძახებთ, React ავტომატურად რენდერავს
                    კომპონენტს ხელახლა.
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    Component ფაილების სტრუქტურა
                  </h3>
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {`src/
  App.jsx              // მთავარი კომპონენტი
  components/
    Note.jsx           // ცალკეული note (საკუთარი isEditing state)
    Navigation.jsx     // ნავიგაცია
    Icons.jsx          // SVG იკონები
    Walkthrough.jsx    // დოკუმენტაცია`}
                  </SyntaxHighlighter>
                  <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
                    <li>
                      <strong>App.jsx</strong>: notes მასივის მართვა და HTTP
                      მოთხოვნები
                    </li>
                    <li>
                      <strong>Note.jsx</strong>: თითოეული note-ის რენდერი და
                      რედაქტირება
                    </li>
                    <li>
                      რატომ ცალკე? თითოეულ note-ს სჭირდება საკუთარი isEditing
                      state!
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    GET - მონაცემების წამოღება
                  </h3>
                  <div
                    style={{
                      background: "var(--bg-secondary)",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                      marginBottom: "0.75rem"
                    }}
                  >
                    1. useEffect → getNotes()
                    <br />
                    2. fetch("localhost:3000/notes")
                    <br />
                    3. Backend → NoteModel.find()
                    <br />
                    4. response.json()
                    <br />
                    5. setNotes(json.notes)
                    <br />
                    6. React რენდერავს ეკრანზე
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    POST - note-ის შექმნა
                  </h3>
                  <div
                    style={{
                      background: "var(--bg-secondary)",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                      marginBottom: "0.75rem"
                    }}
                  >
                    1. მომხმარებელი წერს textarea-ში
                    <br />
                    2. onChange → setNewNote(text)
                    <br />
                    3. Click "Add Note" → saveNote()
                    <br />
                    4. fetch POST + body: &#123;content&#125;
                    <br />
                    5. Backend → NoteModel.create()
                    <br />
                    6. setNotes([newNote, ...notes])
                    <br />
                    7. React რენდერავს განახლებულ სიას
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    PUT - note-ის რედაქტირება
                  </h3>
                  <div
                    style={{
                      background: "var(--bg-secondary)",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                      marginBottom: "0.75rem"
                    }}
                  >
                    1. Click Edit → setIsEditing(true)
                    <br />
                    2. textarea-ში რედაქტირება
                    <br />
                    3. Click Save → editNote()
                    <br />
                    4. fetch PUT + new content
                    <br />
                    5. Backend → findByIdAndUpdate()
                    <br />
                    6. notes.map() → განახლებული note
                    <br />
                    7. setIsEditing(false)
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    DELETE - note-ის წაშლა
                  </h3>
                  <div
                    style={{
                      background: "var(--bg-secondary)",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      lineHeight: "1.8",
                      marginBottom: "0.75rem"
                    }}
                  >
                    1. Click Delete → deleteNote(id)
                    <br />
                    2. fetch DELETE
                    <br />
                    3. Backend → findByIdAndDelete()
                    <br />
                    4. notes.filter(note !== deleted)
                    <br />
                    5. setNotes(filteredNotes)
                  </div>
                </div>

                <div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                    აპლიკაციის გაშვება
                  </h3>
                  <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
                    ორი ტერმინალი:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem"
                    }}
                  >
                    {`# Terminal 1 - Backend
cd backend
npm run dev
# → http://localhost:3000`}
                  </SyntaxHighlighter>
                  <SyntaxHighlighter
                    language="bash"
                    style={vscDarkPlus}
                    customStyle={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  >
                    {`# Terminal 2 - Frontend
cd frontend
npm run dev
# → http://localhost:5173`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
