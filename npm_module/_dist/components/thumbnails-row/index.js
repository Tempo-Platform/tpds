"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _templateObject;
var Grid = _styled2["default"].div(function () {
  return [{
    "height": "auto",
    "width": "100%",
    "borderRadius": "0.5rem",
    "padding": "1rem"
  }, {
    "display": "grid",
    "gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
    "gap": "0.5rem"
  }, {
    "backgroundColor": "rgb(30 34 36 / 0.1)"
  }];
});
var IconBox = _styled2["default"].div(function () {
  return [{
    "display": "flex",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "center"
  }, {
    "boxSizing": "border-box",
    "backgroundColor": "rgb(30 34 36 / 0.2) !important"
  }, {
    "aspectRatio": "1 / 1",
    "width": "100%"
  }, {
    "overflow": "hidden",
    "borderRadius": "0.25rem"
  }];
});
var Img = _styled2["default"].img(function () {
  return [(0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    max-height: none;\n  "])))];
});
function ThumbnailsRow(_ref) {
  var images = _ref.images,
    props = _ref.props;
  return /*#__PURE__*/_react2["default"].createElement(Grid, props, images.map(function (image) {
    return /*#__PURE__*/_react2["default"].createElement(IconBox, {
      onClick: image.callBack ? image.callBack : null,
      style: {
        background: "url(" + image.url + ") no-repeat center center",
        backgroundSize: 'contain'
      }
    });
  }));
}
var _default = ThumbnailsRow;
exports["default"] = _default;