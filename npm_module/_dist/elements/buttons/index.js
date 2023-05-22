"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.Button = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _templateObject, _templateObject2;
var Button = _styled2["default"].button(function (_ref) {
  var label = _ref.label,
    isSmall = _ref.isSmall,
    isTiny = _ref.isTiny,
    isLarge = _ref.isLarge,
    isDisabled = _ref.isDisabled,
    isUppercase = _ref.isUppercase,
    iconColor = _ref.iconColor;
  return [{
    "display": "flex",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "fontSize": "14px",
    "fontWeight": "500 !important"
  }, {
    "columnGap": "0.5rem",
    "borderRadius": "0.125rem",
    "borderWidth": "1px",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingBottom": "5px",
    "paddingTop": "5px",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n      font-family: 'Inter';\n      align-items: center;\n      justify-content: center;\n      user-select: none;\n      cursor: pointer;\n      .icon-before {\n        position: relative;\n      }\n      .icon-after {\n        position: relative;\n      }\n      .icon-before * {\n        fill: ", ";\n      }\n      .icon-after * {\n        fill: ", ";\n      }\n    "])), iconColor ? iconColor : 'auto', iconColor ? iconColor : 'auto'), isUppercase && [(0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        text-transform: uppercase;\n      "])))], function (_ref2) {
    var _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'default' : _ref2$variant;
    return buttonVariants[variant];
  }, isSmall && [{
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingBottom": "1.5px",
    "paddingTop": "2px",
    "fontSize": "13px"
  }], isTiny && [{
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "paddingBottom": "0px",
    "paddingTop": "0px",
    "fontSize": "11px"
  }], isLarge && [{
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.375rem",
    "paddingBottom": "0.375rem",
    "fontSize": "16px"
  }], !label && [{
    "padding": "5px !important",
    "paddingLeft": "7px !important",
    "paddingRight": "7px !important"
  }], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});
exports.Button = Button;
var defaultStyle = [{
  "color": "var(--text-button)",
  ":hover": {
    "color": "var(--text-button-hover)"
  }
}, {
  "backgroundColor": "var(--bg-button)",
  ":hover": {
    "backgroundColor": "var(--bg-button-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-button-active)"
  }
}, {
  "borderColor": "var(--border-button)",
  ":hover": {
    "borderColor": "var(--border-button-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-active)"
  }
}];
var secondaryStyle = [{
  "color": "var(--text-button-secondary)",
  ":hover": {
    "color": "var(--text-button-secondary-hover)"
  }
}, {
  "backgroundColor": "var(--bg-button-secondary)",
  ":hover": {
    "backgroundColor": "var(--bg-button-secondary-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-button-secondary-active)"
  }
}, {
  "borderColor": "var(--border-button-secondary)",
  ":hover": {
    "borderColor": "var(--border-button-secondary-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-secondary-active)"
  }
}];
var successStyle = [{
  "color": "var(--text-button-success)",
  ":hover": {
    "color": "var(--text-button-success-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(45 185 45 / var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-success-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-success-active)"
  }
}, {
  "borderColor": "var(--border-button-success)",
  ":hover": {
    "borderColor": "var(--border-button-success-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-success-active)"
  }
}];
var infoStyle = [{
  "color": "var(--text-button-info)",
  ":hover": {
    "color": "var(--text-button-info-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(25 114 245 / var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-info-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-info-active)"
  }
}, {
  "borderColor": "var(--border-button-info)",
  ":hover": {
    "borderColor": "var(--border-button-info-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-info-active)"
  }
}];
var warningStyle = [{
  "color": "var(--text-button-warning)",
  ":hover": {
    "color": "var(--text-button-warning-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(240 135 39 / var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-warning-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-warning-active)"
  }
}, {
  "borderColor": "var(--border-button-warning)",
  ":hover": {
    "borderColor": "var(--border-button-warning-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-warning-active)"
  }
}];
var dangerStyle = [{
  "color": "var(--text-button-danger)",
  ":hover": {
    "color": "var(--text-button-danger-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(235 87 87 / var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-danger-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-danger-active)"
  }
}, {
  "borderColor": "var(--border-button-danger)",
  ":hover": {
    "borderColor": "var(--border-button-danger-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-danger-active)"
  }
}];
var buttonVariants = {
  "default": defaultStyle,
  secondary: secondaryStyle,
  success: successStyle,
  info: infoStyle,
  warning: warningStyle,
  danger: dangerStyle
};