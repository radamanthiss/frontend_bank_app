"use client"

import { User } from "@/types/userTypes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserInfoContextValue {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserInfoContext = React.createContext<UserInfoContextValue>({} as UserInfoContextValue);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User>();
  const [loading, setLoading] = useState(true); // Add loading state

  const router = useRouter()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('info') as string)
    if (storedUser) {
      setUser(storedUser.user)
      setLoading(false)
    } 
    else {
      router.replace('/login');
    }
  }, [router, user]);



  return (
    <UserInfoContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserInfoContext.Provider>
  )
}