"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../../tokens/index.json"));
var _excluded = ["color", "radius", "duration", "strokeWidth"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var colorPalettes = _index["default"].colors.color_palettes;
var processColor = function processColor(color) {
  // make it easy to use TPDS color defaults
  switch (color) {
    case 'red':
      return colorPalettes.red[500];
    case 'blue':
      return colorPalettes.blue[500];
    case 'green':
      return colorPalettes.green[500];
    case 'orange':
      return colorPalettes.orange[500];
    case 'purple':
      return colorPalettes.purple[500];
    case 'yellow':
      return colorPalettes.yellow[500];
    case 'magenta':
      return colorPalettes.yellow[500];
    default:
      return color;
  }
};
function Spinner(_ref) {
  var color = _ref.color,
    radius = _ref.radius,
    duration = _ref.duration,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? '3' : _ref$strokeWidth,
    props = _objectWithoutProperties(_ref, _excluded);
  color = processColor(color);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", {
    global: true,
    jsx: true
  }, "\n          @keyframes rotate {\n            100% {\n              transform: rotate(360deg);\n            }\n          }\n          .tpds-spinner {\n            animation-name: rotate;\n            animation-timing-function: linear;\n            display: inline-block;\n            animation-iteration-count: infinite;\n          }\n        "), /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    className: "tpds-spinner",
    viewBox: "0 0 42 42",
    style: {
      animationDuration: "".concat(duration ? duration : 900, "ms"),
      width: "".concat(radius ? radius : 40, "px"),
      height: "".concat(radius ? radius : 40, "px")
    }
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    transform: "translate(3 3)",
    strokeWidth: strokeWidth
  }, /*#__PURE__*/React.createElement("circle", {
    className: "stroke-grey-light-scale-400 dark:stroke-grey-dark-scale-300",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/React.createElement("path", {
    className: "stroke-current text-primary",
    style: {
      color: color
    },
    stroke: "currentColor",
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
var _default = Spinner;
exports["default"] = _default;