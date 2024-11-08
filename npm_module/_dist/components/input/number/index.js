"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _input = require("../../../elements/input");
var _excluded = ["initialValue", "onChangeCallback", "step", "minValue", "maxValue", "maxLength", "allowFloats", "floatPrecision"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var deleteKeyCodes = [8, 46];
function InputNumber(_ref) {
  var initialValue = _ref.initialValue,
    onChangeCallback = _ref.onChangeCallback,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$minValue = _ref.minValue,
    minValue = _ref$minValue === void 0 ? null : _ref$minValue,
    _ref$maxValue = _ref.maxValue,
    maxValue = _ref$maxValue === void 0 ? null : _ref$maxValue,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 100 : _ref$maxLength,
    _ref$allowFloats = _ref.allowFloats,
    allowFloats = _ref$allowFloats === void 0 ? true : _ref$allowFloats,
    _ref$floatPrecision = _ref.floatPrecision,
    floatPrecision = _ref$floatPrecision === void 0 ? 2 : _ref$floatPrecision,
    props = _objectWithoutProperties(_ref, _excluded);
  if (initialValue === undefined || initialValue === null) {
    initialValue = '';
  }
  var initialStateValue = initialValue ? initialValue.toString() : '';
  var _useState = (0, _react.useState)(initialStateValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var validateInput = function validateInput(input) {
    var currentValueFloat = parseFloat(input);
    if (allowFloats) {
      currentValueFloat = currentValueFloat.toFixed(floatPrecision);
    } else {
      currentValueFloat = parseInt(Math.round(input));
    }
    if (maxLength) {
      var stringFloatValue = String(currentValueFloat);
      currentValueFloat = parseFloat(stringFloatValue.slice(0, maxLength));
    }
    if (maxValue) {
      currentValueFloat = Math.min(currentValueFloat, maxValue);
    }
    if (minValue) {
      currentValueFloat = Math.max(currentValueFloat, minValue);
    }
    return currentValueFloat;
  };
  var handleInput = function handleInput(event) {
    setValue(event.target.value);
  };
  var handleChange = function handleChange(event) {
    var value = event.target.value;
    if (value) {
      value = validateInput(value);
    }
    setValue(value);
  };
  var handleBlur = function handleBlur(event) {
    var value = validateInput(event.target.value);
    setValue(value);
  };
  return /*#__PURE__*/_react["default"].createElement(_input.TextInput, _extends({
    type: "number",
    step: step,
    min: minValue,
    max: maxValue,
    onInput: handleInput,
    value: value,
    onChange: handleChange,
    onBlur: handleBlur
  }, props));
}
var _default = InputNumber;
exports["default"] = _default;