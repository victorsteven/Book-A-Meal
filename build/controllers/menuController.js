"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MenuService = _interopRequireDefault(require("../services/MenuService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  setMenu: function setMenu(req, res) {
    // console.log(req.body);
    var newMenu = req.body;

    var createdMenu = _MenuService.default.setMenu(newMenu);

    return res.json({
      status: 'success',
      data: createdMenu
    }).status(201);
  },
  getMenu: function getMenu(req, res) {
    var dayMenu = _MenuService.default.getMenu();

    return res.status(200).json({
      status: 'success',
      data: dayMenu
    });
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menuController.js.map