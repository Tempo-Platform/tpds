"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = exports.SeparatorWindow = exports.Separator = exports.Section = exports.PageRoot = exports.PaddingBox = exports.ContainerRow = exports.Container = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Section = function Section(props) {
  var defaultClass = 'flex flex-col w-full';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Section = Section;
var PageRoot = function PageRoot(props) {
  var defaultClass = 'flex flex-col w-full min-h-screen';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.PageRoot = PageRoot;
var containerVariants = {
  shortest: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[768px]',
  "short": 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[1022px]',
  large: 'px-6 sm:px-8 w-full md:px-0 md:w-[80%] xl:w-[70%] 2xl:w-[60%] 2xl:max-w-[1440px]',
  full: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 xl:w-10/12 2xl:w-full 2xl:px-30px'
};
var Container = function Container(props) {
  var defaultClass = 'self-center mx-auto';
  var variant = props.variant || 'large';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className, containerVariants[variant]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Container = Container;
var ContainerRow = function ContainerRow(props) {
  var defaultClass = 'self-center flex-row';
  var variant = props.variant || 'large';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className, containerVariants[variant]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.ContainerRow = ContainerRow;
var PaddingBox = function PaddingBox(props) {
  var defaultClass = 'py-4 md:py-8 lg:py-12 xl:py-20';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.PaddingBox = PaddingBox;
var Separator = function Separator(props) {
  var defaultClass = 'h-[1px] w-full mt-[20px] border-b border-body';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Separator = Separator;
var SeparatorWindow = function SeparatorWindow(props) {
  var defaultClass = 'h-[1px] w-full mt-[20px] border-b border-window';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.SeparatorWindow = SeparatorWindow;
var Window = function Window(props) {
  var defaultClass = 'bg-window border border-window rounded-sm py-xs px-xs md:py-xs md:px-sm lg:py-sm lg:px-md lg:rounded';
  var finalClass = (0, _clsx["default"])(defaultClass, props.className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalClass,
    style: props.style
  }, props.children);
};
exports.Window = Window;