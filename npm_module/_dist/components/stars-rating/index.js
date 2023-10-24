"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["rating", "width", "lightOnly"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var convertToPercent = function convertToPercent(rating) {
  var percent = 100 - Math.round(rating / 5 * 100);
  return percent;
};
function StarsRatings(_ref) {
  var rating = _ref.rating,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 100 : _ref$width,
    _ref$lightOnly = _ref.lightOnly,
    lightOnly = _ref$lightOnly === void 0 ? false : _ref$lightOnly,
    props = _objectWithoutProperties(_ref, _excluded);
  var calculatedHeight = width / 5.5; // calculate height in proportion to width
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "relative",
    style: {
      width: width,
      height: calculatedHeight
    }
  }, props), /*#__PURE__*/_react["default"].createElement(FiveStars, {
    className: lightOnly ? 'fill-[#ddd]' : 'fill-[#ddd] dark:fill-[#777]',
    style: {
      width: width,
      height: calculatedHeight
    }
  }), /*#__PURE__*/_react["default"].createElement(FiveStars, {
    className: "fill-[#EFB23D]",
    style: {
      width: width,
      height: calculatedHeight,
      clipPath: "inset(0px ".concat(convertToPercent(rating), "% 0px 0px)")
    }
  }));
}
var _default = StarsRatings;
exports["default"] = _default;
function FiveStars(_ref2) {
  var className = _ref2.className,
    style = _ref2.style;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "absolute w-full top-0 left-0 transition-all duration-300 ease-in-out",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 172 32",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("path", {
    className: className,
    d: "M15.28 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86L.748 10.86h11.101L15.28 0zM50.238 0l3.43 10.86H64.77l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L50.237 0zM85.196 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L85.195 0zM120.28 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L120.28 0zM156.28 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L156.28 0z"
  }));
}