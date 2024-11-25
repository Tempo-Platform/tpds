'use strict';

var React = require('react');
var reactSyntaxHighlighter = require('react-syntax-highlighter');
var clsx = require('clsx');

const CodeBlock = ({ code }) => {
    const codeStyles = clsx('rounded-[4px]', 'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900', 'border-2 border-grey-light-scale-300 dark:border-grey-dark-scale-500');
    return (/*#__PURE__*/React.createElement("div", { className: codeStyles }, "\n      ", /*#__PURE__*/React.createElement(reactSyntaxHighlighter.Prism, { language: "jsx", useInlineStyles: false, showLineNumbers: true }, "\n        ", code, "\n      "), "\n    "));
};

module.exports = CodeBlock;
