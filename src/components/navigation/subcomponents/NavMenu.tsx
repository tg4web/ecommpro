"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function NavMenu() {
  const storeId = "demo-store";

  return (
    <>
      <NavigationMenu className=" hidden md:flex ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={`/${storeId}/dashboard`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${storeId}/storefront`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Storefront
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${storeId}/users`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Users
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${storeId}/products`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${storeId}/orders`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Orders
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-2">
          <DropdownMenuLabel>Navigate</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <Link href={`/${storeId}/dashboard`} legacyBehavior passHref>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </Link>

          <Link href={`/${storeId}/storefront`} legacyBehavior passHref>
            <DropdownMenuItem>Storefront</DropdownMenuItem>
          </Link>
          <Link href={`/${storeId}/users`} legacyBehavior passHref>
            <DropdownMenuItem>Users</DropdownMenuItem>
          </Link>
          <Link href={`/${storeId}/products`} legacyBehavior passHref>
            <DropdownMenuItem>Products</DropdownMenuItem>
          </Link>
          <Link href={`/${storeId}/orders`} legacyBehavior passHref>
            <DropdownMenuItem>Orders</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
