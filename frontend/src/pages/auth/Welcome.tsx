// import { useState, useEffect } from "react"
import { userService } from "@/_services/userService"
import { User } from "@/models/Interface"
export const Welcome: React.FC = () => {
  // const [userData, setUserData] = useState<User[]>([])
  // const [error, setError] = useState<string | null>(null)

  // const fetchdata = async () => {
  //   try {
  //     const data = await userService.getAllUsers()
  //     console.log(data)
  //     setUserData(data)
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       setError(`Error to get data : ${err.message}`)
  //     } else {
  //       setError("Unknown error")
  //     }
  //   }
  // }

  // useEffect(() => {
  //   fetchdata()
  // }, [])

  // if (error) {
  //   return <div>{error}</div>
  // }

  const users: User[] = userService.getAllUsers()

  return (
    <section className='flex-grow bg-blue-950 '>
      <div className='text-center text-white p-5'>
        <h1 className='text-3xl font-bold'>Welcome back</h1>
        <h2 className='text-2xl font-bold p-2'>
          {users.length > 0
            ? `${users[0].firstName} ${users[0].lastName}`
            : "user"}
        </h2>
        <button className='max-w-24 bg-green-600 p-2 mt-3'>Edit Name</button>
      </div>
      <div>
        {users.length > 0 &&
          users[0].accounts.map((account, index) => (
            <div
              key={index}
              className='flex justify-between bg-white p-5 mx-14 my-6'>
              <div>
                <p>
                  Argent Bank {account.accountName} (x{account.transactions})
                </p>
                <p className='text-3xl font-semibold'>
                  ${account.balance.toLocaleString("en-US")}
                </p>
                <p>{account.balanceStatus} Balance</p>
              </div>
              <div className='flex flex-col justify-end'>
                <button className='bg-green-600 text-white font-semibold max-w-52 px-6 py-2 mt-3'>
                  View transactions
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
