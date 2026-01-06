import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export function Walkthrough({ onClose }) {
  return (
    <div className="layout">
      <nav className="nav">
        <div className="container nav-content" style={{ maxWidth: "800px" }}>
          <span className="logo" style={{ cursor: "default" }}>
            notey.
          </span>
          <button className="btn btn-ghost" onClick={onClose} type="button">
            Back to App
          </button>
        </div>
      </nav>

      <main className="container" style={{ maxWidth: "800px" }}>
        {/* Step 1: Project Setup */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 1: პროექტის გამართვა
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              Backend-ის მომზადება
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              თავდაპირველად შექმენით backend საქაღალდე და გაუკეთეთ Node.js-ის
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
              საჭირო ბიბლიოთეკების ინსტალაცია
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
                დაშვების მექანიზმი
              </li>
              <li>
                <strong>mongoose</strong>: MongoDB-სთან მუშაობის ხელსაწყო
              </li>
              <li>
                <strong>nodemon</strong>: სერვერის ავტომატური გადატვირთვა კოდის
                შეცვლისას
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              Frontend-ის გამართვა
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              შექმენით React აპლიკაცია:
            </p>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}
            >
              {`npm create vite@latest
cd frontend
npm install`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Step 2: Backend Server */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 2: Backend სერვერის აწყობა
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              package.json-ის კონფიგურაცია
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              დაამატეთ "type": "module" ES6 იმპორტების გამოსაყენებლად:
            </p>
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

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              server.js ფაილის შექმნა
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              გამართეთ Express სერვერი CORS-ით და GET ენდპოინტით:
            </p>
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

// JSON მონაცემების დამუშავების მხარდაჭერა
app.use(express.json())

// CORS-ის ჩართვა (React მუშაობს 5173 პორტზე)
app.use(cors({
  origin: "http://localhost:5173"
}))

// GET ენდპოინტი note-ების წამოსაღებად
app.get("/notes", function(request, response) {
  const notes = [
    {
      id: "1",
      content: "შენი პირველი note!",
      timestamp: "2 საათის წინ"
    }
  ]
  response.json({ notes: notes })
})

// ბაზასთან დაკავშირება
mongoose
  .connect("mongodb://127.0.0.1:27017/notey")
  .then(() => console.log("MongoDB დაკავშირებულია"))
  .catch((err) => console.error(err))

// სერვერის გაშვება 3000 პორტზე
app.listen(3000, () => {
  console.log("სერვერი ჩაირთო 3000 პორტზე")
})`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Step 3: CORS Explanation */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 3: CORS-ის პრინციპი
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              რა არის CORS?
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              CORS (Cross-Origin Resource Sharing) უსაფრთხოების მექანიზმია,
              რომელსაც ბრაუზერები იყენებენ. ის ზღუდავს ვებ-გვერდის მიერ
              მოთხოვნების გაგზავნას სხვა მისამართზე, გარდა იმისა, საიდანაც თავად
              გვერდი ჩაიტვირთა.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              რატომ გვჭირდება ის?
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              ჩვენს შემთხვევაში:
            </p>
            <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
              <li>
                <strong>Frontend</strong>: მუშაობს მისამართზე{" "}
                <code
                  style={{
                    fontFamily: "monospace",
                    color: "var(--text-muted)",
                    background: "rgba(0, 0, 0, 0.05)",
                    padding: "0.125rem 0.375rem",
                    borderRadius: "4px"
                  }}
                >
                  http://localhost:5173
                </code>
              </li>
              <li>
                <strong>Backend</strong>: მუშაობს მისამართზე{" "}
                <code
                  style={{
                    fontFamily: "monospace",
                    color: "var(--text-muted)",
                    background: "rgba(0, 0, 0, 0.05)",
                    padding: "0.125rem 0.375rem",
                    borderRadius: "4px"
                  }}
                >
                  http://localhost:3000
                </code>
              </li>
              <li>
                პორტები განსხვავდება, ამიტომ ბრაუზერი მათ{" "}
                <strong>სხვადასხვა წყაროდ</strong> აღიქვამს და მოთხოვნას
                ავტომატურად ბლოკავს.
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              გადაჭრის გზა
            </h3>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                marginBottom: "0.75rem"
              }}
            >
              {`app.use(cors({
  origin: "http://localhost:5173"
}))`}
            </SyntaxHighlighter>
            <p className="text-muted">
              ამით Backend-ს ვეუბნებით, რომ დაუშვას მოთხოვნები კონკრეტულად{" "}
              <code
                style={{
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  background: "rgba(0, 0, 0, 0.05)",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "4px"
                }}
              >
                http://localhost:5173
              </code>
              -დან.
            </p>
          </div>
        </div>

        {/* Step 4: Fetching Data */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 4: მონაცემების წამოღება Backend-დან
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              Fetch-ის მუშაობის პროცესი
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              ჩვენ ვიყენებთ Fetch API-ს Backend-თან კომუნიკაციისთვის:
            </p>
            <ol className="text-muted" style={{ paddingLeft: "1.5rem" }}>
              <li>იგზავნება HTTP მოთხოვნა Backend-ის მისამართზე</li>
              <li>Backend პასუხობს JSON ფორმატის მონაცემებით</li>
              <li>ვკითხულობთ (ვამუშავებთ) მიღებულ JSON-ს</li>
              <li>მიღებული ინფორმაციით ვაახლებთ React state-ს</li>
            </ol>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              Fetch ფუნქციის შექმნა
            </h3>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}
            >
              {`async function getNotes() {
  // 1. ვაგზავნით GET მოთხოვნას
  const response = await fetch("http://localhost:3000/notes")
  
  // 2. ვკითხულობთ მიღებულ JSON-ს
  const json = await response.json()
  
  // 3. note-ებს ვინახავთ state-ში
  setNotes(json.notes)
}`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              გამოძახება კომპონენტის ჩატვირთვისას
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              გამოიყენეთ useEffect, რათა note-ები აპლიკაციის გახსნისთანავე
              წამოვიდეს:
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}
            >
              {`useEffect(function() {
  getNotes()
}, [])  // ცარიელი მასივი = გაეშვება მხოლოდ ერთხელ`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Step 5: State Management */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 5: State-ის მართვა
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              useState-ის გამოყენება
            </h3>
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                marginBottom: "0.75rem"
              }}
            >
              {`import { useState, useEffect } from "react"

function App() {
  // note-ების შესანახი მასივის შექმნა
  const [notes, setNotes] = useState([])
  
  // ... fetch და state-ის განახლება
}`}
            </SyntaxHighlighter>
            <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
              <li>
                <strong>notes</strong>: ცვლადი, სადაც note-ების მასივი ინახება
              </li>
              <li>
                <strong>setNotes</strong>: ფუნქცია ამ მასივის შესაცვლელად
              </li>
              <li>
                state-ის ყოველი განახლებისას React ავტომატურად ასახავს
                ცვლილებებს ეკრანზე
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              note-ების გამოტანა ეკრანზე
            </h3>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                marginBottom: "0.75rem"
              }}
            >
              {`// მასივის გარდაქმნა JSX ელემენტებად
const noteElements = notes.map((note) => (
  <div key={note.id} className="card">
    <div className="note-content">{note.content}</div>
    <span className="text-muted">{note.timestamp}</span>
  </div>
))

// ასახვა ეკრანზე
{notes.length > 0 && <div className="note-list">{noteElements}</div>}`}
            </SyntaxHighlighter>
            <p className="text-muted">
              key ატრიბუტი ეხმარება React-ს სიის ეფექტურად განახლებაში, როდესაც
              მონაცემები იცვლება.
            </p>
          </div>
        </div>

        {/* Step 6: Running the App */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 6: აპლიკაციის გაშვება
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              Backend-ის ჩართვა
            </h3>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}
            >
              {`cd backend
npm run dev`}
            </SyntaxHighlighter>
            <p className="text-muted" style={{ marginTop: "0.75rem" }}>
              სერვერი იმუშავებს მისამართზე:{" "}
              <code
                style={{
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  background: "rgba(0, 0, 0, 0.05)",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "4px"
                }}
              >
                http://localhost:3000
              </code>
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              Frontend-ის ჩართვა
            </h3>
            <p className="text-muted" style={{ marginBottom: "0.75rem" }}>
              გახსენით მეორე ტერმინალი:
            </p>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "8px",
                fontSize: "0.9rem"
              }}
            >
              {`cd frontend
npm run dev`}
            </SyntaxHighlighter>
            <p className="text-muted" style={{ marginTop: "0.75rem" }}>
              Frontend ჩაიტვირთება მისამართზე:{" "}
              <code
                style={{
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  background: "rgba(0, 0, 0, 0.05)",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "4px"
                }}
              >
                http://localhost:5173
              </code>
            </p>
          </div>
        </div>

        {/* Step 7: Current Architecture */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            ნაბიჯი 7: მუშაობის პრინციპი
          </h2>

          <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              მონაცემთა მიმოცვლის ციკლი
            </h3>
            <div
              style={{
                background: "var(--bg-secondary)",
                padding: "1rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                lineHeight: "1.8"
              }}
            >
              1. მომხმარებელი ხსნის აპლიკაციას
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              2. React ტვირთავს კომპონენტს
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              3. useEffect უშვებს getNotes() ფუნქციას
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              4. Fetch აგზავნის GET მოთხოვნას localhost:3000-ზე
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              5. Backend იღებს მოთხოვნას
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              6. Backend აბრუნებს JSON პასუხს note-ებით
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              7. Frontend კითხულობს მიღებულ JSON-ს
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              8. setNotes() ანახლებს state-ს
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              9. React ასახავს ცვლილებებს ეკრანზე
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;↓
              <br />
              10. მომხმარებელი ხედავს note-ებს ეკრანზე!
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            შემდეგი ნაბიჯები
          </h2>
          <p className="text-muted" style={{ marginBottom: "1rem" }}>
            ამ ეტაპზე აპლიკაცია მხოლოდ კითხულობს note-ებს.
          </p>
          <ul className="text-muted" style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>note-ების შექმნა</strong>: POST მოთხოვნა ახალი ჩანაწერების
              შესანახად
            </li>
            <li>
              <strong>note-ების რედაქტირება</strong>: PUT მოთხოვნა არსებული
              ინფორმაციის განახლებისთვის
            </li>
            <li>
              <strong>note-ების წაშლა</strong>: DELETE მოთხოვნა ჩანაწერის
              მოსაცილებლად
            </li>
            <li>
              <strong>MongoDB ინტეგრაცია</strong>: რეალური ბაზის დაკავშირება
            </li>
            <li>
              <strong>ძებნა</strong>: note-ების ფილტრაცია ტექსტის მიხედვით
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
