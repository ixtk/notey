import { useState } from "react"
import { Link } from "react-router-dom"
import client from "../axiosClient"

export function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setError("")

    if (email.trim().length < 3) {
      setError("Email is too short")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsSubmitting(true)

    try {
      await client.post("/register", {
        email: email,
        password: password
      })
    } catch (requestError) {
      const message = requestError?.response?.data?.message
      setError(message || "Registration failed")
    } finally {
      setIsSubmitting(false)
    }
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
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>

          {error !== "" && (
            <div className="text-sm" style={{ color: "red" }}>
              {error}
            </div>
          )}

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
