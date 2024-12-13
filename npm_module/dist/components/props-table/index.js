'use strict';

var React = require('react');
var elements_typography_index = require('../../elements/typography/index.js');
require('clsx');
require('tailwind-merge');

const lastPVariants = {
    default: 'col-span-4',
    skip1Columns: 'col-span-6',
    skip2Columns: 'col-span-8',
    skip3Columns: 'col-span-10',
};
const getLastPVariant = (skipColumn2, skipColumn3, skipColumn4) => {
    let skipColumnsNum = 0;
    if (skipColumn2)
        skipColumnsNum++;
    if (skipColumn3)
        skipColumnsNum++;
    if (skipColumn4)
        skipColumnsNum++;
    if (skipColumnsNum === 0)
        return 'default';
    return `skip${skipColumnsNum}Columns`;
};
function PropsTable({ items, col1Name = 'Prop Name', col2Name = 'Type', col3Name = 'Default', col4Name = 'Required', col5Name = 'Description', param1Name = 'propName', param2Name = 'type', param3Name = 'default', param4Name = 'required', param5Name = 'description', skipColumn2 = false, skipColumn3 = false, skipColumn4 = false, }) {
    const lastPClass = lastPVariants[getLastPVariant(skipColumn2, skipColumn3, skipColumn4)];
    return (/*#__PURE__*/React.createElement("div", null, "\n      ", /*#__PURE__*/React.createElement("span", { className: 'grid grid-cols-12 gap-4 pb-2 mb-8 border-b border-grey-light-scale-500 dark:border-grey-light-scale-900' }, "\n        ", /*#__PURE__*/React.createElement(elements_typography_index.P, { isBold: true, className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, "\n          ", col1Name, "\n        "), "\n        ", !skipColumn2 && (/*#__PURE__*/React.createElement(elements_typography_index.P, { isBold: true, className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, "\n            ", col2Name, "\n          ")), "\n        ", !skipColumn3 && (/*#__PURE__*/React.createElement(elements_typography_index.P, { isBold: true, className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, "\n            ", col3Name, "\n          ")), "\n        ", !skipColumn4 && (/*#__PURE__*/React.createElement(elements_typography_index.P, { isBold: true, className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, "\n            ", col4Name, "\n          ")), "\n        ", /*#__PURE__*/React.createElement(elements_typography_index.P, { isBold: true, className: lastPClass }, "\n          ", col5Name, "\n        "), "\n      "), "\n      ", items === null || items === void 0 ? void 0 : items.map((item, index) => (/*#__PURE__*/React.createElement("span", { className: 'grid grid-cols-12 gap-4 mb-4', key: index }, "\n          ", /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { className: 'col-span-2 break-words', isBold: true }, "\n            ", item[param1Name], "\n          "), "\n          ", !skipColumn2 && (/*#__PURE__*/React.createElement(elements_typography_index.PSmall, { className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, item[param2Name])), "\n          ", !skipColumn3 && (/*#__PURE__*/React.createElement(elements_typography_index.PSmall, { className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, item[param3Name])), "\n          ", !skipColumn4 && (/*#__PURE__*/React.createElement(elements_typography_index.PSmall, { className: 'whitespace-nowrap text-ellipsis overflow-hidden col-span-2' }, item[param4Name])), "\n          ", /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { className: lastPClass }, item[param5Name]), "\n        "))), "\n    "));
}

module.exports = PropsTable;
