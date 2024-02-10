"use client"
import { UserInfoContext } from '@/context/UserContext';
import { MainLayout } from '@/layouts'
import { accountDetailByUser, accountList } from '@/services/accounts';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Accounts } from '@/types/accountTypes';
import { processDeposit } from '@/services/transactions';
import { useRouter } from 'next/navigation';
export default function TransactionDeposit() {
  const [depositAccounts, setDepositAccounts] = useState("")
  const [accountDetail, setAccountDetail] = useState<Accounts | null>(null)
  const { user, sessionToken } = useContext(UserInfoContext);
  const [accounts, setAccounts] = useState<Accounts[]>([])
  const formData = useRef("" as any)
  const router = useRouter()

  const getAccounts = async () => {
    // fetch all accounts
    try {
      const data = await accountList();
      setAccounts(data.accounts);
    } catch (error: any) {
      console.error('Error', error);
    }
  }

  const getAccountByUser = async () => {
    // fetch all accounts
    try {
      const data = await accountDetailByUser(user!.id);
      setAccountDetail(data.account);
    } catch (error: any) {
      console.error('Error', error);
    }
  }
  const makeDeposit = async (account_id?: number) => {
    try {
      if (user?.user_type === "admin") {
        const { amount, description, account_id } = formData.current as any
        const response = await processDeposit(parseInt(amount.value), description.value, account_id.value, sessionToken!);
        alert(response.message)
      }
      else {

        const { amount, description } = formData.current as any
        const response = await processDeposit(parseInt(amount.value), description.value, account_id!, sessionToken!);
        alert(response.message)
      }
      formData.current.reset()
      router.push('/')
    } catch (error: any) {
      alert(error.message)
    }
  }

  useEffect(() => {
    if (user?.user_type === "admin") {
      getAccounts()
    }
    else {
      getAccountByUser()
    }
  }, [user])

  return (
    <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-full text-dark-blue rounded-lg px-4 py-2 text-lg gap-10">
          Nuevo deposito
          <form className='flex flex-col' ref={formData}>
            <div className="flex flex-col gap-6">
              <input type="number" placeholder="amount" name='amount' className="rounded-lg px-4 py-2 bg-pale-blue" />
              <input type="text" placeholder="description" name='description' className="rounded-lg px-4 py-2 bg-pale-blue" />

              {user?.user_type === "admin" ? (
                <select className="rounded-lg px-4 py-2 bg-pale-blue" name='account_id' onChange={(event) => {
                  setDepositAccounts(event.target.value)

                }} >

                  {accounts.map((account) => {
                    return (
                      <option key={account.id} value={account.id}>{account.account_number}</option>
                    )
                  })}
                </select>
              ) : (
                <input type="number" placeholder="account" name='account_id' value={accountDetail?.account_number} className="rounded-lg px-4 py-2 bg-pale-blue" />
              )}

              <div className='flex w-full justify-end'>
                <div>
                  <button type="button" className="rounded-lg px-4 py-2 bg-dark-purple text-white"
                    onClick={() => {
                      makeDeposit(
                        accountDetail?.id
                      )
                    }}>
                    Depositar
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
