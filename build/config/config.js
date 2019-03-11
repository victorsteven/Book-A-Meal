'use strict';

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// the default env is production, which for heroku
var env = process.env.NODE_ENV || 'development';
console.log('env *******', env);

if (env === 'development' || env === 'test') {
  // Object.keys() gets the object and return it as an array
  var envConfig = _config2.default[env];
  Object.keys(envConfig).forEach(function (key) {
    process.env[key] = envConfig[key];
  });
}
//# sourceMappingURL=config.js.map