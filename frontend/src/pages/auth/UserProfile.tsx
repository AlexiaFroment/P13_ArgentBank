import { useState } from "react"
import { useSelector } from "react-redux"

import { RootState } from "@/_redux/store"
import { Identity } from "@/components/Identity"
import AccountsJson from "@/data/dataBank.json"
import { Account } from "@/_interfaces/Interface"

export const UserProfile: React.FC = () => {
  const { firstName, lastName } = useSelector((state: RootState) => state.user)
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }
  const handleSaveOrCancelClick = () => {
    setIsEditing(false)
  }

  return (
    <section className='flex-grow bg-blue-950 '>
      <h1 className='text-center text-white pt-5 text-3xl font-bold'>
        Welcome back
      </h1>

      {!isEditing && (
        <div className='identity text-center text-white p-5'>
          <Identity firstName={firstName} lastName={lastName} />
          <button
            className='max-w-24 bg-green-600 p-2 mt-3'
            onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}

      {isEditing && (
        <div className='setIdentitytext-center text-white p-5'>
          <div className='flex justify-center gap-2'>
            <input
              type='text'
              placeholder={firstName}
              className='border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-600'
            />
            <input
              type='text'
              placeholder={lastName}
              className='border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>
          <div className='flex justify-center gap-2'>
            <button
              className='min-w-28 text-green-600 px-2 py-1 bg-white p-2 mt-3 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600'
              onClick={handleSaveOrCancelClick}>
              Save
            </button>
            <button
              className='min-w-28 text-green-600 px-2 py-1 bg-white p-2 mt-3 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600'
              onClick={handleSaveOrCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div>
        {AccountsJson.map((account: Account, index: number) => (
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