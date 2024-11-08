import React, { useState } from 'react'
import { TextInput } from '../../../elements/input'
const deleteKeyCodes = [8, 46]

function InputNumber({
  initialValue,
  onChangeCallback,
  step = 1,
  minValue = null,
  maxValue = null,
  maxLength = 100,
  allowFloats = true,
  floatPrecision = 2,
  ...props
}) {


  if (initialValue === undefined || initialValue === null) {
    initialValue = ''
  }

  const initialStateValue = (initialValue ? initialValue.toString() : '')
  const [value, setValue] = useState(initialStateValue)

  const validateInput = (input) => {
    let currentValueFloat = parseFloat(input)
    if (allowFloats) {
      currentValueFloat = currentValueFloat.toFixed(floatPrecision)
    }else{
      currentValueFloat = parseInt(Math.round(input));
    }
    if (maxLength) {
      let stringFloatValue = String(currentValueFloat);
      currentValueFloat = parseFloat(stringFloatValue.slice(0, maxLength));
    }
    if(maxValue){
      currentValueFloat = Math.min(currentValueFloat, maxValue);
    }
    if(minValue){
      currentValueFloat = Math.max(currentValueFloat, minValue);
    }
    return currentValueFloat
  }

  const handleInput = event => {
    setValue(event.target.value)
  }

  const handleChange = event => {
      let value = event.target.value
      if(value){
        value = validateInput(value)
      }
      setValue(value)
      onChangeCallback(value)
  }

  const handleBlur = event => {
      let value = validateInput(event.target.value)
      setValue(value)
      onChangeCallback(value)
  }

  return (
    <TextInput
      type="number"
      step={step}
      min={minValue}
      max={maxValue}
      onInput={handleInput}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  )
}
export default InputNumber
