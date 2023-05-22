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
  }], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});
exports.Button = Button;
var defaultStyle = [{
  "--tw-text-opacity": "1",
  "color": "rgb(72 77 81 / var(--tw-text-opacity))",
  ":is(.dark &)": {
    "--tw-text-opacity": "1",
    "color": "rgb(233 235 236 / var(--tw-text-opacity))"
  }
}, {
  "--tw-border-opacity": "1",
  "borderColor": "rgb(223 225 226 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(223 225 226 / var(--tw-bg-opacity))",
  ":is(.dark &)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(40 44 47 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
  }
}, {
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(201 205 207 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(201 205 207 / var(--tw-bg-opacity))"
  },
  ":is(.dark &:hover)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(50 54 57 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(50 54 57 / var(--tw-bg-opacity))"
  }
}, {
  ":active": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(233 235 236 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(233 235 236 / var(--tw-bg-opacity))"
  },
  ":is(.dark &:active)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(30 34 36 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(30 34 36 / var(--tw-bg-opacity))"
  }
}];
var secondaryStyle = [{
  "--tw-text-opacity": "1",
  "color": "rgb(72 77 81 / var(--tw-text-opacity))",
  ":is(.dark &)": {
    "--tw-text-opacity": "1",
    "color": "rgb(233 235 236 / var(--tw-text-opacity))"
  }
}, {
  "--tw-border-opacity": "1",
  "borderColor": "rgb(223 225 226 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))",
  ":is(.dark &)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(72 77 81 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
  }
}, {
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(201 205 207 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))"
  },
  ":is(.dark &:hover)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(120 129 135 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
  }
}, {
  ":active": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(147 155 159 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))"
  },
  ":is(.dark &:active)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(174 179 182 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
  }
}];
var successStyle = [{
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ":is(.dark &)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, {
  "--tw-border-opacity": "1",
  "borderColor": "rgb(45 185 45 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(45 185 45 / var(--tw-bg-opacity))",
  ":is(.dark &)": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(50 205 50 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(50 205 50 / var(--tw-bg-opacity))"
  }
}, {
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(50 205 50 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(50 205 50 / var(--tw-bg-opacity))"
  }
}, {
  ":active": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(40 164 40 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(40 164 40 / var(--tw-bg-opacity))"
  }
}];
var infoStyle = [{
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ":is(.dark &)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, {
  "--tw-border-opacity": "1",
  "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(25 114 245 / var(--tw-bg-opacity))"
}, {
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(71 142 247 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(71 142 247 / var(--tw-bg-opacity))"
  }
}, {
  ":active": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(21 97 208 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(21 97 208 / var(--tw-bg-opacity))"
  }
}];
var warningStyle = [{
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ":is(.dark &)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, {
  "--tw-border-opacity": "1",
  "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(240 135 39 / var(--tw-bg-opacity))"
}, {
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(243 159 82 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(243 159 82 / var(--tw-bg-opacity))"
  }
}, {
  ":active": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(218 123 35 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(218 123 35 / var(--tw-bg-opacity))"
  }
}];
var dangerStyle = [{
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ":is(.dark &)": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
}, {
  "--tw-border-opacity": "1",
  "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(235 87 87 / var(--tw-bg-opacity))"
}, {
  ":hover": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(239 121 121 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(239 121 121 / var(--tw-bg-opacity))"
  }
}, {
  ":active": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(214 79 79 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(214 79 79 / var(--tw-bg-opacity))"
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