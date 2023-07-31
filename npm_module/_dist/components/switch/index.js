"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var bgStyles = {
  info: 'bg-blue dark:bg-blue',
  success: 'bg-green dark:bg-green',
  warning: 'bg-orange dark:bg-orange',
  danger: 'bg-red dark:bg-red'
};
function Switch(_ref) {
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? null : _ref$onClick,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'info' : _ref$variant,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var rootStyles = (0, _clsx["default"])('h-6 w-11', 'transition', 'cursor-pointer', 'items-center rounded-full', 'relative inline-flex', active ? bgStyles[variant] : "bg-grey-light-scale-500 dark:bg-grey-dark-scale-300");
  var circleStyles = (0, _clsx["default"])('transition', 'inline-block h-4 w-4 transform rounded-full bg-body', active ? "translate-x-6" : "translate-x-1");
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: onClick,
    className: rootStyles,
    style: disabled ? {
      pointerEvents: 'none',
      opacity: 0.2
    } : null
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: circleStyles
  }));
}
var _default = Switch;
exports["default"] = _default;