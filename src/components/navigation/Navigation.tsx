"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { MenuIcon, UserCircle2Icon } from "lucide-react";
import LeftNavigationItems from "@/components/navigation/LeftNavigationItems";
import { useState } from "react";

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(false);

  function showNavigation() {
    if (isHidden) {
      return (
        <div className=" fixed top-16 left-2 flex-col w-72 rounded-md bg-slate-400 h-fit pb-12">
          <div className="flex-col justify-center items-center w-full">
            <div className="flex w-full justify-center p-6">
              <Image src={"/favicon.ico"} alt="vercel" width={32} height={16} />
              <span className="pl-2 text-2xl">Vercel</span>
            </div>
            <div className="flex p-4">
              <Input className="text-lg" placeholder="Search" />
            </div>
          </div>
          <div className="pt-4">
            <LeftNavigationItems />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  return (
    <>
    <div className="flex w-full justify-between items-center">
      <div className="flex w-full justify-start p-4">
        <span onClick={() => {
            if (isHidden) {
              setIsHidden(false);
            } else {
              setIsHidden(true);
            }
        }}>
          <MenuIcon />
        </span>
      </div>
      <div className="flex w-full justify-center items-center p-4">
        <Image src="/favicon.ico" alt="vercel" width={32} height={32} />
        <span className="pl-2 text-2xl">Vercel</span>
      </div>
      <div className="flex w-full p-4 justify-end items-center">
        <UserCircle2Icon />
      </div>
    </div>
    {showNavigation()}
    </>
  );
}
