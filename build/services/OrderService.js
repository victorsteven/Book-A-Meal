'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dummyOrders = require('../utils/dummyOrders');

var _dummyOrders2 = _interopRequireDefault(_dummyOrders);

var _Order = require('../models/Order');

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  fetchAllOrders: function fetchAllOrders() {
    var validOrders = _dummyOrders2.default.orders.map(function (order) {
      var newOrder = new _Order2.default();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.mealId = order.mealId;
      newOrder.menuId = order.menuId;

      return newOrder;
    });
    return validOrders;
  },
  selectOrder: function selectOrder(order) {
    var orderLength = _dummyOrders2.default.orders.length;
    var lastId = _dummyOrders2.default.orders[orderLength - 1].id;
    var newId = lastId + 1;
    order.id = newId;
    order.menuId = 1;
    _dummyOrders2.default.orders.push(order);
    return order;
  },
  modifyOrder: function modifyOrder(id, modifiedOrder) {
    var theOrder = _dummyOrders2.default.orders.find(function (oneOrder) {
      return oneOrder.id === Number(id);
    });
    if (theOrder) {
      theOrder.name = modifiedOrder.name;
      theOrder.mealId = modifiedOrder.mealId;
    }
    return theOrder;
  }
};

exports.default = OrderService;
//# sourceMappingURL=OrderService.js.map