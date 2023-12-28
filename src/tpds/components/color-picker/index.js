import React, { useState, useRef, useEffect } from 'react'
import { TextInput } from '../../elements/input'
import { HexAlphaColorPicker } from 'react-colorful'
import clsx from 'clsx'

const classColorSquare = clsx(`w-[40px] h-[33px] rounded`, `border-2 border-input`)

const ColorPickerInput = props => {
  const { onChangeHandler, hexColor } = props

  const wrapperRef = useRef(null)

  const [colorPickerActive, setColorPickerActive] = useState(false)
  const handlePickerColorChange = color => {
    onChangeHandler(color)
  }
  const onInputChangeHandler = e => {
    onChangeHandler(e.target.value)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setColorPickerActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <div className="tpds-color-picker flex w-[100%] items-center gap-x-1 relative" ref={wrapperRef}>
      <div
        className={classColorSquare}
        style={{ backgroundColor: hexColor }}
        onClick={() => setColorPickerActive(!colorPickerActive)}
      />
      <TextInput outlineStyle placeholder="Hex" value={hexColor} onChange={onInputChangeHandler} />
      {colorPickerActive && (
        <div className="absolute top-[35px] left-0 z-10">
          <HexAlphaColorPicker color={hexColor} onChange={handlePickerColorChange} />
        </div>
      )}
    </div>
  )
}
export default ColorPickerInput
