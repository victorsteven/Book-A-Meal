import MenuService from '../services/MenuService';

const MenuController = {

  setMenu(req, res) {
    const newMenu = req.body;
    const createdMenu = MenuService.setMenu(newMenu);
    return res.json({
      status: 'success',
      data: createdMenu,
    }).status(201);
  },

  getMenu(req, res) {
    const dayMenu = MenuService.getMenu();
    return res.json({
      status: 'success',
      data: dayMenu,
    }).status(200);
  },
};

export default MenuController;
