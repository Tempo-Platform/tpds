import React from 'react';
interface ColorPickerInputProps {
    onChangeHandler: (color: string) => void;
    hexColor: string;
    placeholder?: string;
    swatchSide?: 'left' | 'right';
    omitTextInput?: boolean;
}
declare const ColorPickerInput: (props: ColorPickerInputProps) => React.JSX.Element;
export default ColorPickerInput;
