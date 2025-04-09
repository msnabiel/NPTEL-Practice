import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  FileText,
  IndianRupee,
} from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenu?: Menu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/home",
          label: "Home",
          icon: LayoutGrid,
        },
      ],
    },
    {
      groupLabel: "Practise",
      menus: [
        {
          href: "/wildlife",
          label: "WildLife Ecology",
          icon: FileText,
        },
        {
          href: "/forests",
          label: "Forests",
          icon: FileText,
        },
        /*{
          href: "/categories",
          label: "Categories",
          icon: Bookmark,
        },
        {
          href: "/tags",
          label: "Tags",
          icon: Tag,
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/pricing",
          label: "Pricing",
          icon: IndianRupee,
        },
        {
          href: "/about-us",
          label: "About Us",
          icon: Users,
        },
        {
          href: "/settings",
          label: "Settings",
          icon: Settings,
        },*/
      ],
    },
  ];
}
