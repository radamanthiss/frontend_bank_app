"use client";

import { CheckIcon } from "../../../../node_modules/@heroicons/react/24/outline";
import Image from "next/image";
import { ReactElement } from "react";


interface Props {
  path: string;
  title: string;
  icon: string;
  locale: string;
  isLanguageSelected: boolean;
}

export const NavbarItemCustom: React.FC<Props> = ({
  title,
  path,
  icon,
  locale,
  isLanguageSelected,
}: Props): ReactElement => {
 
  

  return (
    <div
      className={`w-full h-[54px] lg:h-[54px] flex justify-between text-blue-001 items-center gap-x-2 hover:cursor-pointer`}
      
    >
      <div className={`w-10 h-10 text-medium-blue font-bold `}>
        <Image src={`${icon}`} alt="logo" width={40} height={40} />
      </div>
      <h1 className={`text-lg text-medium-blue`}>{title}</h1>
      <div
        className={`${
          isLanguageSelected ? "bg-medium-blue" : ""
        } rounded-full p-[2px]`}
      >
        <CheckIcon width={16} className={`text-white font-bold`} />
      </div>
    </div>
  );
};
