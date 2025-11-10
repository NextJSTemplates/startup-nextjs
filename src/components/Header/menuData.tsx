import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: "home",
    path: "/",
    newTab: false,
  },
  {
    id: "about",
    path: "/about",
    newTab: false,
  },
  {
    id: "services",
    path: "/blog",
    newTab: false,
    submenu: [
      {
        id: "businessITAdvisory",
        path: "/blog-details/1",
        newTab: false,
      },
      {
        id: "recruitment",
        path: "/blog-details/2",
        newTab: false,
      },
      {
        id: "proPulse",
        path: "/blog-details/3",
        newTab: false,
      },
    ],
  },
  {
    id: "contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
