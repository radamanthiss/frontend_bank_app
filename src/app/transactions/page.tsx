import { MainLayout } from '@/layouts'
import React from 'react'

export default function Transactions() {
  return (
    <MainLayout title={'Transacciones'} subtitle={'Puedes depositar o transferir'}>
      <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
        <div className="flex w-full justify-between">
          <button className="bg-primary-600 text-dark-blue rounded-lg px-4 py-2">
            Nuevo usuario
          </button>
        </div>
      </main>
    </MainLayout>
  )
}
