export function Navigation() {
  return (
    <nav className="nav">
      <div className="container nav-content">
        <a href="/" className="logo">
          notey.
        </a>

        <div className="search-container">
          <div className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search notes..." 
          />
        </div>
      </div>
    </nav>
  )
}
