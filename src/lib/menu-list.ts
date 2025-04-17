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
  HelpCircleIcon,
  TrophyIcon,
} from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Menu[];
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
      groupLabel: "Practice",
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
        {
          href: "/conservation",
          label: "Conservation Economics",
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
        },*/
      ],
    },
    {
      groupLabel: "Others",
      menus: [
        {
          href: "/leaderboard",
          label: "LeaderBoard",
          icon: TrophyIcon,
        },
        {
          href: "/faq",
          label: "FAQ's",
          icon: HelpCircleIcon,
        },
        /*
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
