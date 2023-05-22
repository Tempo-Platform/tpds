"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = exports.SpinnerBlock = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _templateObject;
var _excluded = ["color", "radius", "style", "duration", "strokeWidth", "center"];
function Spinner(_ref) {
  var color = _ref.color,
    radius = _ref.radius,
    style = _ref.style,
    duration = _ref.duration,
    strokeWidth = _ref.strokeWidth,
    center = _ref.center,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var styles = style || {};
  if (center) {
    styles.display = 'block';
    styles.textAlign = 'center';
  }
  var Path = getPathElement(color);
  return /*#__PURE__*/_react2["default"].createElement("span", {
    style: styles
  }, /*#__PURE__*/_react2["default"].createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 42 42",
    css: (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n          @keyframes rotate {\n            100% {transform: rotate(360deg);}\n          }\n          animation-name: rotate;\n          animation-timing-function: linear;\n          display: inline-block;\n          animation-iteration-count: infinite;\n        "]))),
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
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgb(223 225 226 / var(--tw-text-opacity))",
      ":is(.dark &)": {
        "--tw-text-opacity": "1",
        "color": "rgb(62 67 71 / var(--tw-text-opacity))"
      }
    },
    cx: "18",
    cy: "18",
    r: "18"
  }), Path)));
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
function DefaultPath() {
  return /*#__PURE__*/_react2["default"].createElement("path", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgb(0 0 0 / var(--tw-text-opacity))",
      ":is(.dark &)": {
        "--tw-text-opacity": "1",
        "color": "rgb(255 255 255 / var(--tw-text-opacity))"
      }
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function BluePath() {
  return /*#__PURE__*/_react2["default"].createElement("path", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgb(25 114 245 / var(--tw-text-opacity))"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function GreenPath() {
  return /*#__PURE__*/_react2["default"].createElement("path", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgb(50 205 50 / var(--tw-text-opacity))"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function RedPath() {
  return /*#__PURE__*/_react2["default"].createElement("path", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgb(235 87 87 / var(--tw-text-opacity))"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function OrangePath() {
  return /*#__PURE__*/_react2["default"].createElement("path", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgb(240 135 39 / var(--tw-text-opacity))"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
var getPathElement = function getPathElement(color) {
  switch (color) {
    case 'green':
      return /*#__PURE__*/_react2["default"].createElement(GreenPath, null);
    case 'blue':
      return /*#__PURE__*/_react2["default"].createElement(BluePath, null);
    case 'orange':
      return /*#__PURE__*/_react2["default"].createElement(OrangePath, null);
    case 'red':
      return /*#__PURE__*/_react2["default"].createElement(RedPath, null);
    default:
      return /*#__PURE__*/_react2["default"].createElement(DefaultPath, null);
  }
};