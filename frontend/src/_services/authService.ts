import { Credentials } from "@/_interfaces/Interface"
import { Axios } from "./callerService"

const login = async (data: Credentials, rememberMe: boolean) => {
  try {
    const resp = await Axios.post("/login", data)
    const token = resp.data.body.token
    saveToken(token, rememberMe)
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

const saveToken = (token: string, rememberMe: boolean) => {
  if (rememberMe) {
    localStorage.setItem("token", token)
  } else {
    sessionStorage.setItem("token", token)
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
  saveToken,
  isLogged,
}
