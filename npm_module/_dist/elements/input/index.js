"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["isValid", "isInvalid", "isWarning"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextInput = function TextInput(_ref) {
  var isValid = _ref.isValid,
    isInvalid = _ref.isInvalid,
    isWarning = _ref.isWarning,
    props = _objectWithoutProperties(_ref, _excluded);
  var finalClass = (0, _clsx["default"])('flex w-full', 'transition duration-100', 'px-2.5 py-1 rounded focus:outline-none', 'font-normal', 'bg-input text-primary border-input', 'border-2 focus:border-blue',
  //buttonVariantStyles[variant],
  isValid && 'border-green focus:border-green', isInvalid && 'border-red focus:border-red', isWarning && 'border-orange focus:border-orange');
  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "text",
    className: finalClass
  }, props));
};
exports.TextInput = TextInput;