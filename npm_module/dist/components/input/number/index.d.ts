import React from 'react';
declare function InputNumber({ initialValue, onChangeCallback, step, minValue, maxValue, maxLength, allowFloats, floatPrecision, ...props }: {
    initialValue?: string;
    onChangeCallback: (value: string) => void;
    step: number;
    minValue?: number | null;
    maxValue?: number | null;
    maxLength?: number;
    allowFloats?: boolean;
    floatPrecision?: number;
}): React.JSX.Element;
export default InputNumber;
