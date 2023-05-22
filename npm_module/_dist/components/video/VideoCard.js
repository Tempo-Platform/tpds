"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _templateObject;
var _excluded = ["videoEmbedSrc", "title", "description"];
function VideoCard(_ref) {
  var videoEmbedSrc = _ref.videoEmbedSrc,
    title = _ref.title,
    description = _ref.description,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react2["default"].createElement(VideoRoot, props, /*#__PURE__*/_react2["default"].createElement("iframe", {
    css: {
      "aspectRatio": "16 / 9",
      "width": "100%",
      "borderRadius": "0.25rem"
    },
    src: videoEmbedSrc,
    title: title,
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    frameBorder: "0",
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true",
    allowFullScreen: true
  }), title && /*#__PURE__*/_react2["default"].createElement(HeaderSection, null, /*#__PURE__*/_react2["default"].createElement(Header, {
    isBold: true
  }, title)), description && /*#__PURE__*/_react2["default"].createElement(Description, null, description));
}
var _default = VideoCard;
exports["default"] = _default;
var VideoRoot = _styled2["default"].div(function () {
  return [{
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(50 205 50 / var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgb(50 205 50 / var(--tw-text-opacity))"
    }
  }, {
    "borderRadius": "8px",
    "padding": "8px",
    "@media (min-width: 1024px)": {
      "padding": "16px"
    },
    "@media (min-width: 1280px)": {
      "padding": "24px"
    }
  }];
});
var HeaderSection = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "paddingTop": "16px"
  }];
});
var Header = (0, _styled2["default"])(_typography.H6)(function () {
  return [{
    "lineHeight": "1"
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    color: inherit;\n  "])))];
});
var Description = (0, _styled2["default"])(_typography.P)(function () {
  return [{
    "paddingTop": "16px",
    "lineHeight": "1.25",
    "color": "var(--text-secondary)"
  }];
});