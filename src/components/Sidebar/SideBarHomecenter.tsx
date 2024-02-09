import { ArrowLeftOnRectangleIcon } from "../../../node_modules/@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { SidebarItem } from "./components/SidebarItem";
import { sideBarData } from "./SideBarData";

export const SideBarHomecenter = () => {
  return (
    <div
      className={`bg-white rounded-2xl my-6 ml-0 flex-col justify-between items-center 
        text-center shadow relative w-20 xl:w-52 h-[96%] hidden lg:flex`}
    >
      <section className="flex flex-col w-full items-center justify-center pt-10 px-4">
        <Image
          src="https://images.sodimac.com/v3/assets/blt2f8082df109cfbfb/blta7cc331692d297db/5f3d804090eeff71088399b1/Artboard_1.png"
          alt="logo"
          priority={true}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-contain"
        />
      </section>
      <section className="flex flex-col gap-4 h-[50vh] max-h-96">
        {sideBarData.map((item, index) => (
          <SidebarItem
            key={index}
            title={""}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </section>
      <section className="flex items-center gap-3 mb-10">
        <Image
          src={"/assets/lizit_logo.svg"}
          alt="logo"
          width={60}
          height={30}
        />
        <ArrowLeftOnRectangleIcon className="w-6 h-6 text-dark-blue" />
      </section>
    </div>
  );
};
