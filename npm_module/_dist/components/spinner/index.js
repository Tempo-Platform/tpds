"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = exports.SpinnerBlock = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../tokens/index.json"));
var _excluded = ["color", "radius", "duration", "strokeWidth"];
var _templateObject;
var colorPalettes = _index["default"].colors.color_palettes;
var CustomSVG = _styled2["default"].svg(function () {
  return [(0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    animation-name: rotate;\n    animation-timing-function: linear;\n    display: inline-block;\n    animation-iteration-count: infinite;\n    .spinner-stroke-circle {\n      ", ";\n    }\n    @keyframes rotate {\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  "])), {
    "stroke": "#DFE1E2",
    ":is(.dark &)": {
      "stroke": "#3E4347"
    }
  })];
});
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
    strokeWidth = _ref.strokeWidth,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  color = processColor(color);
  return /*#__PURE__*/_react2["default"].createElement(CustomSVG, Object.assign({}, props, {
    viewBox: "0 0 42 42",
    style: {
      animationDuration: (duration ? duration : 900) + "ms",
      width: (radius ? radius : 40) + "px",
      height: (radius ? radius : 40) + "px"
    }
  }), /*#__PURE__*/_react2["default"].createElement("g", {
    fill: "none",
    transform: "translate(3 3)",
    strokeWidth: "3"
  }, /*#__PURE__*/_react2["default"].createElement("circle", {
    className: "spinner-stroke-circle",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/_react2["default"].createElement("path", {
    style: {
      color: color
    },
    stroke: "currentColor",
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
var _default = Spinner;
exports["default"] = _default;
var SpinnerBlock = _styled2["default"].div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '20%'
});
exports.SpinnerBlock = SpinnerBlock;