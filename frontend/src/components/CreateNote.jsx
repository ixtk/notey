export function CreateNote() {
  return (
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
  )
}
