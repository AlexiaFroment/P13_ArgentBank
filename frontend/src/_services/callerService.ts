/** Import des modules nécessaires */
import axios from "axios"
import { authService } from "@/_services"

export const Axios = axios.create({
  baseURL: "http://localhost:3001/api/v1/user",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use((request) => {
  if (authService.isLogged()) {
    const token = authService.getToken()
    console.log("Token ajouté aux headers :", token)
    request.headers.Authorization = "Bearer " + authService.getToken()
  } else {
    console.log("Aucun token trouvé, l'utilisateur n'est pas connecté")
  }

  return request
})
