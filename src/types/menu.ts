export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

// 为了向后兼容，保留Menu类型，但建议使用NavigationItem
export type NavigationItem = Menu;
