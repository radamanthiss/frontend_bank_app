import {
  BanknotesIcon,
  HomeIcon,
  IdentificationIcon,
  UserGroupIcon,
} from "../../../node_modules/@heroicons/react/24/outline";

export const sideBarData = [
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
  {
    title: "users",
    path: "/users",
    icon: <UserGroupIcon />,
  },
];
