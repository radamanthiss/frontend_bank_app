"use client"
import { UserInfoContext } from '@/context/UserContext';
import { MainLayout } from '@/layouts'
import React, { useContext } from 'react'
import { AccountsTable } from './components';

export default function Accounts() {
  const { user } = useContext(UserInfoContext);

  return (
    <MainLayout title={'Cuenta'} subtitle={'Información de tu cuenta bancaria'}>
      <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
        <div className="flex w-full justify-between">
          {user?.user_type === 'admin' ? (
            <div className="flex w-full justify-between items-center">
              <h1 className="text-blue-400">Nueva cuenta</h1> 
            </div>
          ) : (
            <div className="flex flex-col w-full justify-start gap-10 ">
              <h1 className="text-dark-blue">Mis cuentas</h1>
              <AccountsTable />

            </div>
          )}
        </div>
      </main>
    </MainLayout>
  )
}
