import React, { useState } from 'react'
import { TextInput } from '../../../elements/input'
const deleteKeyCodes = [8, 46]

const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
}

function InputNumber({
  initialValue,
  onChangeCallback,
  maxValue = 999999999,
  maxLength = 100,
  allowFloats = true,
  floatPrecision = 2,
  ...props
}) {
  if (!initialValue) {
    initialValue = ''
  }

  const limitCharacters = value => {
    if (!allowFloats) {
      return value.replace(/[^0-9]/g, '')
    }
    return value.replace(/[^0-9.]/g, '')
  }

  const handleKeyDown = e => {
    // always allow delete
    if (deleteKeyCodes.indexOf(e.keyCode) === -1) {
      // prevent 2 full stops
      if (e.keyCode === 190 && e.target.value.indexOf('.') !== -1) {
        return e.preventDefault()
      }
      // enforce max length
      if (maxLength && e.target.value.length >= maxLength) {
        return e.preventDefault()
      }
      // get current numeric value
      const currentValueFloat = parseFloat(e.target.value)
      // if current value is already equal to max value, prevent further input
      if (maxValue && currentValueFloat === maxValue) {
        return e.preventDefault()
      }
      // enforce max value
      const futureValueFloat = parseFloat(e.target.value + e.key)
      if (maxValue && futureValueFloat > maxValue) {
        return e.preventDefault()
      }
      const stringFloatValue = String(futureValueFloat)
      if (
        allowFloats &&
        stringFloatValue.indexOf('.') !== -1 &&
        stringFloatValue.split('.')[1].length > floatPrecision
      ) {
        return e.preventDefault()
      }
    }
  }

  const formatValue = value => {
    let newValue = limitCharacters(value)
    return newValue
  }

  const initialStateValue = formatValue(initialValue ? initialValue.toString() : '')

  const [value, setValue] = useState(initialStateValue)

  const handleChange = event => {
    setValue(formatValue(event.target.value))
    if (onChangeCallback) {
      let value = limitCharacters(event.target.value)
      value = parseFloat(value)
      if (allowFloats) {
        value = round(value, floatPrecision)
      }
      onChangeCallback(value)
    }
  }

  return (
    <TextInput
      type="text"
      onKeyDown={handleKeyDown}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}
export default InputNumber
