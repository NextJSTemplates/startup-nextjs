// types/menu.ts
export type Menu = {
  id: string;              
  title?: string;         
  path?: string;
  newTab?: boolean;
  submenu?: Menu[];
};
