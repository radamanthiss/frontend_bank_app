"use client"
import { UserInfoContext } from '@/context/UserContext';
import { MainLayout } from '@/layouts'
import React, { useContext } from 'react'
import AboutUser from './components/AboutUser';
import NewUser from './components/NewUser';

export default function Users() {
  const { user } = useContext(UserInfoContext);
  return (
    <MainLayout title={'Usuarios'} subtitle={'Gestión'}>
      <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
        <div className="flex w-full justify-between">
          {user?.user_type === 'admin' ? (
            <div className="flex flex-col w-full justify-start">
              <h1 className="text-dark-blue">Nuevo usuario</h1>
              <NewUser />
            </div>
          ) : (
            <div className="flex flex-col w-full justify-start gap-10 ">
              <h1 className="text-dark-blue">Mi información</h1>
              <AboutUser />
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  )
}
