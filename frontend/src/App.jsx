import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Walkthrough } from "./components/Walkthrough"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { HomePage } from "./components/Home"
import { AuthProvider } from "./AuthContext"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="walkthrough" element={<Walkthrough />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
