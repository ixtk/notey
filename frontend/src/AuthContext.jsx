import { createContext, useEffect, useState } from "react"
import client from "./axiosClient"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  async function login(email, password) {
    const response = await client.post("/login", {
      email: email,
      password: password
    })

    setLoggedInUser(response.data.user.email)
    navigate("/")
  }

  async function register(email, password) {
    const response = await client.post("/register", {
      email: email,
      password: password
    })
    navigate("/login")
  }

  async function logout() {
    const response = await client.post("/logout")
    setLoggedInUser(null)
  }

  useEffect(function () {
    async function getCurrentUser() {
      try {
        const response = await client.get("/profile")
        const json = response.data

        if (json.email) {
          setLoggedInUser(json.email)
        }

        setLoading(false)
        console.log(json)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    getCurrentUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{ loggedInUser, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
