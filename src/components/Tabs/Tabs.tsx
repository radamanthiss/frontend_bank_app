"use client";

import Link from "next/link";

interface TabsProductDetailProps {
  currentTab: string;
  tabsData: {
    title: string;
    path: string;
    id: string;
  }[];
}
export const Tabs = ({ currentTab, tabsData }: TabsProductDetailProps) => {
  return (
    <div className="flex justify-start items-center gap-9 lg:p-0 p-4 mb-4 text-xs text-medium-blue font-light overflow-x-auto md:overflow-x-hidden">
      {tabsData.map((tab) => (
        <div className="text-center" key={tab.path}>
          {currentTab === tab.id ? (
            <h2
              className="font-extrabold border-b-2 border-medium-blue pb-1 "
              key={tab.path}
            >
              {tab.title}
            </h2>
          ) : (
            <Link href={`${tab.path}`} key={tab.path}>
              <h2 className="hover:cursor-pointer hover:font-bold font-medium border-b-2 pb-1 border-transparent">
                {tab.title}
              </h2>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
