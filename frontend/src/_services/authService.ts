import { Credentials } from "@/_interfaces/Interface"
import { Axios } from "./callerService"

const login = async (data: Credentials, rememberMe: boolean) => {
  try {
    const resp = await Axios.post("/login", data)
    const token = resp.data.body.token
    saveUserData(token, data.email, rememberMe)
    return resp
  } catch {
    throw new Error("Login failed")
  }
}

const logout = () => {
  localStorage.removeItem("token")
  sessionStorage.removeItem("token")
}

const getToken = () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token")
  return token
}

const getEmail = () => {
  const email = localStorage.getItem("email")
  return email
}

const saveUserData = (token: string, email: string, rememberMe: boolean) => {
  if (rememberMe) {
    localStorage.setItem("token", token)
    localStorage.setItem("email", email)
    console.log("token & email sont dans le localStorage")
  } else {
    localStorage.removeItem("email")
    sessionStorage.setItem("token", token)
    console.log("token dans le session storage")
  }
}

const isLogged = () => {
  const token = sessionStorage.getItem("token") || localStorage.getItem("token")
  return !!token
}

export const authService = {
  login,
  logout,
  getToken,
  getEmail,
  saveUserData,
  isLogged,
}
