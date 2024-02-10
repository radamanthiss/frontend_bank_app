"use client"
import { UserInfoContext } from '@/context/UserContext';
import { MainLayout } from '@/layouts'
import { accountDetailByAccountNumber, accountDetailByUser, accountList, accountListByUser } from '@/services/accounts';
import React, { use, useContext, useEffect, useRef, useState } from 'react'
import { Accounts } from '@/types/accountTypes';
import { processTransfer } from '@/services/transactions';

export default function TransactionDeposit() {
  const { user } = useContext(UserInfoContext);
  const [accounts, setAccounts] = useState<Accounts[]>([])
  const [depositAccounts, setDepositAccounts] = useState("")
  const formData = useRef("" as any)

  const getAccountsFromUser = async () => {
    try {
      const data = await accountListByUser(user!.id);
      setAccounts(data.accounts);
    } catch (error: any) {
      console.error('Error', error);
    }
  }
  const makeTransfer = async (account_id?: number) => {
    try {
      const { amount, description, sender_account_id, recipient_account_id } = formData.current
      const new_recipient_account_id = await accountDetailByAccountNumber(parseInt(recipient_account_id.value))
      const response = await processTransfer(parseInt(amount.value), description.value, sender_account_id.value, new_recipient_account_id.account.id);
      alert(response.message)
      formData.current.reset()
    } catch (error: any) {
      alert(error.message)
    }
  }
  useEffect(() => {
    getAccountsFromUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-full text-dark-blue rounded-lg px-4 py-2 text-lg gap-10">
          Nueva transferencia
          <form className='flex flex-col' ref={formData}>
            <div className="flex flex-col gap-6">
              <input type="number" placeholder="amount" name='amount' className="rounded-lg px-4 py-2 bg-pale-blue" />
              <select className="rounded-lg px-4 py-2 bg-pale-blue" name='sender_account_id' onChange={(event) => {
                setDepositAccounts(event.target.value)
              }} >
                {accounts.map((account) => {
                  return (
                    <option key={account.id} value={account.id}>{account.account_number}</option>
                  )
                })}
              </select>
              <input type="number" placeholder='account_to_send' name='recipient_account_id' className="rounded-lg px-4 py-2 bg-pale-blue" />
              <input type="text" placeholder="description" name='description' className="rounded-lg px-4 py-2 bg-pale-blue" />

              <div className='flex w-full justify-end'>
                <div >
                  <button type="button" className="rounded-lg px-4 py-2 bg-dark-purple text-white"
                    onClick={() => {
                      makeTransfer()
                    }}>
                    Transferir dinero
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}