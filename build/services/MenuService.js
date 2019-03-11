'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dummyMenus = require('../utils/dummyMenus');

var _dummyMenus2 = _interopRequireDefault(_dummyMenus);

var _Menu = require('../models/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  setMenu: function setMenu(menu) {
    menu.id = 1;
    _dummyMenus2.default.menu = menu;
    return menu;
  },
  getMenu: function getMenu() {
    var menu = _dummyMenus2.default.menu;
    var newMenu = new _Menu2.default();
    newMenu.id = menu.id;
    newMenu.name = menu.name;
    return newMenu;
  }
};

exports.default = MenuService;
//# sourceMappingURL=MenuService.js.map