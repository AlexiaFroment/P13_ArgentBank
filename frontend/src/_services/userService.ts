import data from "@/data/dataBank.json"
import { User } from "@/models/Interface"
const getAllUsers = (): User[] => {
  return data as User[]
}

const getOneUser = async (id: string): Promise<User | undefined> => {
  const user = data.find((user) => user.id === id)
  return user
}

export const userService = {
  getAllUsers,
  getOneUser,
}
