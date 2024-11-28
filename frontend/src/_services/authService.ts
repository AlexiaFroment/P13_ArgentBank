import { Credentials } from "@/_interfaces/Interface"
import { Axios } from "./callerService"

const login = async (data: Credentials) => {
  return Axios.post("/login", data)
}

const logout = () => {
  localStorage.removeItem("token")
}

const getToken = () => {
  return localStorage.getItem("token")
}

const saveToken = (token: string) => {
  localStorage.setItem("token", token)
}

const isLogged = () => {
  const token = localStorage.getItem("token")
  return !!token
}

export const authService = {
  login,
  logout,
  getToken,
  saveToken,
  isLogged,
}
