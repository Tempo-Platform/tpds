"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _buttons = require("../../elements/buttons");
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getColumnAlign = function getColumnAlign(alignType) {
  switch (alignType) {
    case 'center':
      return 'center';
    case 'right':
      return 'end';
    default:
      return 'start';
  }
};
var columnVariants = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10'
};
var renderItem = function renderItem(item, column, itemIndex, columnIndex, rowKey) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    key: rowKey ? "".concat(item[rowKey], "-").concat(columnIndex) : "".concat(itemIndex, "-").concat(columnIndex),
    className: "flex items-center",
    style: {
      justifyContent: getColumnAlign(column.align)
    }
  }, column.render ? column.render(item, rowKey ? item[rowKey] : itemIndex) : /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
    className: (0, _clsx["default"])('whitespace-nowrap text-ellipsis overflow-hidden', column.addClass)
  }, item[column.key]));
};
function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    _ref$pagination = _ref.pagination,
    pagination = _ref$pagination === void 0 ? true : _ref$pagination,
    _ref$rowsPerPage = _ref.rowsPerPage,
    rowsPerPage = _ref$rowsPerPage === void 0 ? 10 : _ref$rowsPerPage,
    _ref$page = _ref.page,
    page = _ref$page === void 0 ? 1 : _ref$page,
    _ref$router = _ref.router,
    router = _ref$router === void 0 ? null : _ref$router,
    _ref$rowClick = _ref.rowClick,
    rowClick = _ref$rowClick === void 0 ? null : _ref$rowClick,
    _ref$rowKey = _ref.rowKey,
    rowKey = _ref$rowKey === void 0 ? null : _ref$rowKey;
  var headerClass = (0, _clsx["default"])('grid gap-2', columnVariants[columns.length], 'mb-1', 'px-4 py-1.5');
  var rowClass = (0, _clsx["default"])('grid gap-4 mb-2 rounded-[3px]', columnVariants[columns.length], 'border border-window bg-window', rowClick && 'cursor-pointer hover:border-grey-light-scale-500 dark:hover:border-grey-dark-scale-100', 'px-4 py-2');
  var numPages = Math.ceil(data.length / rowsPerPage);
  if (pagination && !router) {
    throw new Error('TPDS: Table component requires router prop when pagination is enabled, to "push" new page to router.');
  }
  var showPagination = pagination && data.length > rowsPerPage;
  if (showPagination) {
    var startIndex = (page - 1) * rowsPerPage;
    var endIndex = startIndex + rowsPerPage;
    data = data.slice(startIndex, endIndex);
  }
  var handleBackToFirstPage = function handleBackToFirstPage() {
    router.push(window.location.pathname);
  };
  var handleGoToLastPage = function handleGoToLastPage() {
    router.push("".concat(window.location.pathname, "?page=").concat(numPages));
  };
  var handleClickToNextPage = function handleClickToNextPage() {
    router.push("".concat(window.location.pathname, "?page=").concat(page + 1));
  };
  var handleClickToPreviousPage = function handleClickToPreviousPage() {
    router.push("".concat(window.location.pathname, "?page=").concat(page - 1));
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: headerClass
  }, columns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
      isBold: true,
      key: column.key,
      className: (0, _clsx["default"])('whitespace-nowrap text-ellipsis overflow-hidden'),
      style: {
        textAlign: getColumnAlign(column.align)
      }
    }, column.label);
  })), data.map(function (item, itemIndex) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: rowKey === null ? itemIndex : item[rowKey],
      className: (0, _clsx["default"])(rowClass),
      onClick: rowClick ? function () {
        return rowClick(item, rowKey ? item[rowKey] : itemIndex);
      } : null
    }, columns.map(function (column, columnIndex) {
      return renderItem(item, column, itemIndex, columnIndex, rowKey, rowClick);
    }));
  }), showPagination && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end gap-1"
  }, /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    className: "!p-1 text-primary",
    variant: "secondary",
    isDisabled: page === 1,
    size: "small",
    onClick: handleBackToFirstPage
  }, /*#__PURE__*/_react["default"].createElement(BeginningIcon, null)), /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    className: "!p-1 text-primary",
    variant: "secondary",
    isDisabled: page === 1,
    size: "small",
    onClick: handleClickToPreviousPage
  }, /*#__PURE__*/_react["default"].createElement(FirstIcon, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border p-2 bg-white border-grey-light-scale-400 dark:bg-grey-dark-scale-500 dark:border-grey-dark-scale-200"
  }, /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
    isMedium: true,
    className: "uppercase whitespace-nowrap text-ellipsis overflow-hidden leading-none select-none"
  }, page, " ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "opacity-50"
  }, "/ ", numPages))), /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    className: "!p-1 text-primary",
    variant: "secondary",
    isDisabled: page === numPages,
    size: "small",
    onClick: handleClickToNextPage
  }, /*#__PURE__*/_react["default"].createElement(NextIcon, null)), /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    className: "!p-1 text-primary",
    variant: "secondary",
    isDisabled: page === numPages,
    size: "small",
    onClick: handleGoToLastPage
  }, /*#__PURE__*/_react["default"].createElement(LastIcon, null))));
}
var _default = Table;
exports["default"] = _default;
function BeginningIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M11.725 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L11.3 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L8.35 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H8.35l3.875 3.9c.125.1.125.3 0 .425l-.5.475zM4.9 4.8c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    fillOpacity: "0.01",
    d: "M0 0H20V20H0z"
  }));
}
function FirstIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M10.125 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L9.7 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L6.75 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H6.75l3.875 3.9c.125.1.125.3 0 .425l-.5.475z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    fillOpacity: "0.01",
    d: "M0 0H20V20H0z"
  }));
}
function NextIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "20",
    fill: "none",
    viewBox: "0 0 19 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M9.275 4.575c.1-.125.3-.125.425 0L14.925 9.8c.125.125.125.3 0 .425L9.7 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H4.1c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    fillOpacity: "0.01",
    d: "M0 0H19V20H0z"
  }));
}
function LastIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M8.075 4.575c.1-.125.3-.125.425 0L13.725 9.8c.125.125.125.3 0 .425L8.5 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H2.9c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475zM14.9 15.225c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.797c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    fillOpacity: "0.01",
    d: "M0 0H20V20H0z"
  }));
}