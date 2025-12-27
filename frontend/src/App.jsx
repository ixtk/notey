import { Navigation } from './components/Navigation'

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

        {/* Create Note Section */}
        <div className="card">
          <div className="flex flex-col gap-3">
            <textarea
              className="textarea"
              placeholder="What's on your mind?"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">Press Enter to save</span>
              <button className="btn btn-primary" disabled>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Add Note
              </button>
            </div>
          </div>
        </div>
        
        {/* Note List Section */}
        {NOTES.length === 0 ? (
          <div className="text-muted" style={{ textAlign: 'center', padding: '3rem 0' }}>
            No notes found.
          </div>
        ) : (
          <div className="note-list">
            {NOTES.map(note => (
              <div key={note.id} className="card">
                <div className="note-content mb-4">{note.content}</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">{note.timestamp}</span>
                  
                  <div className="card-actions">
                    <button className="btn btn-ghost" title="Edit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="btn btn-ghost danger" title="Delete">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
