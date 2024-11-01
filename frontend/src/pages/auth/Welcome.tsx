// import { useState, useEffect } from "react"

import AccountsJson from "@/data/dataBank.json"
import { Account } from "@/models/Interface"
export const Welcome: React.FC = () => {
  return (
    <section className='flex-grow bg-blue-950 '>
      <div className='text-center text-white p-5'>
        <h1 className='text-3xl font-bold'>Welcome back</h1>
        <h2 className='text-2xl font-bold p-2'></h2>
        <button className='max-w-24 bg-green-600 p-2 mt-3'>Edit Name</button>
      </div>
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
