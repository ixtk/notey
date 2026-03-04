import { createContext, useState } from "react";

const AuthContext = createContext(null)

export function AuthProvider() {
  const [loggedInUser, setLoggedInUser] = useState(null)

}
