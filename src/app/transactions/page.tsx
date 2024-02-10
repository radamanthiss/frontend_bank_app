"use client"
import { UserInfoContext } from '@/context/UserContext';
import { MainLayout } from '@/layouts'
import React, { useContext, useState } from 'react'
import TransactionDeposit from './deposit';
import TransactionTransfer from './transfer';

export default function Transactions() {
  const { user } = useContext(UserInfoContext);
  const [actionTransaction, setActionTransaction] = useState("deposit")
  return (
      <MainLayout title={'Transacciones'} subtitle={'Puedes depositar o transferir'}>

        <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-full text-dark-blue rounded-lg px-4 py-2 text-lg gap-10">
              Nueva transacción
              {
                user?.user_type === "admin" ? (
                  <select value={actionTransaction} className='flex w-[200px] bg-pale-blue' onChange={(event) => {
                    setActionTransaction(event.target.value)
                  }}>
                    <option value="deposit">Deposito</option>
                  </select>


                ) : (
                  <select value={actionTransaction} className='flex w-[200px] bg-pale-blue' onChange={(event) => {
                    setActionTransaction(event.target.value)
                  }}>
                    <option value="deposit">Deposito</option>
                    <option value="transfer">Transferencia</option>
                  </select>
                )
              }
              {actionTransaction === "deposit" ? (
                <TransactionDeposit></TransactionDeposit>
              ) : (
                <TransactionTransfer></TransactionTransfer>
              )}
            </div>
          </div>
        </main>
      </MainLayout>
  )
}
