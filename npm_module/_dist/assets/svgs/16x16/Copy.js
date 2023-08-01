"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Copy(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
    fill: "currentColor"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#788187",
    d: "M12.25.75H6.125c-.984 0-1.75.793-1.75 1.75v6.125c0 .984.766 1.75 1.75 1.75h6.125c.957 0 1.75-.766 1.75-1.75V2.5c0-.957-.793-1.75-1.75-1.75zm.438 7.875a.45.45 0 01-.438.438H6.125a.432.432 0 01-.438-.438V2.5a.45.45 0 01.438-.438h6.125a.47.47 0 01.438.438v6.125zM8.311 13a.45.45 0 01-.437.438H1.75A.432.432 0 011.312 13V6.875a.45.45 0 01.438-.438H3.5V5.125H1.75c-.984 0-1.75.793-1.75 1.75V13c0 .984.766 1.75 1.75 1.75h6.125c.957 0 1.75-.766 1.75-1.75v-1.75H8.312V13z"
  }));
}
var _default = Copy;
exports["default"] = _default;