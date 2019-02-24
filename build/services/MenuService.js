"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyMenus = _interopRequireDefault(require("../utils/dummyMenus"));

var _Menu = _interopRequireDefault(require("../models/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  setMenu: function setMenu(menu) {
    menu.id = 1;
    _dummyMenus.default.menu = menu;
    return menu;
  },
  getMenu: function getMenu() {
    var menu = _dummyMenus.default.menu;
    var newMenu = new _Menu.default();
    newMenu.id = menu.id;
    newMenu.name = menu.name;
    return newMenu;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=MenuService.js.map