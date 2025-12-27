import { Navigation } from './components/Navigation'
import { CreateNote } from './components/CreateNote'
import { NoteList } from './components/NoteList'

const INITIAL_NOTES = [
  {
    id: "1",
    content: "Reflecting on the importance of focused deep work. In a world of constant distractions, the ability to concentrate is a superpower. \n\nNeed to schedule 2 hours of blocked time every morning.",
    timestamp: "2 hours ago"
  },
  {
    id: "2",
    content: "Q4 Roadmap Brainstorming:\n- Refresh the user interface\n- Improve mobile performance\n- Add dark mode support\n\nMeeting scheduled for Tuesday.",
    timestamp: "5 hours ago"
  },
  {
    id: "3",
    content: "Grocery run list for evening:\n- Sourdough bread\n- Avocados\n- Coffee beans\n- Oat milk",
    timestamp: "Yesterday"
  }
]

const NOTES = [
  {
    id: "1",
    content: "Reflecting on the importance of focused deep work. In a world of constant distractions, the ability to concentrate is a superpower. \n\nNeed to schedule 2 hours of blocked time every morning.",
    timestamp: "2 hours ago"
  },
  {
    id: "2",
    content: "Q4 Roadmap Brainstorming:\n- Refresh the user interface\n- Improve mobile performance\n- Add dark mode support\n\nMeeting scheduled for Tuesday.",
    timestamp: "5 hours ago"
  },
  {
    id: "3",
    content: "Grocery run list for evening:\n- Sourdough bread\n- Avocados\n- Coffee beans\n- Oat milk",
    timestamp: "Yesterday"
  }
]

function App() {
  return (
    <div className="layout">
      <Navigation />
      
      <main className="container">
        <div style={{ padding: '0 0.5rem 2rem' }}>
          <p className="text-muted">Capture ideas, lists, and thoughts.</p>
        </div>

        <CreateNote />
        
        <NoteList notes={NOTES} />
      </main>
    </div>
  )
}

export default App
