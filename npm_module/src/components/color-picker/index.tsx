import React, { useState, useRef, useEffect } from 'react'
import { TextInput } from '../../elements/input'
import { HexAlphaColorPicker } from 'react-colorful'
import clsx from 'clsx'

const classColorSquare = clsx(
  'cursor-pointer',
  'w-full max-w-[38px] h-[38px] rounded-[6px] relative',
  'bg-grey-light-scale-400 dark:bg-grey-dark-scale-400',
)
const classColorInnerSquare = clsx('w-[26px] h-[26px] rounded-[3px] absolute top-[6px] left-[6px]')

const classColorPickerWrapper = clsx('tpds-color-picker inline-flex gap-x-1 w-full relative')

interface ColorPickerInputProps {
  onChangeHandler: (color: string) => void
  hexColor: string
  placeholder?: string
  swatchSide?: 'left' | 'right'
  omitTextInput?: boolean
}
const ColorPickerInput = (props: ColorPickerInputProps) => {
  let { onChangeHandler, hexColor, placeholder, swatchSide, omitTextInput } = props

  if (!placeholder) {
    placeholder = 'Hex'
  }
  if (!swatchSide) {
    swatchSide = 'right'
  }

  const wrapperRef = useRef(null)

  const [colorPickerActive, setColorPickerActive] = useState(false)
  const handlePickerColorChange = (color: string) => {
    onChangeHandler(color)
  }
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setColorPickerActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  const swatchJSX = (
    <div className={classColorSquare} onClick={() => setColorPickerActive(!colorPickerActive)}>
      <div className={classColorInnerSquare} style={{ backgroundColor: hexColor }} />
    </div>
  )
  return (
    <div className={classColorPickerWrapper} ref={wrapperRef}>
      {swatchSide === 'left' && swatchJSX}
      {!omitTextInput && <TextInput placeholder={placeholder} value={hexColor} onChange={onInputChangeHandler} />}
      {colorPickerActive && (
        <div className='absolute top-[35px] left-0 z-10'>
          <HexAlphaColorPicker color={hexColor} onChange={handlePickerColorChange} />
        </div>
      )}
      {swatchSide === 'right' && swatchJSX}
    </div>
  )
}
export default ColorPickerInput
