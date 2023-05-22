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
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["links", "linkClass", "side", "type"],
  _excluded2 = ["active"];
function MenuDropdown(_ref) {
  var links = _ref.links,
    linkClass = _ref.linkClass,
    _ref$side = _ref.side,
    side = _ref$side === void 0 ? 'right' : _ref$side,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'kebab' : _ref$type,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var LinkClass = linkClass;
  return /*#__PURE__*/_react2["default"].createElement(KebabMenuRoot, props, type === 'kebab' && /*#__PURE__*/_react2["default"].createElement(KebabControl, null), type === 'chevron' && /*#__PURE__*/_react2["default"].createElement(TriangleDown, null), /*#__PURE__*/_react2["default"].createElement(KebabMenuContent, {
    className: "kebab-menu-content",
    side: side
  }, links.map(function (link) {
    return /*#__PURE__*/_react2["default"].createElement(LinkClass, {
      to: link.to,
      href: link.to,
      key: link.label,
      onClick: link.onClick
    }, /*#__PURE__*/_react2["default"].createElement(KebabMenuItem, null, link.label));
  })));
}
var _default = MenuDropdown;
exports["default"] = _default;
var KebabMenuRoot = _styled2["default"].div(function () {
  return [{
    "position": "relative",
    "height": "18px"
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    .kebab-menu-content {\n      display: none;\n    }\n    .kebab-highlight {\n      display: none;\n    }\n    :hover {\n      .kebab-highlight {\n        display: block;\n      }\n      .kebab-menu-content {\n        display: block;\n      }\n    }\n  "])))];
});
var KebabMenuContent = _styled2["default"].div(function (_ref2) {
  var side = _ref2.side;
  return [(0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    min-width: 80px;\n  "]))), {
    "position": "absolute",
    "right": "-4px",
    "top": "18px"
  }, side === 'right' && {
    "right": "-4px"
  }, side === 'left' && {
    "left": "-4px"
  }, {
    "zIndex": "50",
    "borderRadius": "0.125rem",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)"
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(201 205 207 / var(--tw-bg-opacity))",
    ":is(.dark &)": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
    }
  }];
});
var KebabControlRoot = _styled2["default"].div(function (_ref3) {
  var active = _ref3.active;
  return [{
    "position": "relative",
    "height": "16px",
    "width": "10px"
  }, active && [(0, _react.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      .kebab-highlight {\n        display: block;\n      }\n    "])))]];
});
var KebabMenuItem = (0, _styled2["default"])(_typography.LabelSmall)(function (_ref4) {
  var active = _ref4.active;
  return [{
    "cursor": "pointer",
    "userSelect": "none",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "color": "var(--text-secondary)",
    ":hover": {
      "color": "var(--text-primary)"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(252 252 252 / var(--tw-bg-opacity))",
    ":is(.dark &)": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
    }
  }, {
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(241 243 243 / var(--tw-bg-opacity))"
    },
    ":is(.dark &:hover)": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(30 34 36 / var(--tw-bg-opacity))"
    }
  }];
});
function KebabControl(_ref5) {
  var active = _ref5.active,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded2);
  return /*#__PURE__*/_react2["default"].createElement(KebabControlRoot, Object.assign({
    active: active
  }, props), /*#__PURE__*/_react2["default"].createElement("div", {
    className: "kebab-highlight",
    css: {
      "position": "absolute",
      "left": "-3px",
      "top": "-2px",
      "height": "20px",
      "width": "16px",
      "borderRadius": "0.125rem",
      "backgroundColor": "var(--bg-input)"
    }
  }), /*#__PURE__*/_react2["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    css: {
      "position": "absolute",
      "left": "0px",
      "top": "0px",
      "cursor": "pointer",
      "fill": "currentColor",
      "color": "var(--text-primary)"
    }
  }, /*#__PURE__*/_react2["default"].createElement("path", {
    d: "M4 3.947c0 .533.438.948 1 .948.531 0 1-.415 1-.948C6 3.444 5.531 3 5 3c-.563 0-1 .444-1 .947zM4 7.947C4 7.444 4.438 7 5 7c.531 0 1 .444 1 .947 0 .533-.469.948-1 .948-.563 0-1-.415-1-.948zM5 12.895c-.563 0-1-.415-1-.948 0-.503.438-.947 1-.947.531 0 1 .444 1 .947 0 .533-.469.948-1 .948z"
  })));
}
function TriangleDown() {
  return /*#__PURE__*/_react2["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    css: {
      "fill": "currentColor",
      "color": "var(--text-primary)"
    },
    className: "chevron-down",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react2["default"].createElement("path", {
    fill: "transparent",
    d: "M0 0H16V16H0z"
  }), /*#__PURE__*/_react2["default"].createElement("path", {
    fill: "#AEB4B7",
    d: "M11.404 7.059a.512.512 0 00.022-.73.512.512 0 00-.73-.022l-2.923 2.75-2.9-2.75a.512.512 0 00-.73.021.512.512 0 00.02.73l3.267 3.094a.571.571 0 00.343.13.583.583 0 00.366-.13l3.265-3.093z"
  }));
}