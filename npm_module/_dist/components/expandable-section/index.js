"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _MinusIcon = _interopRequireDefault(require("../../assets/svgs/icons/MinusIcon"));
var _PlusIcon = _interopRequireDefault(require("../../assets/svgs/icons/PlusIcon"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var elementIsVisibleInViewport = function elementIsVisibleInViewport(el, excludeElementId) {
  var rect = el.getBoundingClientRect();
  var discountHeight = 0;
  if (excludeElementId) {
    var elementHeightDiscount = document.getElementById(excludeElementId);
    if (!elementHeightDiscount && elementHeightDiscount.clientHeight) {
      console.error("excludeElementId ".concat(excludeElementId, " not found"));
    } else {
      discountHeight = elementHeightDiscount.clientHeight;
    }
  }
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight - discountHeight && rect.right <= window.innerWidth;
};
var handleToggleHeader = function handleToggleHeader(isOpen, toggleOpen, headerRef, excludeElementId) {
  var applyScrollIntoView = !isOpen;
  toggleOpen(!isOpen);
  if (applyScrollIntoView) {
    setTimeout(function () {
      if (!elementIsVisibleInViewport(headerRef.current, excludeElementId)) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 300);
  }
};
function ExpandableSection(_ref) {
  var title = _ref.title,
    children = _ref.children,
    shouldClose = _ref.shouldClose,
    excludeElementId = _ref.excludeElementId,
    removeBorderTop = _ref.removeBorderTop,
    removeBorderBottom = _ref.removeBorderBottom;
  var headerRef = _react["default"].useRef(null);
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isOpen = _React$useState2[0],
    toggleOpen = _React$useState2[1];
  if (children && typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      style: {
        lineHeight: '1.5 !important'
      }
    }, children);
  }
  if (shouldClose && isOpen) {
    toggleOpen(false);
  }
  var rootClassName = (0, _clsx["default"])("bg-window border border-window", removeBorderTop && "border-t-0", removeBorderBottom && "border-b-0");
  var headerClassName = (0, _clsx["default"])("h-[44px] w-full flex justify-between items-center px-[16px] transition-all cursor-pointer", isOpen ? "border-b border-window" : "border-b border-transparent");
  var contentClassName = (0, _clsx["default"])("grid px-[15px]", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]");
  var innerDivClassName = (0, _clsx["default"])('tpds-expandable-section-content', "overflow-hidden py-[0]");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    global: true,
    jsx: true
  }, "\n          .tpds-expandable-section-content > * {\n            padding-top: 12px;\n            padding-bottom: 12px;\n          }\n        "), /*#__PURE__*/_react["default"].createElement("div", {
    className: rootClassName,
    ref: headerRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: headerClassName,
    onClick: function onClick() {
      return handleToggleHeader(isOpen, toggleOpen, headerRef, excludeElementId);
    }
  }, /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
    isMedium: true
  }, title), isOpen ? /*#__PURE__*/_react["default"].createElement(_MinusIcon["default"], {
    className: "text-primary"
  }) : /*#__PURE__*/_react["default"].createElement(_PlusIcon["default"], {
    className: "text-primary"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: contentClassName,
    style: {
      transition: 'grid-template-rows 300ms'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: innerDivClassName
  }, children))));
}
var _default = ExpandableSection;
exports["default"] = _default;