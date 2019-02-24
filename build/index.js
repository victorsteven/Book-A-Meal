"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mealsRoute = _interopRequireDefault(require("./routes/mealsRoute"));

var _menusRoute = _interopRequireDefault(require("./routes/menusRoute"));

var _ordersRoute = _interopRequireDefault(require("./routes/ordersRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes
var app = (0, _express.default)();
var PORT = 3000;
app.use(_bodyParser.default.json());
app.use('/api/v1/meals', _mealsRoute.default);
app.use('/api/v1/menu', _menusRoute.default);
app.use('/api/v1/orders', _ordersRoute.default);
app.listen(PORT, function () {
  console.log("Server is running on PORT ".concat(PORT));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map