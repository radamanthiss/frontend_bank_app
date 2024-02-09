"use client";

import { ArrowLeftOnRectangleIcon } from "../../../node_modules/@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { SidebarItem } from "./components/SidebarItem";
import { sideBarData } from "./SideBarData";
// import { signOut } from "next-auth/react";
import next from "../../../public/next.svg";

export const SideBar = () => {
  return (
    <div
      className={`bg-white rounded-2xl my-6 ml-4 flex-col justify-between items-center 
        text-center shadow relative w-44 xl:w-52 h-[96%] hidden lg:flex`}
    >
      <section className="flex flex-col w-full items-center justify-center pt-10 px-4">
        <Image
          src="data:image/jpeg;base64,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"
          alt="logo"
          priority={true}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-contain"
        />
      </section>
      <section className="flex flex-col gap-4 w-full h-[50vh] max-h-96">
        {sideBarData.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </section>
      <section className="flex items-center gap-3 mb-10">
        <Image
          src={next}
          alt="logo"
          width={60}
          height={30}
        />
      </section>
    </div>
  );
};
