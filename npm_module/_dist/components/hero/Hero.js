"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _layout = require("../../elements/layout");
var _excluded = ["children", "containerVariant"];
var HeroBlock = function HeroBlock(_ref) {
  var children = _ref.children,
    _ref$containerVariant = _ref.containerVariant,
    containerVariant = _ref$containerVariant === void 0 ? 'large' : _ref$containerVariant,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_layout.Section, Object.assign({}, props, {
    css: {
      "height": "300px",
      "@media (min-width: 768px)": {
        "height": "350px"
      },
      "@media (min-width: 1024px)": {
        "height": "400px"
      },
      "@media (min-width: 1280px)": {
        "height": "450px"
      },
      "@media (min-width: 1536px)": {
        "height": "500px"
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_layout.Container, {
    variant: containerVariant,
    css: {
      "display": "flex",
      "height": "100%",
      "flexDirection": "column",
      "justifyContent": "center"
    }
  }, children));
};
var _default = HeroBlock;
exports["default"] = _default;