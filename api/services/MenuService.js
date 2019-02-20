import dummyMenu from '../utils/dummyMenus';

import Menu from '../models/Menu';

const MenuService = {

  setMenu(menu) {
    menu.id = 1;
    dummyMenu.menu = menu;
    return menu;
  },

  getMenu() {
    const menu = dummyMenu.menu;
    const newMenu = new Menu();
    newMenu.id = menu.id;
    newMenu.name = menu.name;
    return newMenu;
  },
};

export default MenuService;
