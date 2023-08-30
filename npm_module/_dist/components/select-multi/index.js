"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _typography = require("../../elements/typography");
var _tag = _interopRequireDefault(require("../tag"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getCurrentInputValue = function getCurrentInputValue(options, selectedIndexes, labelProp) {
  if (!selectedIndexes || selectedIndexes.length === 0) return [];
  return options.filter(function (option, index) {
    return selectedIndexes.includes(index);
  });
};
var getOptionIndexFromAllOptions = function getOptionIndexFromAllOptions(options, option, idProp) {
  var id = idProp ? option[idProp] : option;
  return options.findIndex(function (o) {
    var idToCompare = idProp ? o[idProp] : o;
    return idToCompare === id;
  });
};
var Select = function Select(_ref) {
  var options = _ref.options,
    selectedIndexes = _ref.selectedIndexes,
    handleSelectionUpdate = _ref.handleSelectionUpdate,
    idProp = _ref.idProp,
    _ref$excludeIndexes = _ref.excludeIndexes,
    excludeIndexes = _ref$excludeIndexes === void 0 ? [] : _ref$excludeIndexes,
    _ref$labelProp = _ref.labelProp,
    labelProp = _ref$labelProp === void 0 ? 'value' : _ref$labelProp,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Select' : _ref$placeholder,
    _ref$tagVariant = _ref.tagVariant,
    tagVariant = _ref$tagVariant === void 0 ? 'primary' : _ref$tagVariant;
  var wrapperRef = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null);
  var optionsWithoutExcludedIndexes = options.filter(function (option, index) {
    return !excludeIndexes.includes(index);
  });
  var _useState = (0, _react.useState)(getCurrentInputValue(options, selectedIndexes, labelProp)),
    _useState2 = _slicedToArray(_useState, 2),
    displayValue = _useState2[0],
    setDisplayValue = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpen = _useState6[0],
    setIsOpen = _useState6[1];
  (0, _react.useEffect)(function () {
    if (selectedIndexes && selectedIndexes.length && selectedIndexes.length > 0) {
      var currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndexes, labelProp);
      var isDifferent = JSON.stringify(currentlyExpectedInputValue) !== JSON.stringify(displayValue);
      if (isDifferent) {
        setDisplayValue(currentlyExpectedInputValue);
      }
    }
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, selectedIndexes, handleSelectionUpdate, labelProp, options, idProp, excludeIndexes, placeholder, inputValue, displayValue]);
  var optionsThatMatchInputValue = optionsWithoutExcludedIndexes.filter(function (option) {
    var optionValue = labelProp ? option[labelProp] : option;
    return optionValue.toLowerCase().includes(inputValue.toLowerCase());
  });
  var inputValueToDisplay = isOpen ? inputValue : '';
  var isSelected = function isSelected(option) {
    if (!selectedIndexes || selectedIndexes.length === 0) return false;
    var optionIndex = getOptionIndexFromAllOptions(options, option, idProp);
    return selectedIndexes.includes(optionIndex);
  };
  var removeSelectedItem = function removeSelectedItem(item) {
    var itemIndex = getOptionIndexFromAllOptions(options, item, idProp);
    var updatedSelection = selectedIndexes.filter(function (item) {
      return item !== itemIndex;
    });
    handleSelectionUpdate(updatedSelection);
  };
  var addSelectedItem = function addSelectedItem(item) {
    var itemIndex = getOptionIndexFromAllOptions(options, item, idProp);
    var updatedSelectionArray = _toConsumableArray(selectedIndexes);
    updatedSelectionArray.push(itemIndex);
    handleSelectionUpdate(updatedSelectionArray);
  };
  var optionsThatAreStillNotSelected = optionsThatMatchInputValue.filter(function (option) {
    return !isSelected(option);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full relative",
    ref: wrapperRef,
    onClick: function onClick() {
      return inputRef.current.focus();
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: (0, _clsx["default"])('cursor-pointer', 'w-4 h-4 absolute right-2 transform top-[10px] text-primary', isOpen && 'rotate-180')
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-row flex-wrap gap-2 items-center justify-between', 'w-full', 'px-2.5 py-1 rounded focus:outline-none', 'font-normal', 'bg-grey-light-scale-200 text-primary border-transparent dark:bg-grey-dark-scale-400', 'border-2 focus:border-blue', 'cursor-pointer', 'select-none', 'transition duration-100', isOpen && 'border-blue')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 flex-wrap"
  }, displayValue && displayValue.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_tag["default"], {
      className: "inline-flex",
      variant: tagVariant,
      key: index,
      label: item[labelProp] || item,
      showCloseIcon: true,
      addHoverEffect: true,
      onClick: function onClick() {
        removeSelectedItem(item);
      }
    });
  }), /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    className: (0, _clsx["default"])('inline-flex', 'bg-transparent', 'font-normal', 'w-auto', 'p-0', 'mr-auto', '!outline-none', '!border-none'),
    type: "text",
    placeholder: placeholder,
    value: inputValueToDisplay,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onFocus: function onFocus() {
      setInputValue('');
      setIsOpen(true);
    }
  }))), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex flex-col space-y-1 items-start text-start p-2 rounded bg-window border-2 border-window z-50 absolute top-[100%] left-0 max-h-40 overflow-auto"
  }, optionsThatAreStillNotSelected.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: labelProp ? option[labelProp] : option,
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        addSelectedItem(option);
        setIsOpen(false);
      },
      className: (0, _clsx["default"])('p-2 m-0', 'text-start font-medium', 'text-xs xl:text-sm', '!outline-none', "w-full select-none cursor-pointer text-center", "bg-window rounded", "hover:bg-grey-light-scale-200 dark:hover:bg-grey-dark-scale-300", isSelected(option) && "!bg-blue-scale-500")
    }, /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
      className: (0, _clsx["default"])('text-primary text-left', isSelected(option) && "!text-white dark:!text-black")
    }, labelProp ? option[labelProp] : option));
  })));
};
var _default = Select;
exports["default"] = _default;