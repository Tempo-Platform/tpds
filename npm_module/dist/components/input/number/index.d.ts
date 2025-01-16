import React from 'react';
declare function InputNumber({ initialValue, onChangeCallback, minValue, maxValue, maxLength, allowFloats, floatPrecision, className, placeholder, isInvalid, step, ...props }: {
    initialValue?: number | string;
    onChangeCallback: (value: string) => void;
    minValue?: number | null;
    maxValue?: number | null;
    maxLength?: number;
    allowFloats?: boolean;
    floatPrecision?: number;
    isInvalid?: boolean;
    placeholder?: string;
    className?: string;
    step?: number;
}): React.JSX.Element;
export default InputNumber;
