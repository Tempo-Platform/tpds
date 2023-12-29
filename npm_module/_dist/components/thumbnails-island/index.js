"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ThumbnailsIsland(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? null : _ref$items,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#96969621' : _ref$backgroundColor,
    _ref$thumbnailsBackgr = _ref.thumbnailsBackgroundColor,
    thumbnailsBackgroundColor = _ref$thumbnailsBackgr === void 0 ? '#ffffff21' : _ref$thumbnailsBackgr,
    _ref$removeEnclosingI = _ref.removeEnclosingIsland,
    removeEnclosingIsland = _ref$removeEnclosingI === void 0 ? false : _ref$removeEnclosingI,
    _ref$thumbnailsPaddin = _ref.thumbnailsPadding,
    thumbnailsPadding = _ref$thumbnailsPaddin === void 0 ? 0 : _ref$thumbnailsPaddin,
    _ref$thumbnailsBorder = _ref.thumbnailsBorderRadius,
    thumbnailsBorderRadius = _ref$thumbnailsBorder === void 0 ? 6 : _ref$thumbnailsBorder,
    islandClassName = _ref.islandClassName,
    thumbnailClassName = _ref.thumbnailClassName,
    rootClassName = _ref.rootClassName;
  if (!items) {
    console.error('ThumbnailsIsland: items prop is required');
    return null;
  }
  var styles1Items = 'grid-cols-1 gap-3 p-2';
  var styles2Items = 'grid-cols-2 gap-3 p-2';
  var styles3Items = 'grid-cols-3 gap-1.5 p-2';
  var styles4Items = 'grid-cols-4 gap-2 p-2';
  var styles5Items = 'grid-cols-5 gap-2 p-2';
  var styles6Items = 'grid-cols-6 gap-1 p-1';
  var gridClassName = (0, _clsx["default"])("grid w-full h-auto rounded-lg", islandClassName, items.length === 1 && styles1Items, items.length === 2 && styles2Items, items.length === 3 && styles3Items, items.length === 4 && styles4Items, items.length === 5 && styles5Items, items.length === 6 && styles6Items, removeEnclosingIsland && '!p-0');
  var iconClassName = (0, _clsx["default"])("box-border", "flex items-center justify-center cursor-pointer", "rounded overflow-hidden", "!aspect-square", thumbnailClassName);
  if (backgroundColor.indexOf('#') === -1) {
    backgroundColor = "#".concat(backgroundColor);
  }
  if (thumbnailsBackgroundColor.indexOf('#') === -1) {
    thumbnailsBackgroundColor = "#".concat(thumbnailsBackgroundColor);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('absolute p-[10px]', rootClassName),
    style: {
      width: 'calc(100% - 10px)',
      bottom: '0',
      zIndex: '2',
      margin: '0 5px 5px 5px',
      background: 'transparent'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: gridClassName,
    style: {
      backgroundColor: removeEnclosingIsland ? 'transparent' : backgroundColor
    }
  }, items.map(function (image) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: image.url,
      style: {
        backgroundColor: thumbnailsBackgroundColor,
        padding: "".concat(thumbnailsPadding, "px"),
        borderRadius: "".concat(thumbnailsBorderRadius, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: iconClassName,
      onClick: image.callBack ? image.callBack : null,
      style: {
        background: "url(".concat(image.url, ") no-repeat center center"),
        backgroundSize: 'contain',
        borderRadius: "".concat(thumbnailsBorderRadius - 3, "px")
      }
    }));
  })));
}
var _default = ThumbnailsIsland;
exports["default"] = _default;