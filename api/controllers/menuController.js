import MenuService from '../services/MenuService';

const MenuController = {

  setMenu(req, res) {
    // console.log(req.body);
    const newMenu = req.body;
    const createdMenu = MenuService.setMenu(newMenu);
    return res.json({
      status: 'success',
      data: createdMenu,
    }).status(201);
  },

  getMenu(req, res) {
    const dayMenu = MenuService.getMenu();
    return res.status(200).json({
      status: 'success',
      data: dayMenu,
    });
  },
};

export default MenuController;
