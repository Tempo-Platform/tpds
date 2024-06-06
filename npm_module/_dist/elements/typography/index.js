"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Underline = exports.Red = exports.PTiny = exports.PSmall = exports.PNano = exports.PLarge = exports.P = exports.Orange = exports.Medium = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Green = exports.FormLabelTiny = exports.FormLabelSmall = exports.FormLabelNano = exports.FormLabel = exports.Code = exports.Bold = exports.Blue = exports.AccentColor = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var baseStyles = 'text-primary m-0';
var calculateFinalClass = function calculateFinalClass(defaultClass, props) {
  var finalClass = (0, _clsx["default"])(baseStyles, defaultClass, props.className && props.className, props.isSmall && '!text-sm', props.isUnderline && '!underline', props.isUppercase && '!uppercase', props.isItalic && '!italic', props.isLight && '!font-light', props.isMedium && '!font-medium', props.isBold && '!font-bold', props.isExtraBold && '!font-extrabold', props.isHeavy && '!font-black', props.isPulsing && '!animate-pulse', props.isCentered && '!text-center', props.noSelect && '!select-none', props.isWhite && '!text-white', props.isGreen && '!text-green', props.isRed && '!text-red', props.isBlue && '!text-blue', props.isOrange && '!text-orange', props.isYellow && '!text-yellow', props.leadingNone && '!leading-none', props.isLabel && '!select-none', props.isLabel && '!leading-none', props.isLabel && '!font-label', props.forceLightMode && '!text-black');
  return finalClass;
};
var pNanoClass = 'text-xxs xl:text-xs';
var pTinyClass = 'text-xs xl:text-sm';
var pSmallClass = 'text-sm xl:text-base';
var pClass = 'text-base xl:text-lg';
var pLargeClass = 'text-lg xl:text-xl';
var h6Class = 'text-base md:text-lg lg:text-xl xl:text-2xl tracking-normal leading-tight';
var h5Class = 'text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-normal leading-tight';
var h4Class = 'text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-normal leading-tight';
var h3Class = 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight';
var h2Class = 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight';
var h1Class = 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight';
var PNano = function PNano(props) {
  var finalClass = calculateFinalClass(pNanoClass, props);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.PNano = PNano;
var PTiny = function PTiny(props) {
  var finalClass = calculateFinalClass(pTinyClass, props);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.PTiny = PTiny;
var PSmall = function PSmall(props) {
  var finalClass = calculateFinalClass(pSmallClass, props);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.PSmall = PSmall;
var P = function P(props) {
  var finalClass = calculateFinalClass(pClass, props);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.P = P;
var PLarge = function PLarge(props) {
  var finalClass = calculateFinalClass(pLargeClass, props);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.PLarge = PLarge;
var H6 = function H6(props) {
  var finalClass = calculateFinalClass(h6Class, props);
  return /*#__PURE__*/_react["default"].createElement("h6", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.H6 = H6;
var H5 = function H5(props) {
  var finalClass = calculateFinalClass(h5Class, props);
  return /*#__PURE__*/_react["default"].createElement("h5", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.H5 = H5;
var H4 = function H4(props) {
  var finalClass = calculateFinalClass(h4Class, props);
  return /*#__PURE__*/_react["default"].createElement("h4", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.H4 = H4;
var H3 = function H3(props) {
  var finalClass = calculateFinalClass(h3Class, props);
  return /*#__PURE__*/_react["default"].createElement("h3", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.H3 = H3;
var H2 = function H2(props) {
  var finalClass = calculateFinalClass(h2Class, props);
  return /*#__PURE__*/_react["default"].createElement("h2", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};
exports.H2 = H2;
var H1 = function H1(props) {
  var finalClass = calculateFinalClass(h1Class, props);
  return /*#__PURE__*/_react["default"].createElement("h1", {
    className: finalClass,
    style: props.style,
    onClick: props.onClick
  }, props.children);
};

// // helpers
exports.H1 = H1;
var AccentColor = function AccentColor(props) {
  var finalClass = calculateFinalClass('!text-blue', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.AccentColor = AccentColor;
var Bold = function Bold(props) {
  var finalClass = calculateFinalClass('!font-bold', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Bold = Bold;
var Medium = function Medium(props) {
  var finalClass = calculateFinalClass('!font-medium', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Medium = Medium;
var Underline = function Underline(props) {
  var finalClass = calculateFinalClass('!underline', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Underline = Underline;
var Red = function Red(props) {
  var finalClass = calculateFinalClass('!text-red', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Red = Red;
var Blue = function Blue(props) {
  var finalClass = calculateFinalClass('!text-blue', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Blue = Blue;
var Green = function Green(props) {
  var finalClass = calculateFinalClass('!text-green', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Green = Green;
var Orange = function Orange(props) {
  var finalClass = calculateFinalClass('!text-orange', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Orange = Orange;
var Code = function Code(props) {
  var finalClass = calculateFinalClass('font-mono font-bold', props);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: finalClass
  }, props.children);
};

// // form labels
exports.Code = Code;
var FormLabelNano = function FormLabelNano(props) {
  var finalClass = (0, _clsx["default"])(pNanoClass, 'font-label text-tertiary font-medium leading-none', props.className);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass
  }, props.children);
};
exports.FormLabelNano = FormLabelNano;
var FormLabelTiny = function FormLabelTiny(props) {
  var finalClass = (0, _clsx["default"])(pTinyClass, 'font-label text-tertiary font-medium leading-none', props.className);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass
  }, props.children);
};
exports.FormLabelTiny = FormLabelTiny;
var FormLabelSmall = function FormLabelSmall(props) {
  var finalClass = (0, _clsx["default"])(pSmallClass, 'font-label text-tertiary font-medium leading-none', props.className);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass
  }, props.children);
};
exports.FormLabelSmall = FormLabelSmall;
var FormLabel = function FormLabel(props) {
  var finalClass = (0, _clsx["default"])(pClass, 'font-label text-tertiary font-medium leading-none', props.className);
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: finalClass
  }, props.children);
};
exports.FormLabel = FormLabel;