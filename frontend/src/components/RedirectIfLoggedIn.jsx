import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export function RedirectIfLoggedIn() {
  const { loggedInUser } = useContext(AuthContext)

  if (loggedInUser !== null) {
    return <Navigate to="/" />
  } else {
    return <Outlet />
  }
}
