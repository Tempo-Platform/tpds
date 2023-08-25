"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _input = require("../../../elements/input");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function InputPrice(_ref) {
  var initialValue = _ref.initialValue,
    currencySymbol = _ref.currencySymbol,
    onChangeCallback = _ref.onChangeCallback;
  if (!currencySymbol) {
    console.error('Please provide a currency prop');
    return null;
  }
  if (!initialValue) {
    initialValue = '';
  }
  var limitToNumbers = function limitToNumbers(value) {
    return value.replace(/[^0-9.]/g, '');
  };
  var applyPriceFormat = function applyPriceFormat(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  var preProcessApplyPriceFormat = function preProcessApplyPriceFormat(value) {
    var indexOfDecimal = value.indexOf('.');
    if (indexOfDecimal !== -1) {
      // ensure we format only before the decimals
      // split the string into 2 parts, before and after the decimal
      var beforeDecimal = value.slice(0, indexOfDecimal);
      var afterDecimal = value.slice(indexOfDecimal);
      // apply price format to the part before the decimal
      var formattedPart = applyPriceFormat(beforeDecimal);
      // return the formatted part and the part after the decimal
      return "".concat(formattedPart).concat(afterDecimal);
    } else {
      return applyPriceFormat(value);
    }
  };
  var applyCurrencySymbol = function applyCurrencySymbol(value) {
    return "".concat(currencySymbol, " ").concat(value);
  };
  var handleKeyDown = function handleKeyDown(e) {
    // prevent 2 full stops
    if (e.keyCode === 190 && value.indexOf('.') !== -1) {
      e.preventDefault();
    }
  };
  var formatValue = function formatValue(value) {
    var onlyNums = limitToNumbers(value);
    var formattedValue = preProcessApplyPriceFormat(onlyNums);
    return applyCurrencySymbol(formattedValue);
  };
  var initialStateValue = formatValue(initialValue ? initialValue.toString() : '');

  // eslint-disable-next-line
  var _useState = (0, _react.useState)(initialStateValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleChange = function handleChange(event) {
    setValue(formatValue(event.target.value));
    if (onChangeCallback) {
      onChangeCallback(parseFloat(limitToNumbers(event.target.value)));
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_input.TextInput, {
    type: "text",
    onKeyDown: handleKeyDown,
    value: value,
    onChange: handleChange
  });
}
var _default = InputPrice;
exports["default"] = _default;