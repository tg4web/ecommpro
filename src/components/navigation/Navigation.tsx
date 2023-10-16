"use client";
import Image from "next/image";
import { MenuIcon, UserCircle2Icon } from "lucide-react";
import NavMenu from "./subcomponents/NavMenu";
import ProfileMenu from "./subcomponents/ProfileMenu";

import { UserButton } from "@clerk/nextjs";

export default function Navigation() {
  return (
    <>
      <div className="flex p-2 w-full justify-between items-center">
        <Image
          className="hidden md:flex"
          src={"/ecommpro.svg"}
          alt="EcommPro"
          width={110}
          height={50}
        />

        <NavMenu />

        <Image
          className="md:hidden"
          src={"/ecommpro.svg"}
          alt="EcommPro"
          width={110}
          height={50}
        />

        <UserButton />
      </div>
    </>
  );
}
