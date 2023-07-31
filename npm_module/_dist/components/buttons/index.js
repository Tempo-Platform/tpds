"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
exports.ExternalLinkButton = ExternalLinkButton;
exports.ExternalLinkIcon = ExternalLinkIcon;
var _clsx = _interopRequireDefault(require("clsx"));
var _buttons = require("../../elements/buttons");
var _spinner = _interopRequireDefault(require("../spinner"));
var _excluded = ["label", "iconBefore", "iconAfter", "variant", "loading"],
  _excluded2 = ["label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = function Button(_ref) {
  var label = _ref.label,
    iconBefore = _ref.iconBefore,
    iconAfter = _ref.iconAfter,
    variant = _ref.variant,
    loading = _ref.loading,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_buttons.Button, _extends({
    variant: variant
  }, props), iconBefore && iconBefore, label, iconAfter && iconAfter, loading && /*#__PURE__*/React.createElement(_spinner["default"], {
    color: "white",
    className: "block",
    radius: 15
  }));
};
exports.Button = Button;
function ExternalLinkIcon(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "14",
    viewBox: "0 0 13 14"
  }), /*#__PURE__*/React.createElement("path", {
    className: "fill-current",
    d: "M12.62.625L8.48.65a.347.347 0 00-.355.356v.838c0 .203.152.38.355.38l1.88-.076.05.051-7.084 7.084a.385.385 0 00-.101.203c0 .076.05.178.101.229l.584.584c.05.05.152.101.229.101.05 0 .152-.05.203-.101l7.084-7.084.05.05-.076 1.88c0 .203.178.355.381.355h.838a.347.347 0 00.356-.355L13 1.005a.39.39 0 00-.38-.38zm-1.651 7.313h-.406a.418.418 0 00-.407.406v3.91c0 .101-.076.152-.152.152H1.37c-.101 0-.152-.05-.152-.152V3.62c0-.076.05-.152.152-.152h3.91a.418.418 0 00.407-.406v-.407a.437.437 0 00-.407-.406H1.22C.533 2.25 0 2.809 0 3.469v8.937c0 .686.533 1.219 1.219 1.219h8.937c.66 0 1.219-.533 1.219-1.219V8.344a.437.437 0 00-.406-.406z"
  }));
}
function ExternalLinkButton(_ref3) {
  var label = _ref3.label,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/React.createElement(Button, _extends({
    variant: props.variant || 'default',
    label: label,
    iconAfter: /*#__PURE__*/React.createElement(ExternalLinkIcon, null)
  }, props));
}