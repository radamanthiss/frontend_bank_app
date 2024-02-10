"use client"

import { User } from "@/types/userTypes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserInfoContextValue {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  sessionToken: string | undefined;
  setSessionToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const UserInfoContext = React.createContext<UserInfoContextValue>({} as UserInfoContextValue);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User>();
  const [loading, setLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState<string>();
  const router = useRouter()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('info') as string)
    const path_name = window.location.pathname;
    if (storedUser) {
      setUser(storedUser.user)
      setSessionToken(storedUser.access_token)
      setLoading(false)
      router.replace(path_name);
    }
    else {
      setLoading(false)
      router.replace('/login');
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserInfoContext.Provider value={{ user, setUser, loading, setLoading, sessionToken, setSessionToken }}>
      {children}
    </UserInfoContext.Provider>
  )
}