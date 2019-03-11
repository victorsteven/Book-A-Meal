'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './config/config';
_dotenv2.default.config();

var app = (0, _express2.default)();
var port = process.env.PORT || 6000;

app.use((0, _morgan2.default)('dev'));

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: false }));

require('./routes/index')(app);

app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  });
});

app.listen(port, function () {
  console.log('Server is running on PORT ' + port);
});

exports.default = app;
//# sourceMappingURL=index.js.map