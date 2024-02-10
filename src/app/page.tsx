"use client"
import { UserInfoContext } from "@/context/UserContext";
import { MainLayout } from "@/layouts";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { TransactionsTable } from "./transactions/components";

export default function Home() {
  const { user } = useContext(UserInfoContext);
  const router = useRouter();

  if (!user) {
    return <></>;
  }
  return (
    // <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50">
    //   <div className="flex">
    //   <h1 className="text-blue-400">Bienvenido {user.name}</h1>
    //   </div>
    // </main>
    <MainLayout
      title={`${'Bienvenido'}, ${user!.name}`}
      subtitle={'Banco Amigo'}
    >
      <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
        <div className="flex w-full justify-between">
          {user.user_type === "admin" ? (
            <div className="flex w-full justify-between items-center">
              <button className=" text-dark-blue rounded-lg px-4 py-2 bg-pale-blue" onClick={() => redirect('/accounts')}>
                Nueva cuenta
              </button>
              <button type="button" className=" text-dark-blue rounded-lg px-4 py-2 bg-pale-blue" onClick={() => router.push('/transactions')}>
                Nueva transacción
              </button>
              <button className=" text-dark-blue rounded-lg px-4 py-2 bg-pale-blue" onClick={() => redirect('/transactions')}>
                Nuevo usuario
              </button>
            </div>

          ) : (
            <div className="flex w-full justify-between items-center">
              <button className=" text-dark-blue rounded-lg px-4 py-2 bg-pale-blue" onClick={() => router.push('/transactions')}>
                Nueva transacción
              </button>
              <button className=" text-dark-blue rounded-lg px-4 py-2 bg-pale-blue" onClick={() => redirect('/transactions')}>
                mis cuentas
              </button>
              <button className=" text-dark-blue rounded-lg px-4 py-2 bg-pale-blue" onClick={() => redirect('/transactions')}>
                mi usuario
              </button>
            </div>

          )
          }

        </div>

        {/* <InventoryTable2 /> */}
        {user.user_type === "admin" ? (
          <div className="flex justify-start w-full mt-10">
            <h1>listado de usuarios</h1>
          </div>
        ) : (
          <div className="flex flex-col justify-start w-full mt-10 gap-10">
            <h1 className="text-dark-blue">Mis transacciones</h1>
            <TransactionsTable />
          </div>

        )}
      </main>
    </MainLayout >
  );
}
