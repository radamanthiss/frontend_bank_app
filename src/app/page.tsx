"use client"
import { UserInfoContext } from "@/context/UserContext";
import { MainLayout } from "@/layouts";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Home() {
  const { user, loading } = useContext(UserInfoContext);
  const router = useRouter();

  if (!user) {
    redirect('/login');
  }
  // useEffect(() => {
  //   if (!loading && !user) {
  //     // If not loading and no user is found, redirect to login
  //     router.replace('/login');
  //   }
  // }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking
  }
  return (
    // <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-50">
    //   <div className="flex">
    //   <h1 className="text-blue-400">Bienvenido {user.name}</h1>
    //   </div>
    // </main>
    <MainLayout
      title={`${'Bienvenido'}, ${user.name}`}
      subtitle={'Banco Amigo'}
    >
      <main className="flex h-full flex-col items-center text-black gap-4 mt-10">
        <div className="flex w-full justify-between">
          <button className="bg-primary-600 text-white rounded-lg px-4 py-2">
            Nueva transacción
          </button>


          {/* <div className="flex gap-4">
            <InputSelectStore
              optionList={["Cedritos", "Calle 80", "Calle 26"]}
            />
            <div className="flex gap-5 justify-end items-center w-full text-medium-blue max-w-[220px]">
              <DateInputNoForm />
              <DateInputNoForm />
            </div>
          </div> */}
        </div>


        {/* <div className="flex flex-row w-full items-center justify-between mb-14 mt-10">
          <h1 className="text-dark-blue text-xl font-bold">{t("last")}</h1>
          <SearchBar eventSearch={function (value: string): void { }} />
        </div> */}
        {/* <InventoryTable2 /> */}
      </main>
    </MainLayout>
  );
}
