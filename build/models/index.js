'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = (0, _path.basename)(__filename);
var env = process.env.NODE_ENV || 'development';
var config = _config2.default[env];
var db = {};
var sequelize = void 0;

if (env === 'production') {
  sequelize = new _sequelize2.default(process.env[config.use_env_variable], config);
} else {
  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);
}

(0, _fs.readdirSync)(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize.import((0, _path.join)(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;
exports.default = db;
//# sourceMappingURL=index.js.map