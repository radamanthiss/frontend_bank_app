"use client";

import { ReactNode, use, useContext, useEffect, useState } from "react";

import Image from "next/image";
import { Loading } from "../components";
import { NavBar } from "@/components/Navbar/Navbar";
import { SideBar } from "@/components/Sidebar/SideBar";
import { UserInfoContext } from "@/context/UserContext";

interface MainLayoutProps {
  title: string;
  subtitle?: string;
  paddingTop?: string;
  subtitleChildren?: ReactNode;
  children: ReactNode;
}

export const MainLayout = ({
  children,
  title,
  subtitle,
  subtitleChildren,
  paddingTop,
}: MainLayoutProps) => {
  const { user, loading } = useContext(UserInfoContext);
   // const { data: session ,status} = useSession({ required: true });
  // useEffect(() => {
  //   localStorage.setItem("token", session?.user.accessToken!);
  //   setSessionToken(session?.user.accessToken!);
  // }, [session])
  // if (!sessionToken) {
  //   return (
  //     <div className="flex justify-center items-center h-screen w-screen">
  //       <Image
  //         className="w-full h-20 animate-spin"
  //         src="https://www.svgrepo.com/show/70469/loading.svg"
  //         alt="Loading icon"
  //         width={200}
  //         height={200}
  //         sizes="100vw"
  //       />
  //     </div>
  //   );
  // }

  return (
    <main className="relative  h-screen overflow-hidden bg-background-gray rounded-2xl">
      <div className="flex items-start justify-between h-full ">
        <SideBar />
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col w-full justify-between items-end">
            <NavBar
              title={title}
              subtitle={subtitle}
              subtitleChildren={subtitleChildren}
              user={user}
            />
          </div>

          <div
            className={`h-full w-full bg-transparent overflow-hidden ${paddingTop ? paddingTop : "pt-10"
              }`}
          >
            <div className="overflow-auto w-full h-full px-10 pb-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
