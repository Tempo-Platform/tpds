"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSyntaxHighlighter = require("react-syntax-highlighter");
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CodeBlock = function CodeBlock(_ref) {
  var code = _ref.code;
  var codeStyles = (0, _clsx["default"])('rounded-[4px]', 'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900', 'border-2 border-grey-light-scale-300 dark:border-grey-dark-scale-500');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: codeStyles
  }, /*#__PURE__*/_react["default"].createElement(_reactSyntaxHighlighter.Prism, {
    language: "jsx",
    useInlineStyles: false,
    showLineNumbers: true
  }, code));
};
var _default = CodeBlock;
exports["default"] = _default;