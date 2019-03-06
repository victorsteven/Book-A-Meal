"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mealController = _interopRequireDefault(require("../controllers/mealController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.post('/:menuId/meals', _mealController.default.create);
router.get('/:menuId/meals', _mealController.default.list);
router.put('/:menuId/meals/:mealId', _mealController.default.updateMeal);
router.delete('/:menuId/meals/:mealId', _mealController.default.deleteMeal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=mealRoutes.js.map