"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.CalloutWarning = exports.CalloutTip = exports.CalloutSuccess = exports.CalloutNote = exports.CalloutInfo = exports.CalloutDanger = exports.CalloutBug = exports.Callout = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _CheckIcon = _interopRequireDefault(require("../../assets/svgs/notifications/CheckIcon"));
var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/notifications/WarningIcon"));
var _ErrorIcon = _interopRequireDefault(require("../../assets/svgs/notifications/ErrorIcon"));
var _InfoIcon = _interopRequireDefault(require("../../assets/svgs/notifications/InfoIcon"));
var _TipIcon = _interopRequireDefault(require("../../assets/svgs/notifications/TipIcon"));
var _BugIcon = _interopRequireDefault(require("../../assets/svgs/notifications/BugIcon"));
var _NoteIcon = _interopRequireDefault(require("../../assets/svgs/notifications/NoteIcon"));
var _templateObject, _templateObject2;
var _excluded = ["title", "text"],
  _excluded2 = ["title", "text"],
  _excluded3 = ["title", "text"],
  _excluded4 = ["title", "text"],
  _excluded5 = ["title", "text"],
  _excluded6 = ["title", "text"],
  _excluded7 = ["title", "text"],
  _excluded8 = ["title", "text"];
var Callout = function Callout(_ref) {
  var title = _ref.title,
    text = _ref.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react2["default"].createElement(RootDefault, props, /*#__PURE__*/_react2["default"].createElement(HeaderDefault, null, title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.Callout = Callout;
var CalloutSuccess = function CalloutSuccess(_ref2) {
  var title = _ref2.title,
    text = _ref2.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/_react2["default"].createElement(RootSuccess, props, /*#__PURE__*/_react2["default"].createElement(HeaderSuccess, null, /*#__PURE__*/_react2["default"].createElement(_CheckIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutSuccess = CalloutSuccess;
var CalloutInfo = function CalloutInfo(_ref3) {
  var title = _ref3.title,
    text = _ref3.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, _excluded3);
  return /*#__PURE__*/_react2["default"].createElement(RootInfo, props, /*#__PURE__*/_react2["default"].createElement(HeaderInfo, null, /*#__PURE__*/_react2["default"].createElement(_InfoIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutInfo = CalloutInfo;
var CalloutWarning = function CalloutWarning(_ref4) {
  var title = _ref4.title,
    text = _ref4.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, _excluded4);
  return /*#__PURE__*/_react2["default"].createElement(RootWarning, props, /*#__PURE__*/_react2["default"].createElement(HeaderWarning, null, /*#__PURE__*/_react2["default"].createElement(_WarningIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutWarning = CalloutWarning;
var CalloutDanger = function CalloutDanger(_ref5) {
  var title = _ref5.title,
    text = _ref5.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded5);
  return /*#__PURE__*/_react2["default"].createElement(RootDanger, props, /*#__PURE__*/_react2["default"].createElement(HeaderDanger, null, /*#__PURE__*/_react2["default"].createElement(_ErrorIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutDanger = CalloutDanger;
var CalloutTip = function CalloutTip(_ref6) {
  var title = _ref6.title,
    text = _ref6.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref6, _excluded6);
  return /*#__PURE__*/_react2["default"].createElement(RootTip, props, /*#__PURE__*/_react2["default"].createElement(HeaderTip, null, /*#__PURE__*/_react2["default"].createElement(_TipIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutTip = CalloutTip;
var CalloutBug = function CalloutBug(_ref7) {
  var title = _ref7.title,
    text = _ref7.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref7, _excluded7);
  return /*#__PURE__*/_react2["default"].createElement(RootBug, props, /*#__PURE__*/_react2["default"].createElement(HeaderBug, null, /*#__PURE__*/_react2["default"].createElement(_BugIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutBug = CalloutBug;
var CalloutNote = function CalloutNote(_ref8) {
  var title = _ref8.title,
    text = _ref8.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref8, _excluded8);
  return /*#__PURE__*/_react2["default"].createElement(RootNote, props, /*#__PURE__*/_react2["default"].createElement(HeaderNote, null, /*#__PURE__*/_react2["default"].createElement(_NoteIcon["default"], null), " ", title), /*#__PURE__*/_react2["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutNote = CalloutNote;
var Root = _styled2["default"].div(function (_ref9) {
  var type = _ref9.type;
  return [{
    "borderRadius": "0.25rem",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "8px",
    "borderRightWidth": "1px",
    "borderTopWidth": "1px",
    "borderStyle": "solid"
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    svg {\n      margin-right: 10px;\n    }\n  "])))];
});
var RootDefault = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(223 225 226 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(241 243 243 / var(--tw-bg-opacity))"
  }, {
    ":is(.dark &)": {
      "backgroundColor": "rgb(250 250 250 / 0.05)"
    }
  }];
});
var RootSuccess = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(193 240 193 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(193 240 193 / 0.2)"
  }, {
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(132 225 132 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(50 205 50 / 0.1)"
    }
  }];
});
var RootInfo = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(209 227 253 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(209 227 253 / 0.2)"
  }, {
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(117 170 249 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(117 170 249 / 0.1)"
    }
  }];
});
var RootDanger = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(249 203 203 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(249 203 203 / 0.2)"
  }, {
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(242 142 142 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(242 142 142 / 0.1)"
    }
  }];
});
var RootWarning = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(250 218 188 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(250 218 188 / 0.2)"
  }, {
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(245 175 110 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(245 175 110 / 0.1)"
    }
  }];
});
var RootTip = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(206 176 250 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(206 176 250 / 0.2)"
  }, {
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(150 84 244 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(150 84 244 / 0.1)"
    }
  }];
});
var RootBug = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(250 218 188 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(250 218 188 / 0.2)"
  }, {
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(245 175 110 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(245 175 110 / 0.1)"
    }
  }];
});
var RootNote = (0, _styled2["default"])(Root)(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(223 225 226 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(223 225 226 / 0.2)"
  }, {
    ":is(.dark &)": {
      "backgroundColor": "rgb(250 250 250 / 0.05)"
    }
  }];
});
var Header = _styled2["default"].div(function (_ref10) {
  var type = _ref10.type;
  return [{
    "display": "flex",
    "alignItems": "center",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "1rem",
    "fontSize": "1.125rem",
    "fontWeight": "500"
  }];
});
var HeaderDefault = (0, _styled2["default"])(Header)(function (_ref11) {
  var type = _ref11.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(21 24 25 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(201 205 207 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderSuccess = (0, _styled2["default"])(Header)(function (_ref12) {
  var type = _ref12.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(50 205 50 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(91 215 91 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderInfo = (0, _styled2["default"])(Header)(function (_ref13) {
  var type = _ref13.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(25 114 245 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(117 170 249 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderDanger = (0, _styled2["default"])(Header)(function (_ref14) {
  var type = _ref14.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(235 87 87 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(239 121 121 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderWarning = (0, _styled2["default"])(Header)(function (_ref15) {
  var type = _ref15.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(240 135 39 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(243 159 82 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderTip = (0, _styled2["default"])(Header)(function (_ref16) {
  var type = _ref16.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(98 0 238 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(206 176 250 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderBug = (0, _styled2["default"])(Header)(function (_ref17) {
  var type = _ref17.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(240 135 39 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(243 159 82 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderNote = (0, _styled2["default"])(Header)(function (_ref18) {
  var type = _ref18.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(21 24 25 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    }
  }];
});
var Text = _styled2["default"].div(function () {
  return [{
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingBottom": "1rem",
    "paddingTop": "0.5rem",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgb(72 77 81 / var(--tw-text-opacity))",
    ":is(.dark &)": {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    }
  }, (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    overflow-wrap: anywhere;\n    a {\n      text-decoration: underline;\n    }\n  "])))];
});