"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function DummyIcon(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#cccccc",
    fillRule: "evenodd",
    d: "M8 16A8 8 0 108 0a8 8 0 000 16zM4.059 9.935V6.4h1.006v3.534H4.06zM4 5.487c0-.142.05-.258.15-.35A.595.595 0 014.561 5a.59.59 0 01.41.137.449.449 0 01.152.35.448.448 0 01-.156.352.584.584 0 01-.406.137.598.598 0 01-.41-.137A.453.453 0 014 5.487zm3.456 3.752a.684.684 0 00.45-.144.491.491 0 00.181-.382h.94c-.002.24-.071.46-.208.66a1.365 1.365 0 01-.562.464 1.85 1.85 0 01-.784.163c-.537 0-.96-.16-1.27-.48-.31-.322-.465-.766-.465-1.333v-.062c0-.544.154-.978.462-1.303.307-.324.73-.486 1.266-.486.47 0 .845.126 1.128.379.284.25.429.584.433 1.002h-.94a.617.617 0 00-.18-.444.62.62 0 00-.458-.173c-.234 0-.41.08-.531.242-.118.159-.177.418-.177.777v.098c0 .363.059.625.177.784.118.159.297.238.538.238zm2.203-2.041a1.993 1.993 0 00-.215.937v.043c0 .561.16 1.006.482 1.332.324.327.756.49 1.298.49.54 0 .972-.163 1.294-.49.321-.329.482-.764.482-1.306l-.007-.242c-.037-.5-.216-.897-.538-1.189-.319-.291-.732-.437-1.238-.437-.357 0-.67.075-.94.225-.269.15-.475.363-.618.637zm.989 1.777c-.134-.179-.202-.436-.202-.771 0-.377.068-.654.202-.833a.667.667 0 01.569-.271c.247 0 .44.09.576.271.136.18.204.435.204.764 0 .386-.068.666-.204.843a.682.682 0 01-.57.261c-.25 0-.441-.088-.575-.264z",
    clipRule: "evenodd"
  }));
}
var _default = DummyIcon;
exports["default"] = _default;