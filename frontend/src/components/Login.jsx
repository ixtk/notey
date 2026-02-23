import { useState } from "react"
import { Link } from "react-router-dom"
import client from "../axiosClient"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState("")

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
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

    setIsSubmitting(true)

    try {
      const response = await client.post("/login", {
        email: email,
        password: password
      })

      // const returnedData = response.data
      // response.data -> backend information

      setLoggedInUser(response.data.user.email)
    } catch (requestError) {
      const message = requestError?.response?.data?.message
      setError(message || "Login failed")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="container auth-container">
      <div className="card auth-card">
        <h3>{loggedInUser}</h3>
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
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>

          {error !== "" && (
            <div className="text-sm" style={{ color: "red" }}>
              {error}
            </div>
          )}

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
