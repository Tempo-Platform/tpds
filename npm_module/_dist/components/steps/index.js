"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _Check = _interopRequireDefault(require("../../assets/svgs/icons/Check"));
var _excluded = ["steps", "currentStepIndex"];
var _templateObject, _templateObject2;
var StepsRoot = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "space-between",
    "columnGap": "3%"
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    .default {\n      ", ",\n      p {\n        ", "\n      }\n    }\n    .completed {\n      ", ",\n      p {\n        ", "\n      }\n      svg * {\n        ", "\n      }\n    }\n    .active {\n      ", ",\n      p {\n        ", "\n      }\n    }\n  "])), {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(201 205 207 / var(--tw-border-opacity))",
    "backgroundColor": "var(--bg-window)",
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(134 142 147 / var(--tw-border-opacity))",
      "backgroundColor": "var(--bg-window)"
    }
  }, {
    "color": "var(--text-primary)",
    ":is(.dark &)": {
      "color": "var(--text-primary)"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(25 114 245 / var(--tw-bg-opacity))",
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(25 114 245 / var(--tw-bg-opacity))"
    }
  }, {
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(0 0 0 / var(--tw-text-opacity))"
    }
  }, {
    "fill": "#FFFFFF"
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(0 0 0 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(0 0 0 / var(--tw-bg-opacity))",
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(255 255 255 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))"
    }
  }, {
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(0 0 0 / var(--tw-text-opacity))"
    }
  })];
});
var StepCircle = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "height": "26px !important",
    "width": "26px !important",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "50%",
    "borderWidth": "2px"
  }, (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      p {\n        ", "\n      }\n    }\n  "])), {
    "position": "relative",
    "top": "-1px",
    "fontSize": "14px !important"
  })];
});
var Line = _styled2["default"].div(function () {
  return [{
    "height": "2px",
    "width": "10%",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(233 235 236 / var(--tw-bg-opacity))",
    ":is(.dark &)": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(62 67 71 / var(--tw-bg-opacity))"
    }
  }];
});
var StepRoot = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "alignItems": "center",
    "columnGap": "0.5rem"
  }];
});
var inserLines = function inserLines(array) {
  var newArray = [];
  array.forEach(function (item, index) {
    newArray.push(item);
    if (index % 1 === 0) {
      newArray.push( /*#__PURE__*/_react2["default"].createElement(Line, {
        className: "tpds-steps-line",
        key: "{tpds-steps-line-" + index + "}"
      }));
    }
  });
  return newArray;
};
function calculateStepState(index, currentStepIndex) {
  if (index === currentStepIndex) {
    return 'active';
  }
  if (index < currentStepIndex) {
    return 'completed';
  }
  return 'default';
}
function StepsComponent(_ref) {
  var steps = _ref.steps,
    _ref$currentStepIndex = _ref.currentStepIndex,
    currentStepIndex = _ref$currentStepIndex === void 0 ? 0 : _ref$currentStepIndex,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var items = steps.map(function (step, index) {
    return /*#__PURE__*/_react2["default"].createElement(StepRoot, {
      className: "tpds-step",
      key: step.title
    }, /*#__PURE__*/_react2["default"].createElement(StepCircle, {
      className: calculateStepState(index, currentStepIndex).toString()
    }, currentStepIndex > index ? /*#__PURE__*/_react2["default"].createElement(_Check["default"], null) : /*#__PURE__*/_react2["default"].createElement(_typography.PSmall, {
      isMedium: true,
      css: {
        "lineHeight": "1"
      }
    }, index + 1)), /*#__PURE__*/_react2["default"].createElement(_typography.P, {
      isMedium: true,
      className: "tpds-steps-label",
      css: {
        "position": "relative",
        "top": "-1px",
        "whiteSpace": "nowrap",
        "lineHeight": "1"
      }
    }, step.title));
  });
  var itemsWithLines = inserLines(items);
  itemsWithLines.pop();
  return /*#__PURE__*/_react2["default"].createElement(StepsRoot, props, itemsWithLines);
}
var _default = StepsComponent;
exports["default"] = _default;