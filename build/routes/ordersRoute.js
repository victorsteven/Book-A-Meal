"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ordersController = _interopRequireDefault(require("../controllers/ordersController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get('/', _ordersController.default.fetchAllOrders);
router.post('/', _ordersController.default.selectOrder);
router.patch('/:id', _ordersController.default.modifyOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ordersRoute.js.map