"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireWildcard(require("react"));
var _typography = require("../../elements/typography");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var _excluded = ["label", "variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Tag(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react2["default"].createElement(TagElement, Object.assign({
    variant: variant
  }, props), /*#__PURE__*/_react2["default"].createElement(_typography.LabelNano, {
    css: {
      "fontWeight": "500"
    }
  }, label));
}
var _default = Tag;
exports["default"] = _default;
var defaultStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(174 179 182 / var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(174 179 182 / var(--tw-text-opacity))"
}, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "color": "currentColor"
})];
var infoStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))"
}, (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "--tw-text-opacity": "1",
  "color": "rgb(25 114 245 / var(--tw-text-opacity))"
})];
var successStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(45 185 45 / var(--tw-border-opacity))"
}, (0, _react.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "--tw-text-opacity": "1",
  "color": "rgb(45 185 45 / var(--tw-text-opacity))"
})];
var dangerStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))"
}, (0, _react.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "--tw-text-opacity": "1",
  "color": "rgb(235 87 87 / var(--tw-text-opacity))"
})];
var warningStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))"
}, (0, _react.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "--tw-text-opacity": "1",
  "color": "rgb(240 135 39 / var(--tw-text-opacity))"
})];
var defaultStyleWithHover = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(174 179 182 / var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(174 179 182 / var(--tw-text-opacity))"
}, (0, _react.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "color": "currentColor"
})];
var infoStyleWithHover = [{
  "cursor": "pointer",
  "--tw-border-opacity": "1",
  "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(25 114 245 / var(--tw-text-opacity))"
}, {
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(25 114 245 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ":is(.dark &:hover)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, (0, _react.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "color": "currentColor"
})];
var successStyleWithHover = [{
  "cursor": "pointer",
  "--tw-border-opacity": "1",
  "borderColor": "rgb(45 185 45 / var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(45 185 45 / var(--tw-text-opacity))"
}, {
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(45 185 45 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ":is(.dark &:hover)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, (0, _react.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "color": "currentColor"
})];
var dangerStyleWithHover = [{
  "cursor": "pointer",
  "--tw-border-opacity": "1",
  "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(235 87 87 / var(--tw-text-opacity))"
}, {
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(235 87 87 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ":is(.dark &:hover)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, (0, _react.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "color": "currentColor"
})];
var warningStyleWithHover = [{
  "cursor": "pointer",
  "--tw-border-opacity": "1",
  "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(240 135 39 / var(--tw-text-opacity))"
}, {
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(240 135 39 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ":is(.dark &:hover)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, (0, _react.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteralLoose2["default"])(["p { ", ";"])), {
  "color": "currentColor"
})];
var tagVariants = {
  "default": defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle
};
var tagVariantsWithHover = {
  "default": defaultStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover
};
var TagElement = _styled2["default"].div(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
    addHoverEffect = _ref2.addHoverEffect;
  return [{
    "display": "inline-flex",
    "userSelect": "none",
    "justifyContent": "center",
    "borderRadius": "0.25rem",
    "borderWidth": "1px",
    "padding": "0.25rem"
  }, function (_ref3) {
    var _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? 'default' : _ref3$variant;
    return addHoverEffect ? tagVariantsWithHover[variant] : tagVariants[variant];
  }, isUppercase && {
    "textTransform": "uppercase"
  }];
});