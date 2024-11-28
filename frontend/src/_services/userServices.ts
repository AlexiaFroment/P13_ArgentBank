import { Axios } from "@/_services/callerService"
import { User } from "@/_interfaces/Interface"
const getUser = async (token: string): Promise<User> => {
  const { data } = await Axios.post("/profile", null, {
    // 'null' signifie qu'on n'a pas de données dans le corps
    headers: {
      Authorization: `Bearer ${token}`, // Token dans les en-têtes
    },
  })

  console.log("User profile", data.body)
  return data.body // Les informations utilisateur sont dans 'body'
}

export const userService = { getUser }
