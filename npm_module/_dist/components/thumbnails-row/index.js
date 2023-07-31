"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ThumbnailsRow(_ref) {
  var images = _ref.images,
    props = _ref.props;
  var gridClassName = (0, _clsx["default"])("w-full h-auto rounded-lg p-2", "grid grid-cols-4 gap-2", "bg-grey-dark-scale-600/10");
  var iconClassName = (0, _clsx["default"])("flex items-center justify-center cursor-pointer", "!bg-grey-dark-scale-600/20 box-border", "w-full aspect-square", "rounded overflow-hidden");
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: gridClassName
  }, props), images.map(function (image) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: image.url,
      className: iconClassName,
      onClick: image.callBack ? image.callBack : null,
      style: {
        background: "url(".concat(image.url, ") no-repeat center center"),
        backgroundSize: 'contain'
      }
    });
  }));
}
var _default = ThumbnailsRow;
exports["default"] = _default;