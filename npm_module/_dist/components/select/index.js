"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = Select;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _HeroIcons = _interopRequireDefault(require("../../assets/svgs/icons/HeroIcons"));
var _excluded = ["label", "active", "selected"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * HeadlessUI "Listbox (Select)"
 * Customized for twin.macro
 * https://headlessui.dev/react/listbox
 */

function Select(_ref) {
  var items = _ref.items,
    selected = _ref.selected,
    setSelected = _ref.setSelected,
    listboxProps = _ref.listboxProps,
    listboxOptionsProps = _ref.listboxOptionsProps;
  // const [selected, setSelected] = useState(items[0])
  if (items.length === 0) return null;
  return /*#__PURE__*/_react["default"].createElement(_react2.Listbox, Object.assign({
    value: selected,
    css: {
      "position": "relative",
      "backgroundColor": "var(--bg-window)",
      ":focus-within": {
        "zIndex": "10"
      }
    },
    onChange: setSelected
  }, listboxProps), function (_ref2) {
    var open = _ref2.open;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Label, {
      text: selected === null || selected === void 0 ? void 0 : selected.label,
      open: open
    }), items.length > 0 && /*#__PURE__*/_react["default"].createElement(_react2.Listbox.Options, Object.assign({
      css: {
        "position": "absolute",
        "marginTop": "0.25rem",
        "maxHeight": "15rem",
        "width": "100%",
        "overflow": "auto",
        "borderRadius": "0.375rem",
        "borderColor": "var(--border-window)",
        "backgroundColor": "var(--bg-window)",
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem",
        "fontSize": "0.9375rem",
        "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "--tw-ring-opacity": "0.05",
        "--tw-ring-color": "rgb(0 0 0 / var(--tw-ring-opacity))",
        ":focus": {
          "outline": "2px solid transparent",
          "outlineOffset": "2px"
        },
        "@media (min-width: 640px)": {
          "fontSize": "0.8125rem"
        }
      }
    }, listboxOptionsProps), items.map(ListboxOption)));
  });
}
function ListboxOption(item, index) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Listbox.Option, {
    as: _react.Fragment,
    key: index,
    value: item,
    disabled: item.disabled,
    style: {
      opacity: item.disabled ? '0.5' : '1'
    }
  }, function (props) {
    return /*#__PURE__*/_react["default"].createElement(Option, Object.assign({
      label: item.label
    }, props));
  });
}
function Label(_ref3) {
  var text = _ref3.text;
  return /*#__PURE__*/_react["default"].createElement(_react2.Listbox.Button, {
    css: {
      "position": "relative",
      "width": "100%",
      "cursor": "pointer",
      "borderRadius": "0.5rem",
      "borderWidth": "1px",
      "borderColor": "var(--border-window)",
      "backgroundColor": "var(--bg-window)",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "paddingLeft": "0.75rem",
      "paddingRight": "2.5rem",
      "textAlign": "left",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      ":focus-visible": {
        "--tw-border-opacity": "1",
        "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-opacity": "0.75",
        "--tw-ring-color": "rgb(45 185 45 / var(--tw-ring-opacity))",
        "--tw-ring-offset-width": "2px",
        "--tw-ring-offset-color": "#84E184"
      },
      "@media (min-width: 640px)": {
        "fontSize": "0.8125rem"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    css: {
      "display": "block",
      "overflow": "hidden",
      "textOverflow": "ellipsis",
      "whiteSpace": "nowrap"
    }
  }, text), /*#__PURE__*/_react["default"].createElement("span", {
    css: {
      "pointerEvents": "none",
      "position": "absolute",
      "top": "0px",
      "bottom": "0px",
      "right": "0px",
      "display": "flex",
      "alignItems": "center",
      "paddingRight": "0.5rem"
    }
  }, /*#__PURE__*/_react["default"].createElement(_HeroIcons["default"].SelectorIcon, {
    css: {
      "height": "1.25rem",
      "width": "1.25rem",
      "--tw-text-opacity": "1",
      "color": "rgb(223 225 226 / var(--tw-text-opacity))"
    },
    "aria-hidden": "true"
  })));
}
function Option(_ref4) {
  var label = _ref4.label,
    active = _ref4.active,
    selected = _ref4.selected,
    rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", Object.assign({
    css: [{
      "position": "relative",
      "cursor": "pointer",
      "userSelect": "none",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "paddingLeft": "2.5rem",
      "paddingRight": "1rem",
      ":hover": {
        "fontWeight": "700"
      }
    }, active ? {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(45 185 45 / var(--tw-bg-opacity))",
      "fontWeight": "700",
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    } : {
      "color": "var(--text-primary)"
    }]
  }, rest), /*#__PURE__*/_react["default"].createElement("span", {
    css: [{
      "display": "block",
      "overflow": "hidden",
      "textOverflow": "ellipsis",
      "whiteSpace": "nowrap"
    }, selected ? {
      "fontWeight": "500"
    } : {
      "fontWeight": "400"
    }]
  }, label), selected && /*#__PURE__*/_react["default"].createElement("span", {
    css: [{
      "position": "absolute",
      "top": "0px",
      "bottom": "0px",
      "left": "0px",
      "display": "flex",
      "alignItems": "center",
      "paddingLeft": "0.75rem"
    }, active ? {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    } : {
      "color": "var(--text-primary)"
    }]
  }, /*#__PURE__*/_react["default"].createElement(_HeroIcons["default"].CheckIcon, {
    css: {
      "height": "1.25rem",
      "width": "1.25rem"
    },
    "aria-hidden": "true"
  })));
}