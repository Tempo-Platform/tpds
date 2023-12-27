"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSyntaxHighlighter = require("react-syntax-highlighter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CodeBlock = function CodeBlock(_ref) {
  var code = _ref.code;
  return /*#__PURE__*/_react["default"].createElement(_reactSyntaxHighlighter.Prism, {
    language: "jsx",
    useInlineStyles: false,
    showLineNumbers: true
  }, code);
};
var _default = CodeBlock;
exports["default"] = _default;