"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _input = require("../../elements/input");
var _reactColorful = require("react-colorful");
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var classColorSquare = (0, _clsx["default"])('cursor-pointer', 'w-full max-w-[40px] h-[40px] rounded-[6px] relative', 'bg-grey-light-scale-400 dark:bg-grey-dark-scale-400');
var classColorInnerSquare = (0, _clsx["default"])('w-[30px] h-[30px] rounded-[3px] absolute top-[5px] left-[5px]');
var ColorPickerInput = function ColorPickerInput(props) {
  var onChangeHandler = props.onChangeHandler,
    hexColor = props.hexColor;
  var wrapperRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    colorPickerActive = _useState2[0],
    setColorPickerActive = _useState2[1];
  var handlePickerColorChange = function handlePickerColorChange(color) {
    onChangeHandler(color);
  };
  var onInputChangeHandler = function onInputChangeHandler(e) {
    onChangeHandler(e.target.value);
  };
  (0, _react.useEffect)(function () {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setColorPickerActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tpds-color-picker inline-flex gap-x-1 w-full relative",
    ref: wrapperRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classColorSquare,
    onClick: function onClick() {
      return setColorPickerActive(!colorPickerActive);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classColorInnerSquare,
    style: {
      backgroundColor: hexColor
    }
  })), /*#__PURE__*/_react["default"].createElement(_input.TextInput, {
    placeholder: "Hex",
    value: hexColor,
    onChange: onInputChangeHandler
  }), colorPickerActive && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-[35px] left-0 z-10"
  }, /*#__PURE__*/_react["default"].createElement(_reactColorful.HexAlphaColorPicker, {
    color: hexColor,
    onChange: handlePickerColorChange
  })));
};
var _default = ColorPickerInput;
exports["default"] = _default;