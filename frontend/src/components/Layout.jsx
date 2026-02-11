import { Outlet, Link } from "react-router-dom"

export function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <div className="container nav-content">
          <Link to="/" className="logo">
            notey.
          </Link>

          <div className="nav-actions">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/walkthrough" className="nav-link">
              Walkthrough
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            {/* <div className="search-container">
              <div className="search-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search notes..."
              />
            </div> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
