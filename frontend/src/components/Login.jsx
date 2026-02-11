import { useState } from "react"
import { Link } from "react-router-dom"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="container auth-container">
      <div className="card auth-card">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="input"
              value={email}
              onChange={handleEmailChange}
              placeholder="user@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary margin-top-half">
              Login
            </button>
          </div>

          <div className="margin-top-half">
            <span className="text-muted text-sm">Don't have an account? </span>
            <Link to="/register" className="auth-link text-sm">
              Register
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
