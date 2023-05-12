"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../../elements/typography");
var _MinusIcon = _interopRequireDefault(require("../../../assets/svgs/icons/MinusIcon"));
var _PlusIcon = _interopRequireDefault(require("../../../assets/svgs/icons/PlusIcon"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Header = _styledComponents["default"].div.withConfig({
  displayName: "expandable-section__Header",
  componentId: "sc-1ky4e3d-0"
})(function (props) {
  return [{
    "display": "flex",
    "height": "44px",
    "width": "100%",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "transitionProperty": "all",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
  }, props.isOpen ? {
    "borderBottomWidth": "1px",
    "borderColor": "var(--border-window)"
  } : {
    "borderBottomWidth": "1px",
    "borderColor": "transparent"
  }];
});
var Content = _styledComponents["default"].div.withConfig({
  displayName: "expandable-section__Content",
  componentId: "sc-1ky4e3d-1"
})(function (props) {
  return [{
    "display": "grid",
    "paddingLeft": "15px",
    "paddingRight": "15px"
  }, props.isOpen ? {
    "gridTemplateRows": "1fr"
  } : {
    "gridTemplateRows": "0fr"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n\t\ttransition: grid-template-rows 300ms;\n\t"])))];
});
var InnerDiv = _styledComponents["default"].div.withConfig({
  displayName: "expandable-section__InnerDiv",
  componentId: "sc-1ky4e3d-2"
})(function (props) {
  return [{
    "overflow": "hidden",
    "paddingTop": "0",
    "paddingBottom": "0"
  }, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        > * {\n            ", "\n        }\n    "])), {
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  })];
});
var elementIsVisibleInViewport = function elementIsVisibleInViewport(el, elementHeightDiscountId) {
  var rect = el.getBoundingClientRect();
  var discountHeight = 0;
  if (elementHeightDiscountId) {
    var elementHeightDiscount = document.getElementById(elementHeightDiscountId);
    if (!elementHeightDiscount && elementHeightDiscount.clientHeight) {
      console.error("elementHeightDiscountId " + elementHeightDiscountId + " not found");
    } else {
      discountHeight = elementHeightDiscount.clientHeight;
    }
  }
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight - discountHeight && rect.right <= window.innerWidth;
};
var handleToggleHeader = function handleToggleHeader(isOpen, toggleOpen, headerRef, elementHeightDiscountId) {
  var applyScrollIntoView = !isOpen;
  toggleOpen(!isOpen);
  if (applyScrollIntoView) {
    setTimeout(function () {
      if (!elementIsVisibleInViewport(headerRef.current, elementHeightDiscountId)) {
        headerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }, 300);
  }
};
function ExpandableSection(_ref) {
  var title = _ref.title,
    children = _ref.children,
    shouldClose = _ref.shouldClose,
    elementHeightDiscountId = _ref.elementHeightDiscountId;
  var headerRef = _react["default"].useRef(null);
  var _React$useState = _react["default"].useState(false),
    isOpen = _React$useState[0],
    toggleOpen = _React$useState[1];
  if (children && typeof children === "string") {
    children = /*#__PURE__*/_react["default"].createElement(_typography.PSmall, null, children);
  }
  if (!shouldClose && isOpen) {
    toggleOpen(false);
  }
  return /*#__PURE__*/_react["default"].createElement(_StyledDiv, {
    ref: headerRef
  }, /*#__PURE__*/_react["default"].createElement(Header, {
    isOpen: isOpen,
    onClick: function onClick() {
      return handleToggleHeader(isOpen, toggleOpen, headerRef, elementHeightDiscountId);
    }
  }, /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
    isMedium: true
  }, title), isOpen ? /*#__PURE__*/_react["default"].createElement(_StyledMinusIcon, null) : /*#__PURE__*/_react["default"].createElement(_StyledPlusIcon, null)), /*#__PURE__*/_react["default"].createElement(Content, {
    isOpen: isOpen
  }, /*#__PURE__*/_react["default"].createElement(InnerDiv, null, children)));
}
;
var _default = ExpandableSection;
exports["default"] = _default;
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "expandable-section___StyledDiv",
  componentId: "sc-1ky4e3d-3"
})({
  "borderWidth": "1px",
  "borderColor": "var(--border-window)",
  "backgroundColor": "var(--bg-window)"
});
var _StyledMinusIcon = (0, _styledComponents["default"])(_MinusIcon["default"]).withConfig({
  displayName: "expandable-section___StyledMinusIcon",
  componentId: "sc-1ky4e3d-4"
})({
  "fill": "currentColor"
});
var _StyledPlusIcon = (0, _styledComponents["default"])(_PlusIcon["default"]).withConfig({
  displayName: "expandable-section___StyledPlusIcon",
  componentId: "sc-1ky4e3d-5"
})({
  "fill": "currentColor"
});