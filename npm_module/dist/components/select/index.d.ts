import React from 'react';
declare const Select: ({ options, handleIndexSelection, selectedIndex, excludeIndexes, noPermanentSelection, enableClear, labelProp, placeholder, isInvalid, forceLightMode, useKeyboard, className, }: {
    options: any[];
    handleIndexSelection: (index: number) => void;
    selectedIndex?: number;
    excludeIndexes?: number[];
    noPermanentSelection?: boolean;
    enableClear?: boolean;
    labelProp?: string;
    placeholder?: string;
    isInvalid?: boolean;
    forceLightMode?: boolean;
    useKeyboard?: boolean;
    className?: string;
}) => React.JSX.Element;
export default Select;
