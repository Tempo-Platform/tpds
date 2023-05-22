"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = ComboBox;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _solid = require("@heroicons/react/solid");
var _excluded = ["items", "selected", "setSelected", "placeholderName"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ComboBox(_ref) {
  var items = _ref.items,
    selected = _ref.selected,
    setSelected = _ref.setSelected,
    placeholderName = _ref.placeholderName,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(''),
    query = _useState[0],
    setQuery = _useState[1];

  // reset to empty query when selected is no longer valid value 
  (0, _react.useEffect)(function () {
    if (!selected) {
      setQuery('');
    }
  }, [selected]);
  var filteredItems = query === '' ? items : items.filter(function (item) {
    return item.label.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
  });
  if (!placeholderName) {
    placeholderName = props.multiple ? 'Select multiple' : 'Select one';
  }
  var getPlaceholder = function getPlaceholder() {
    if (!selected) {
      return placeholderName;
    }
    if (props.multiple) {
      if (selected.length === 0) {
        return placeholderName;
      }
      if (selected.length === 1) {
        return selected[0].label;
      }
      if (selected.length > 1) {
        return selected.map(function (item) {
          return item.label;
        });
      }
    } else {
      return selected.label;
    }
  };
  var hasSelection = function hasSelection() {
    if (props.multiple && selected && selected.length > 0) return true;
    if (!props.multiple && selected) return true;
    return false;
  };
  return /*#__PURE__*/_react["default"].createElement(_react2.Combobox, Object.assign({
    value: selected,
    onChange: setSelected
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    css: {
      "position": "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    css: {
      "position": "relative",
      "width": "100%",
      "cursor": "default",
      "overflow": "hidden",
      "borderRadius": "0.25rem",
      "textAlign": "left",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      "@media (min-width: 640px)": {
        "fontSize": "0.8125rem"
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Combobox.Input, {
    css: {
      "width": "100%",
      "borderWidth": "1px",
      "borderColor": "var(--border-window)",
      "backgroundColor": "var(--bg-window)",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "paddingLeft": "0.75rem",
      "paddingRight": "2.5rem",
      "fontSize": "0.8125rem",
      "fontWeight": "500",
      "lineHeight": "1.25rem",
      "color": "var(--text-secondary)",
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    },
    placeholder: getPlaceholder(),
    displayValue: function displayValue(item) {
      return !selected ? '' : props.multiple ? '' : selected.label;
    },
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Combobox.Button, {
    css: {
      "position": "absolute",
      "top": "0px",
      "bottom": "0px",
      "right": "0px",
      "display": "flex",
      "alignItems": "center",
      "paddingRight": "0.5rem"
    }
  }, hasSelection() && /*#__PURE__*/_react["default"].createElement(_solid.XIcon, {
    css: {
      "height": "1.25rem",
      "width": "1.25rem",
      "color": "var(--text-tertiary)"
    },
    "aria-hidden": "true",
    onClick: function onClick() {
      setSelected(props.multiple ? [] : null);
      setQuery('');
    }
  }), /*#__PURE__*/_react["default"].createElement(_solid.SelectorIcon, {
    css: {
      "height": "1.25rem",
      "width": "1.25rem",
      "color": "var(--text-tertiary)"
    },
    "aria-hidden": "true"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Combobox.Options, {
    css: {
      "position": "absolute",
      "zIndex": "50",
      "marginTop": "0.25rem",
      "maxHeight": "15rem",
      "width": "100%",
      "overflow": "auto",
      "borderRadius": "0.375rem",
      "borderWidth": "1px",
      "borderColor": "var(--border-window)",
      "backgroundColor": "var(--bg-window)",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "fontSize": "0.9375rem",
      "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      "@media (min-width: 640px)": {
        "fontSize": "0.8125rem"
      }
    }
  }, filteredItems.length === 0 && query !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
    css: {
      "position": "relative",
      "cursor": "default",
      "userSelect": "none",
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "color": "var(--text-primary)"
    }
  }, "Nothing found.") : filteredItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_react2.Combobox.Option, {
      key: item.id,
      css: function css(_ref2) {
        var active = _ref2.active;
        return comboBoxStyles[active];
      },
      value: item
    }, function (_ref3) {
      var selected = _ref3.selected,
        active = _ref3.active;
      return /*#__PURE__*/_react["default"].createElement("span", {
        css: {
          "position": "relative",
          "display": "block"
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        css: spanStyles[active]
      }, item.label), selected ? /*#__PURE__*/_react["default"].createElement("span", {
        css: spanBStyles[active]
      }, /*#__PURE__*/_react["default"].createElement(_solid.CheckIcon, {
        css: {
          "height": "1.25rem",
          "width": "1.25rem"
        },
        "aria-hidden": "true"
      })) : null);
    });
  }))));
}
var comboBoxStyles = {};
comboBoxStyles[true] = {
  "position": "relative",
  "cursor": "default",
  "userSelect": "none",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "color": "var(--text-tertiary)"
};
comboBoxStyles[false] = {
  "position": "relative",
  "cursor": "default",
  "userSelect": "none",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "color": "var(--text-secondary)"
};
var spanStyles = {};
spanStyles[true] = {
  "display": "block",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "whiteSpace": "nowrap",
  "backgroundColor": "rgb(201 205 207 / 0.1)",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontWeight": "500",
  ":hover": {
    "cursor": "pointer"
  }
};
spanStyles[false] = {
  "display": "block",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "whiteSpace": "nowrap",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontWeight": "400",
  ":hover": {
    "cursor": "pointer"
  }
};
var spanBStyles = {};
spanBStyles[true] = {
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "left": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingLeft": "0.75rem",
  "color": "rgb(50 205 50 / var(--tw-text-opacity))",
  "--tw-text-opacity": "1"
};
spanBStyles[false] = {
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "left": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingLeft": "0.75rem",
  "color": "rgb(240 135 39 / var(--tw-text-opacity))",
  "--tw-text-opacity": "1"
};