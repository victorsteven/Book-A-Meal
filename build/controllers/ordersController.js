"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OrderService = _interopRequireDefault(require("../services/OrderService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  fetchAllOrders: function fetchAllOrders(req, res) {
    var allOrders = _OrderService.default.fetchAllOrders();

    return res.json({
      status: 'success',
      data: allOrders
    }).status(200);
  },
  selectOrder: function selectOrder(req, res) {
    var newOrder = req.body;

    var createdOrder = _OrderService.default.selectOrder(newOrder);

    return res.json({
      status: 'success',
      data: createdOrder
    }).status(201);
  },
  modifyOrder: function modifyOrder(req, res) {
    var modifyOrder = req.body;
    var id = req.params.id;

    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid ID. ID must be a number'
      });
    }

    var modifiedMeal = _OrderService.default.modifyOrder(id, modifyOrder);

    return res.json({
      status: 'success',
      data: modifiedMeal
    }).status(201);
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=ordersController.js.map