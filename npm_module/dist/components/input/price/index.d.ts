import React from 'react';
declare function InputPrice({ initialValue, currencySymbol, onChangeCallback, }: {
    initialValue?: string;
    currencySymbol?: string;
    onChangeCallback?: (value: string) => void;
}): React.JSX.Element | null;
export default InputPrice;
