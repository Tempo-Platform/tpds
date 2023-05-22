"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.Underline = exports.Red = exports.PrimaryColor = exports.PTiny = exports.PSmall = exports.PNano = exports.PLarge = exports.P = exports.Orange = exports.Medium = exports.LabelTiny = exports.LabelSmall = exports.LabelNano = exports.Label = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Green = exports.Bold = exports.Blue = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../../constants/colors");
var _templateObject, _templateObject2;
var sharedTransforms = function sharedTransforms(props) {
  return [{
    "color": "var(--text-primary)"
  }, {
    "margin": "0px",
    "fontWeight": "400"
  }, props.isSmall && {
    "fontSize": "0.8125rem"
  }, props.isUnderline && {
    "textDecorationLine": "underline"
  }, props.isUppercase && {
    "textTransform": "uppercase"
  }, props.isItalic && {
    "fontStyle": "italic"
  }, props.isLight && {
    "fontWeight": "300"
  }, props.isMedium && {
    "fontWeight": "500"
  }, props.isBold && {
    "fontWeight": "700"
  }, props.isExtraBold && {
    "fontWeight": "800"
  }, props.isHeavy && {
    "fontWeight": "900"
  }, props.isPulsing && {
    "@keyframes pulse": {
      "50%": {
        "opacity": ".5"
      }
    },
    "animation": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, props.isCentered && {
    "textAlign": "center"
  }, props.noSelect && {
    "userSelect": "none"
  }, props.isWhite && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(255 255 255 / var(--tw-text-opacity)) !important"
  }, props.isGreen && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(50 205 50 / var(--tw-text-opacity)) !important"
  }, props.isRed && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(235 87 87 / var(--tw-text-opacity)) !important"
  }, props.isBlue && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(25 114 245 / var(--tw-text-opacity)) !important"
  }, props.isOrange && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(240 135 39 / var(--tw-text-opacity)) !important"
  }, props.isYellow && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(252 219 23 / var(--tw-text-opacity)) !important"
  }, props.leadingNone && {
    "lineHeight": "1 !important"
  }, props.isLabel && (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n      user-select: none;\n      font-family: Inter !important;\n      line-height: 100% !important;\n    "]))), (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    p {\n      a {\n        text-decoration: underline;\n      }\n    }\n  "])))];
};
var PNano = _styled2["default"].p({}, function (props) {
  return [{
    "fontSize": "11px"
  }];
}, sharedTransforms);
exports.PNano = PNano;
var PTiny = _styled2["default"].p({}, function (props) {
  return [{
    "fontSize": "0.6875rem",
    "@media (min-width: 1024px)": {
      "fontSize": "0.75rem"
    }
  }];
}, sharedTransforms);
exports.PTiny = PTiny;
var PSmall = _styled2["default"].p({}, function (props) {
  return [{
    "fontSize": "0.75rem",
    "@media (min-width: 1024px)": {
      "fontSize": "0.8125rem"
    }
  }];
}, sharedTransforms);
exports.PSmall = PSmall;
var P = _styled2["default"].p({}, function (props) {
  return [{
    "fontSize": "0.8125rem",
    "@media (min-width: 1024px)": {
      "fontSize": "0.9375rem"
    }
  }];
}, sharedTransforms);
exports.P = P;
var PLarge = _styled2["default"].p({}, function (props) {
  return [{
    "fontSize": "0.9375rem",
    "@media (min-width: 1024px)": {
      "fontSize": "1.125rem"
    }
  }];
}, sharedTransforms);
exports.PLarge = PLarge;
var H6 = _styled2["default"].h6({}, function (props) {
  return [{
    "fontSize": "1.125rem",
    "@media (min-width: 1024px)": {
      "fontSize": "1.25rem"
    }
  }];
}, sharedTransforms);
exports.H6 = H6;
var H5 = _styled2["default"].h5({}, function (props) {
  return [{
    "fontSize": "1.25rem",
    "@media (min-width: 1024px)": {
      "fontSize": "1.5rem"
    }
  }, {
    "letterSpacing": "0em"
  }];
}, sharedTransforms);
exports.H5 = H5;
var H4 = _styled2["default"].h4({}, function (props) {
  return [{
    "fontSize": "1.5rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.875rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "2.25rem"
    }
  }, {
    "letterSpacing": "0em"
  }];
}, sharedTransforms);
exports.H4 = H4;
var H3 = _styled2["default"].h3({}, function (props) {
  return [{
    "fontSize": "1.875rem",
    "@media (min-width: 768px)": {
      "fontSize": "2.25rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "3rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);
exports.H3 = H3;
var H2 = _styled2["default"].h2({}, function (props) {
  return [{
    "fontSize": "2.25rem",
    "@media (min-width: 768px)": {
      "fontSize": "3rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "3.75rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);
exports.H2 = H2;
var H1 = _styled2["default"].h1({}, function (props) {
  return [{
    "fontSize": "3rem",
    "@media (min-width: 768px)": {
      "fontSize": "3.75rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "4.5rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);

// helpers
exports.H1 = H1;
var PrimaryColor = _styled2["default"].span({
  color: _colors.green
});
exports.PrimaryColor = PrimaryColor;
var Bold = _styled2["default"].span({
  fontWeight: 'bold'
});
exports.Bold = Bold;
var Medium = _styled2["default"].span({
  fontWeight: '500'
});
exports.Medium = Medium;
var Underline = _styled2["default"].span({
  textDecoration: 'underline'
});
exports.Underline = Underline;
var Red = _styled2["default"].span({
  color: _colors.red
});
exports.Red = Red;
var Blue = _styled2["default"].span({
  color: _colors.blue
});
exports.Blue = Blue;
var Green = _styled2["default"].span({
  color: _colors.green
});
exports.Green = Green;
var Orange = _styled2["default"].span({
  color: _colors.orange
});

// forms / dashboards
exports.Orange = Orange;
var FieldLabelNano = (0, _styled2["default"])(PNano)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabelTiny = (0, _styled2["default"])(PTiny)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabelSmall = (0, _styled2["default"])(PSmall)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabel = (0, _styled2["default"])(P)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var labelStyles = [{
  "color": "var(--text-tertiary)"
}, {
  "fontWeight": "500"
}, {
  "lineHeight": "1"
}];
var LabelNano = (0, _styled2["default"])(FieldLabelNano)({}, function (props) {
  return labelStyles;
});
exports.LabelNano = LabelNano;
var LabelTiny = (0, _styled2["default"])(FieldLabelTiny)({}, function (props) {
  return labelStyles;
});
exports.LabelTiny = LabelTiny;
var LabelSmall = (0, _styled2["default"])(FieldLabelSmall)({}, function (props) {
  return labelStyles;
});
exports.LabelSmall = LabelSmall;
var Label = (0, _styled2["default"])(FieldLabel)({}, function (props) {
  return labelStyles;
});
exports.Label = Label;