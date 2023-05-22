"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.CardA = CardA;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _buttons = require("../buttons");
var _templateObject;
var _excluded = ["imgSrc", "imgAlt", "headerText", "descriptionText", "children", "linkURL", "linkClass", "external"];
function CardA(_ref) {
  var imgSrc = _ref.imgSrc,
    imgAlt = _ref.imgAlt,
    headerText = _ref.headerText,
    descriptionText = _ref.descriptionText,
    children = _ref.children,
    linkURL = _ref.linkURL,
    linkClass = _ref.linkClass,
    external = _ref.external,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  if (!linkURL) {
    return /*#__PURE__*/_react2["default"].createElement(HoverlessRoot, props, imgSrc && /*#__PURE__*/_react2["default"].createElement(Image, {
      src: imgSrc,
      alt: imgAlt || headerText || 'image'
    }), headerText && /*#__PURE__*/_react2["default"].createElement(HeaderSection, null, /*#__PURE__*/_react2["default"].createElement(Header, {
      isBold: true
    }, headerText)), descriptionText && /*#__PURE__*/_react2["default"].createElement(Description, null, descriptionText), children && /*#__PURE__*/_react2["default"].createElement("div", {
      css: {
        "marginTop": "1rem"
      }
    }, children));
  }
  var LinkElement = ExternalA;
  if (!external) {
    LinkElement = linkClass;
  }
  return /*#__PURE__*/_react2["default"].createElement(LinkElement, {
    to: linkURL,
    href: linkURL,
    target: external ? '_blank' : null,
    rel: external ? 'noreferrer' : null
  }, /*#__PURE__*/_react2["default"].createElement(Root, props, imgSrc && /*#__PURE__*/_react2["default"].createElement(Image, {
    src: imgSrc,
    alt: imgAlt || headerText || 'image'
  }), headerText && /*#__PURE__*/_react2["default"].createElement(HeaderSection, null, /*#__PURE__*/_react2["default"].createElement(Header, {
    isBold: true
  }, headerText), external && /*#__PURE__*/_react2["default"].createElement(_buttons.ExternalLinkIcon, {
    css: {
      "marginLeft": "16px"
    }
  })), descriptionText && /*#__PURE__*/_react2["default"].createElement(Description, null, descriptionText), children && /*#__PURE__*/_react2["default"].createElement("div", {
    css: {
      "marginTop": "1rem"
    }
  }, children)));
}
var ExternalA = _styled2["default"].a(function () {
  return [];
});
var Root = _styled2["default"].div(function () {
  return [{
    "borderRadius": "8px",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "padding": "8px",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(45 185 45 / var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgb(45 185 45 / var(--tw-text-opacity))"
    },
    "@media (min-width: 1024px)": {
      "padding": "16px"
    },
    "@media (min-width: 1280px)": {
      "padding": "24px"
    }
  }];
});
var HoverlessRoot = _styled2["default"].div(function () {
  return [{
    "borderRadius": "8px",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "padding": "8px",
    "@media (min-width: 1024px)": {
      "padding": "16px"
    },
    "@media (min-width: 1280px)": {
      "padding": "24px"
    }
  }];
});
var Image = _styled2["default"].img(function () {
  return [{
    "width": "100%",
    "borderRadius": "6px",
    "paddingBottom": "24px"
  }];
});
var HeaderSection = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "paddingBottom": "16px"
  }];
});
var Header = (0, _styled2["default"])(_typography.H6)(function () {
  return [{
    "lineHeight": "1"
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    color: inherit;\n  "])))];
});
var Description = (0, _styled2["default"])(_typography.P)(function () {
  return [{
    "lineHeight": "1.25",
    "color": "var(--text-secondary)"
  }];
});