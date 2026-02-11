import { useState } from "react"
import { Link } from "react-router-dom"

export function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value)
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

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="font-medium text-sm">
              Confirm your password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary margin-top-half">
              Register
            </button>
          </div>

          <div className="margin-top-half">
            <span className="text-muted text-sm">Already have an account? </span>
            <Link to="/login" className="auth-link text-sm">
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}
