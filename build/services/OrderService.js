"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyOrders = _interopRequireDefault(require("../utils/dummyOrders"));

var _Order = _interopRequireDefault(require("../models/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  fetchAllOrders: function fetchAllOrders() {
    var validOrders = _dummyOrders.default.orders.map(function (order) {
      var newOrder = new _Order.default();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.mealId = order.mealId;
      newOrder.menuId = order.menuId;
      return newOrder;
    });

    return validOrders;
  },
  selectOrder: function selectOrder(order) {
    var orderLength = _dummyOrders.default.orders.length;
    var lastId = _dummyOrders.default.orders[orderLength - 1].id;
    var newId = lastId + 1;
    order.id = newId;
    order.menuId = 1;

    _dummyOrders.default.orders.push(order);

    return order;
  },
  modifyOrder: function modifyOrder(id, modifiedOrder) {
    var theOrder = _dummyOrders.default.orders.find(function (oneOrder) {
      return oneOrder.id === Number(id);
    });

    if (theOrder) {
      theOrder.name = modifiedOrder.name;
      theOrder.mealId = modifiedOrder.mealId;
    }

    return theOrder;
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=OrderService.js.map