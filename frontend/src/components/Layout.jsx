import { Outlet, Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"

export function Layout() {
  const { loggedInUser, loading, logout } = useContext(AuthContext)

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

            <div className="auth-actions-slot">
              {loading ? (
                <>
                  <span className="auth-action-skeleton auth-action-skeleton-login" aria-hidden="true" />
                  <span className="auth-action-skeleton auth-action-skeleton-register" aria-hidden="true" />
                </>
              ) : loggedInUser === null ? (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </>
              ) : (
                <button onClick={logout} className="btn btn-primary auth-logout-btn">
                  Logout
                </button>
              )}
            </div>
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
