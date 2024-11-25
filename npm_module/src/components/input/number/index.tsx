import React, { useState } from 'react'
import { TextInput } from '../../../elements/input'

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
}: {
  initialValue?: string
  onChangeCallback: (value: string) => void
  step: number
  minValue?: number | null
  maxValue?: number | null
  maxLength?: number
  allowFloats?: boolean
  floatPrecision?: number
}) {
  if (initialValue === undefined || initialValue === null) {
    initialValue = ''
  }

  const initialStateValue = initialValue ? initialValue.toString() : ''
  const [value, setValue] = useState(initialStateValue)

  const validateInput = (input: string) => {
    let currentValueFloat = parseFloat(input)
    if (allowFloats) {
      currentValueFloat = parseFloat(currentValueFloat.toFixed(floatPrecision))
    } else {
      currentValueFloat = Math.round(parseInt(input))
    }

    if (maxLength) {
      let stringFloatValue = String(currentValueFloat)
      currentValueFloat = parseFloat(stringFloatValue.slice(0, maxLength))
    }
    if (maxValue) {
      currentValueFloat = Math.min(currentValueFloat, maxValue)
    }
    if (minValue) {
      currentValueFloat = Math.max(currentValueFloat, minValue)
    }
    return currentValueFloat
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    if (value) {
      value = validateInput(value).toString()
    }
    setValue(value)
    onChangeCallback(value)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    let value = validateInput(event.target.value).toString()
    setValue(value)
    onChangeCallback(value)
  }

  return (
    <TextInput
      type='number'
      // min={minValue}
      // max={maxValue}
      onInput={handleInput}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  )
}
export default InputNumber
