import React from 'react';
declare const RadioGroup: ({ options, handleIndexSelection, selectedIndex, lightOnly, }: {
    options: any[];
    handleIndexSelection?: (index: number) => void;
    selectedIndex: number;
    lightOnly?: boolean;
}) => React.JSX.Element;
export default RadioGroup;
