"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mealRoutes = _interopRequireDefault(require("./routes/mealRoutes"));

var _menuRoute = _interopRequireDefault(require("./routes/menuRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// routes
_dotenv.default.config(); // import orderRoutes from './routes/ordersRoute';


var app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
var port = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.use('/api/v1', _mealRoutes.default);
app.use('/api/v1/menu', _menuRoute.default); // app.use('/api/v1/orders', orderRoutes);

app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
var _default = app; // const http = require('http');
// const app = require('../app');
// const port = parseInt(process.env.PORT, 10) || 4000;
// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port);

exports.default = _default;
//# sourceMappingURL=index.js.map