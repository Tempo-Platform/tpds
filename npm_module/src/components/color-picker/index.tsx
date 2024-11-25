import React, { useState, useRef, useEffect } from 'react'
import { TextInput } from '../../elements/input'
import { HexAlphaColorPicker } from 'react-colorful'
import clsx from 'clsx'

const classColorSquare = clsx(
  'cursor-pointer',
  'w-full max-w-[40px] h-[40px] rounded-[6px] relative',
  'bg-grey-light-scale-400 dark:bg-grey-dark-scale-400',
)
const classColorInnerSquare = clsx('w-[30px] h-[30px] rounded-[3px] absolute top-[5px] left-[5px]')

const ColorPickerInput = (props: { onChangeHandler: (color: string) => void; hexColor: string }) => {
  const { onChangeHandler, hexColor } = props

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

  return (
    <div className="tpds-color-picker inline-flex gap-x-1 w-full relative" ref={wrapperRef}>
      <div className={classColorSquare} onClick={() => setColorPickerActive(!colorPickerActive)}>
        <div className={classColorInnerSquare} style={{ backgroundColor: hexColor }} />
      </div>
      <TextInput placeholder="Hex" value={hexColor} onChange={onInputChangeHandler} />
      {colorPickerActive && (
        <div className="absolute top-[35px] left-0 z-10">
          <HexAlphaColorPicker color={hexColor} onChange={handlePickerColorChange} />
        </div>
      )}
    </div>
  )
}
export default ColorPickerInput
