"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Reboot(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 12 12"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M12 6c0 3.321-2.612 6-5.793 6a5.682 5.682 0 01-3.491-1.179.878.878 0 01-.156-1.205.837.837 0 011.164-.188 4.003 4.003 0 002.483.857c2.276 0 4.138-1.902 4.138-4.286 0-2.357-1.862-4.26-4.138-4.26-.983 0-1.888.349-2.638.965l1.19 1.206c.44.455.103 1.259-.518 1.259H.491C.207 5.169 0 4.928 0 4.633V.748c0-.67.75-.99 1.19-.535l1.215 1.285A5.653 5.653 0 016.207.025C9.387.025 12 2.704 12 6z"
  }));
}
var _default = Reboot;
exports["default"] = _default;