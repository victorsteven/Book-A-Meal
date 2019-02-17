import dummyMenu from '../utils/dummyMenus';

import Menu from '../models/Menu';

const MenuService = {

  setMenu(menu) {
    menu.id = 1
    dummyMenu.menu.push(menu);
    return menu;
  },

  getMenu() {
    const validMenu = dummyMenu.menu.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      return newMenu;
    });
    return validMenu;
  },
};

export default MenuService;
