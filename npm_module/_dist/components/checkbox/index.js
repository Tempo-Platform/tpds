"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["active", "partial", "disabled"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Checkbox(_ref) {
  var active = _ref.active,
    _ref$partial = _ref.partial,
    partial = _ref$partial === void 0 ? false : _ref$partial,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    props = _objectWithoutProperties(_ref, _excluded);
  var finalRootClassName = (0, _clsx["default"])('tpds-checkbox', active ? 'is-active' : 'is-off', "relative transition duration-150", "cursor-pointer h-[20px] w-[20px] rounded flex !justify-center !items-center", "relative border-2 border-body hover:border-blue", "bg-white dark:bg-grey-dark-scale-100", "border-grey-light-scale-500 dark:border-grey-dark-scale-50", "hover:bg-blue/5 hover:border-2 border-blue", "active:bg-blue/10 active:border-2 active:border-blue/50", active && ["bg-blue border-blue", "hover:bg-blue-scale-600 hover:border-blue-scale-600", "active:bg-blue-scale-700 active:border-blue-scale-700"], disabled && ["pointer-events-none opacity-30"]);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: finalRootClassName
  }, props), active && !partial && /*#__PURE__*/_react["default"].createElement(CheckIcon, {
    className: "text-primary"
  }), active && partial && /*#__PURE__*/_react["default"].createElement(MinusIcon, {
    className: "text-primary"
  }));
}
function CheckIcon(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "8",
    fill: "currentColor",
    viewBox: "0 0 8 6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z"
  }));
}
function MinusIcon(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "none",
    viewBox: "0 0 10 10"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fill: "currentColor",
    y: "4",
    width: "10",
    height: "2"
  }));
}
var _default = Checkbox;
exports["default"] = _default;