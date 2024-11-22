/** Import des modules nécessaires */
import axios from "axios"
import { userService } from "@/_services/userService"

export const Axios = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use((request) => {
  if (userService.isLogged()) {
    const token = userService.getToken()
    console.log("Token ajouté aux headers :", token)
    request.headers.Authorization = "Bearer " + userService.getToken()
  } else {
    console.log("Aucun token trouvé, l'utilisateur n'est pas connecté")
  }

  return request
})
