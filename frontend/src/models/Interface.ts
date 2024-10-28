export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  accounts: {
    accountName: string
    balance: number
    transactions: number
    balanceStatus: string
  }[]
}
