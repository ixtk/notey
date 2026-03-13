import { createContext, useEffect, useState } from "react"
import client from "./axiosClient"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null)

  async function login(email, password) {
    const response = await client.post("/login", {
      email: email,
      password: password
    })

    setLoggedInUser(response.data.user.email)
  }

  async function register(email, password) {
    const response = await client.post("/register", {
      email: email,
      password: password
    })
  }

  async function logout() {
    const response = await client.post("/logout")
    setLoggedInUser(null)
  }

  useEffect(function () {
    async function getCurrentUser() {
      const response = await client.get("/profile")
      const json = response.data

      if (json.email) {
        setLoggedInUser(json.email)
      }

      console.log(json)
    }

    getCurrentUser()
  }, [])

  return (
    <AuthContext.Provider value={{ loggedInUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
