import { Axios } from "@/_services/callerService"
import { User } from "@/_interfaces/Interface"

type UpdateUser = Pick<User, "firstName" | "lastName">
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

const updateUser = async (data: UpdateUser): Promise<UpdateUser> => {
  const { firstName, lastName } = data
  try {
    const resp = await Axios.put("/profile", { firstName, lastName })
    console.log("User updated", resp.data)
    return resp.data
  } catch (err) {
    console.error("Error Updating user", err)
    throw err
  }
}

export const userService = { getUser, updateUser }
