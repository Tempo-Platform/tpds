import React from 'react';
declare const SelectMulti: ({ options, selectedIndexes, handleSelectionUpdate, idProp, excludeIndexes, isInvalid, labelProp, placeholder, omitSelectedInDropdown, truncateAfterNumItems, className, }: {
    options: any[];
    selectedIndexes: number[];
    handleSelectionUpdate: (indexes: number[]) => void;
    idProp: string;
    excludeIndexes?: number[];
    isInvalid?: boolean;
    labelProp: string;
    placeholder?: string;
    omitSelectedInDropdown?: boolean;
    truncateAfterNumItems?: number;
    className?: string;
}) => React.JSX.Element;
export default SelectMulti;
