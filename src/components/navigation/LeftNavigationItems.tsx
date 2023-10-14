import {
  BarChart3Icon,
  BoxIcon,
  DollarSignIcon,
  Settings2Icon,
  StoreIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  itemIcon: React.ReactNode;
  itemName: string;
  itemLink: string;
}

export default function LeftNavigationItems() {
  let navItems = [
    {
      itemIcon: <DollarSignIcon />,
      itemName: "Sales",
      itemLink: "/sales",
    },
    {
      itemIcon: <BoxIcon />,
      itemName: "Products",
      itemLink: "/products",
    },
    {
      itemIcon: <StoreIcon />,
      itemName: "Marketing",
      itemLink: "/marketing",
    },
    {
      itemIcon: <UsersIcon />,
      itemName: "Customers",
      itemLink: "/customers",
    },
    {
      itemIcon: <BarChart3Icon />,
      itemName: "Analytics",
      itemLink: "/analytics",
    },
    {
      itemIcon: <Settings2Icon />,
      itemName: "Settings",
      itemLink: "/settings",
    },
  ];
  const LeftNavigationItems = navItems.map((item: NavItemProps) => {
    return (
      <div
        className="flex p-3 border-b border-slate-500 border-opacity-20 text-white text-2xl font-semibold"
        key={item.itemName}
      >
        <div className="flex w-full items-center px-8">
          <div className="flex px-2">{item.itemIcon}</div>
          <Link href={item.itemLink}>{item.itemName}</Link>
        </div>
      </div>
    );
  });
  return <>{LeftNavigationItems}</>;
}
