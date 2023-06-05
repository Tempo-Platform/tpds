"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react2 = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _MinusIcon = _interopRequireDefault(require("../../assets/svgs/icons/MinusIcon"));
var _PlusIcon = _interopRequireDefault(require("../../assets/svgs/icons/PlusIcon"));
var _templateObject, _templateObject2;
var RootDiv = _styled2["default"].div(function (props) {
  return [{
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)"
  }, props.removeBorderTop && {
    "borderTopWidth": "0px"
  }, props.removeBorderBottom && {
    "borderBottomWidth": "0px"
  }];
});
var Header = _styled2["default"].div(function (props) {
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
var Content = _styled2["default"].div(function (props) {
  return [{
    "display": "grid",
    "paddingLeft": "15px",
    "paddingRight": "15px"
  }, props.isOpen ? {
    "gridTemplateRows": "1fr"
  } : {
    "gridTemplateRows": "0fr"
  }, (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    transition: grid-template-rows 300ms;\n  "])))];
});
var InnerDiv = _styled2["default"].div(function (props) {
  return [{
    "overflow": "hidden",
    "paddingTop": "0",
    "paddingBottom": "0"
  }, (0, _react.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    > * {\n      ", "\n    }\n  "])), {
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  })];
});
var elementIsVisibleInViewport = function elementIsVisibleInViewport(el, excludeElementId) {
  var rect = el.getBoundingClientRect();
  var discountHeight = 0;
  if (excludeElementId) {
    var elementHeightDiscount = document.getElementById(excludeElementId);
    if (!elementHeightDiscount && elementHeightDiscount.clientHeight) {
      console.error("excludeElementId " + excludeElementId + " not found");
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
  var headerRef = _react2["default"].useRef(null);
  var _React$useState = _react2["default"].useState(false),
    isOpen = _React$useState[0],
    toggleOpen = _React$useState[1];
  if (children && typeof children === 'string') {
    children = /*#__PURE__*/_react2["default"].createElement(_typography.PSmall, {
      css: {
        "lineHeight": "1.5 !important"
      }
    }, children);
  }
  if (shouldClose && isOpen) {
    toggleOpen(false);
  }
  return /*#__PURE__*/_react2["default"].createElement(RootDiv, {
    removeBorderBottom: removeBorderBottom,
    removeBorderTop: removeBorderTop,
    ref: headerRef
  }, /*#__PURE__*/_react2["default"].createElement(Header, {
    isOpen: isOpen,
    onClick: function onClick() {
      return handleToggleHeader(isOpen, toggleOpen, headerRef, excludeElementId);
    }
  }, /*#__PURE__*/_react2["default"].createElement(_typography.PSmall, {
    isMedium: true
  }, title), isOpen ? /*#__PURE__*/_react2["default"].createElement(_MinusIcon["default"], {
    css: {
      "fill": "currentColor"
    }
  }) : /*#__PURE__*/_react2["default"].createElement(_PlusIcon["default"], {
    css: {
      "fill": "currentColor"
    }
  })), /*#__PURE__*/_react2["default"].createElement(Content, {
    isOpen: isOpen
  }, /*#__PURE__*/_react2["default"].createElement(InnerDiv, null, children)));
}
var _default = ExpandableSection;
exports["default"] = _default;