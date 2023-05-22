"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.Window = exports.SeparatorWindow = exports.SeparatorBase = exports.Separator = exports.Section = exports.SBLRootSidebar = exports.SBLRootContent = exports.SBLRoot = exports.PageRoot = exports.PaddingBox = exports.ItemsRow = exports.ContainerRow = exports.Container = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var Section = _styled2["default"].div(function () {
  return [(0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: flex;\n    flex-direction: column;\n  "]))), {
    "width": "100%"
  }];
});
exports.Section = Section;
var containerVariants = {
  "short": {
    "width": "calc(100% - 40px)",
    "maxWidth": "1022px",
    "@media (min-width: 768px)": {
      "width": "91.666667%"
    }
  },
  large: {
    "width": "calc(100% - 40px)",
    "@media (min-width: 768px)": {
      "width": "80%"
    },
    "@media (min-width: 1280px)": {
      "width": "70%"
    },
    "@media (min-width: 1536px)": {
      "width": "60%",
      "maxWidth": "1440px"
    }
  },
  full: {
    "width": "calc(100% - 40px)",
    "@media (min-width: 768px)": {
      "width": "91.666667%"
    },
    "@media (min-width: 1280px)": {
      "width": "83.333333%"
    },
    "@media (min-width: 1536px)": {
      "width": "calc(100% - 60px)"
    }
  }
};
var Container = _styled2["default"].div(function () {
  return [(0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    align-self: center;\n  "]))), function (_ref) {
    var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'large' : _ref$variant;
    return containerVariants[variant];
  }];
});
exports.Container = Container;
var ContainerRow = (0, _styled2["default"])(Container)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n  display: flex;\n"])));
exports.ContainerRow = ContainerRow;
var PaddingBox = _styled2["default"].div(function () {
  return [{
    "paddingTop": "1rem",
    "paddingBottom": "1rem",
    "@media (min-width: 768px)": {
      "paddingTop": "2rem",
      "paddingBottom": "2rem"
    },
    "@media (min-width: 1024px)": {
      "paddingTop": "3rem",
      "paddingBottom": "3rem"
    },
    "@media (min-width: 1280px)": {
      "paddingTop": "5rem",
      "paddingBottom": "5rem"
    }
  }];
});
exports.PaddingBox = PaddingBox;
var PageRoot = (0, _styled2["default"])(Section)(function () {
  return [(0, _react.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    min-height: 100vh;\n  "])))];
});

// sidebar layout
exports.PageRoot = PageRoot;
var SBLRoot = _styled2["default"].div(function () {
  return [(0, _react.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    overflow: hidden;\n  "])))];
});
exports.SBLRoot = SBLRoot;
var SBLRootContent = _styled2["default"].div(function () {
  return [(0, _react.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 100vh;\n    overflow-y: scroll;\n  "]))), {
    "width": "100%",
    "backgroundColor": "var(--bg-body)"
  }];
});
exports.SBLRootContent = SBLRootContent;
var SBLRootSidebar = _styled2["default"].div(function () {
  return [{
    "width": "0",
    "backgroundColor": "var(--bg-window)",
    "@media (min-width: 768px)": {
      "width": "270px"
    }
  }, (0, _react.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 100vh;\n  "])))];
});
exports.SBLRootSidebar = SBLRootSidebar;
var ItemsRow = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "flexWrap": "wrap"
  }, (0, _react.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    > * {\n      ", "\n    }\n    > *:last-child {\n      ", "\n    }\n  "])), {
    "marginRight": "0.5rem"
  }, {
    "marginRight": "0px"
  })];
});
exports.ItemsRow = ItemsRow;
var SeparatorBase = _styled2["default"].div(function (props) {
  return [(0, _react.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 1px;\n    width: 100%;\n    margin-top: 20px;\n    border-bottom-width: 1px;\n  "])))];
});
exports.SeparatorBase = SeparatorBase;
var Separator = (0, _styled2["default"])(SeparatorBase)(function (props) {
  return [{
    "borderColor": "var(--border-body)"
  }];
});
exports.Separator = Separator;
var SeparatorWindow = (0, _styled2["default"])(SeparatorBase)(function (props) {
  return [{
    "borderColor": "var(--border-window)"
  }];
});
exports.SeparatorWindow = SeparatorWindow;
var Window = _styled2["default"].div(function () {
  return [{
    "borderRadius": "0.125rem",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "paddingTop": "16px",
    "paddingBottom": "16px",
    "@media (min-width: 768px)": {
      "paddingLeft": "24px",
      "paddingRight": "24px",
      "paddingTop": "16px",
      "paddingBottom": "16px"
    },
    "@media (min-width: 1024px)": {
      "borderRadius": "0.25rem",
      "paddingLeft": "32px",
      "paddingRight": "32px",
      "paddingTop": "24px",
      "paddingBottom": "24px"
    }
  }];
});
exports.Window = Window;