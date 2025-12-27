import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)

app.get("/notes", function (request, response) {
  const notes = [
    {
      id: "1",
      content:
        "Reflecting on the importance of focused deep work. In a world of constant distractions, the ability to concentrate is a superpower. \n\nNeed to schedule 2 hours of blocked time every morning.",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      content:
        "Q4 Roadmap Brainstorming:\n- Refresh the user interface\n- Improve mobile performance\n- Add dark mode support\n\nMeeting scheduled for Tuesday.",
      timestamp: "5 hours ago"
    },
    {
      id: "3",
      content:
        "Grocery run list for evening:\n- Sourdough bread\n- Avocados\n- Coffee beans\n- Oat milk",
      timestamp: "Yesterday"
    }
  ]

  response.json({ notes: notes })
})

mongoose
  .connect("mongodb://127.0.0.1:27017/notey")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
