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
var _TriangleDown = _interopRequireDefault(require("../../assets/svgs/arrows/TriangleDown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var renderElement = function renderElement(item, column, rowIndex, elementIndex) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    key: "row-".concat(rowIndex, "-element-").concat(elementIndex),
    className: "flex items-center",
    style: {
      justifyContent: getColumnAlign(column.align)
    }
  }, column.render ? column.render(item) : /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
    className: (0, _clsx["default"])('whitespace-nowrap text-ellipsis overflow-hidden', column.addClass)
  }, item[column.propName]));
};
var runSort = function runSort(array, column, sortDirection) {
  var compare = column.sortFunction ? column.sortFunction : function (a, b) {
    if (a[column.propName] < b[column.propName]) {
      return -1;
    }
    if (a[column.propName] > b[column.propName]) {
      return 1;
    }
    return 0;
  };
  sortDirection === 1 ? array.sort(compare) : array.sort(compare).reverse();
  return array;
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
    _ref$density = _ref.density,
    density = _ref$density === void 0 ? 'high' : _ref$density,
    _ref$rowSpacing = _ref.rowSpacing,
    rowSpacing = _ref$rowSpacing === void 0 ? 'low' : _ref$rowSpacing,
    customRowClass = _ref.customRowClass,
    customHeaderClass = _ref.customHeaderClass;
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sortByColumn = _React$useState2[0],
    setSortByColumn = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(1),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sortDirection = _React$useState4[0],
    setSortDirection = _React$useState4[1];
  var headerClass = (0, _clsx["default"])('grid gap-2', columnVariants[columns.length], 'mb-1', 'px-4 py-1.5');
  var rowClass = (0, _clsx["default"])('grid gap-4 rounded-[3px]', columnVariants[columns.length], 'border border-window bg-window', 'px-4', density === 'high' && 'py-2', density === 'medium' && 'py-3', density === 'low' && 'py-4', rowClick && 'cursor-pointer hover:border-grey-light-scale-500 dark:hover:border-grey-dark-scale-100', rowSpacing === 'none' && '!border-b-0 last:!border-b', customRowClass);
  var rowsContainerClass = (0, _clsx["default"])('flex flex-col mb-4', rowSpacing === 'low' && 'gap-y-1', rowSpacing === 'medium' && 'gap-y-2', rowSpacing === 'high' && 'gap-y-3', rowSpacing === 'none' && 'gap-y-0');
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
  if (sortByColumn) {
    data = runSort(data, sortByColumn, sortDirection);
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: headerClass
  }, columns.map(function (column, columnIndex) {
    return /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
      isMedium: true,
      key: "column-".concat(columnIndex),
      className: (0, _clsx["default"])('select-none whitespace-nowrap text-ellipsis overflow-hidden flex gap-x-2 items-center', column.enableSort && 'cursor-pointer', customHeaderClass),
      style: {
        textAlign: getColumnAlign(column.align)
      },
      onClick: column.enableSort ? function () {
        if (!sortByColumn) {
          setSortDirection(1);
          setSortByColumn(column);
        } else {
          if (sortByColumn.propName === column.propName && sortDirection === 1) {
            setSortDirection(-1);
          } else if (sortByColumn.propName === column.propName && sortDirection === -1) {
            setSortDirection(1);
            setSortByColumn(null);
          } else {
            setSortDirection(1);
            setSortByColumn(column);
          }
        }
      } : null
    }, column.label, ' ', sortByColumn && sortByColumn.propName === column.propName && /*#__PURE__*/_react["default"].createElement(_TriangleDown["default"], {
      className: "inline-block ml-1",
      style: {
        transform: sortDirection === 1 ? '' : 'rotate(180deg)'
      }
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: rowsContainerClass
  }, data.map(function (item, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "row-".concat(rowIndex),
      className: rowClass,
      onClick: rowClick ? function () {
        return rowClick(item);
      } : null
    }, columns.map(function (column, elementIndex) {
      return renderElement(item, column, rowIndex, elementIndex);
    }));
  })), showPagination && /*#__PURE__*/_react["default"].createElement("div", {
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