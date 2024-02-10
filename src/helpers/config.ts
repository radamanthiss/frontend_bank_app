"use client";
import { UserInfoContext } from "@/context/UserContext";
import  { useContext, useEffect, useState } from 'react'

export function getHeadersConfig() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {sessionToken} = useContext(UserInfoContext);
  console.log('sessionToken', sessionToken)
  return {
    headers: {
      Authorization: `Bearer ${sessionToken}`,
      accept: "application/json",
    },
  };
}

export const BACKEND_URL = "http://127.0.0.1:5000";
// export const BACKEND_URL = "https://banking-systems.onrender.com";
