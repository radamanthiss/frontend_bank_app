"use client";
import { ReactElement, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
  icon: React.ReactNode;
}

export const NavbarItem: React.FC<Props> = ({
  title,
  path,
  icon,
}: Props): ReactElement => {
  
  return (
    
      <Link
        className={`w-full h-[54px] lg:h-[54px] flex justify-start text-blue-001 items-center gap-x-2 lg:px-5`}
        href={path}
      >
        <div className={`w-5 h-5 text-medium-blue font-bold`}>
          {icon}
        </div>
        <h1 className={`text-xs text-medium-blue`}>
          {title}
        </h1>
      </Link>
  );
};
