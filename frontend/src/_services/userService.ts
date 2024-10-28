import data from "@/data/dataBank.json"
import { User } from "@/models/Interface"
const getAllUsers = (): User[] => {
  return data as User[]
}

const getOneUser = async (id: string): Promise<User | undefined> => {
  const user = data.find((user) => user.id === id)
  if (user) {
    user.accounts = user.accounts.map((account) => ({
      ...account,
      balanceStatus: account.balanceStatus || "Unknown", // Par défaut "Unknown" si absent
    }))
  }

  return user
}

export const userService = {
  getAllUsers,
  getOneUser,
}
