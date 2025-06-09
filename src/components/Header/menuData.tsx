import { Menu } from "@/types";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },

  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      }
    ],
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 50,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 51,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 52,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      }
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
];
export default menuData;
