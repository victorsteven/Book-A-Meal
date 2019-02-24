"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseUtility =
/*#__PURE__*/
function () {
  function ResponseUtility() {
    _classCallCheck(this, ResponseUtility);

    this.statusCode = null;
    this.data = [] || {};
    this.message = null;
  }

  _createClass(ResponseUtility, [{
    key: "success",
    value: function success(statusCode, data, message) {
      this.statusCode = statusCode;

      if (this.message != null) {
        this.message = message;
      }

      if (this.data != null) {
        this.data = data;
      }
    }
  }, {
    key: "failure",
    value: function failure(statusCode, data, message) {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
    } // send(res) {
    //   // return
    // }

  }]);

  return ResponseUtility;
}();

var _default = ResponseUtility;
exports.default = _default;
//# sourceMappingURL=responseUtility.js.map