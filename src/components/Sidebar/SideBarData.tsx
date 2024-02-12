"use client"
import { useContext } from "react";
import {
  BanknotesIcon,
  HomeIcon,
  IdentificationIcon,
  UserGroupIcon,
} from "../../../node_modules/@heroicons/react/24/outline";
import { UserInfoContext } from "@/context/UserContext";

 export function SideBarData() {
  const {user} = useContext(UserInfoContext);
 const sideBarData = [
  {
    title: "home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "accounts",
    path: "/accounts",
    icon: < IdentificationIcon />,
  },
  {
    title: "transactions",
    path: "/transactions",
    icon: <BanknotesIcon />,
  },
  user?.user_type === "client" ?{
    title: "users",
    path: "/users",
    icon: <UserGroupIcon />,
  } : {
    title:"",
    path:"",
  }
];
return sideBarData;
 }