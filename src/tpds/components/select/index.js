import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { TextInput } from '../../elements/input'
import { PTiny } from '../../elements/typography'

const getCurrentInputValue = (options, selectedIndex, labelProp) => {
  if (!selectedIndex && selectedIndex !== 0) return ''
  return labelProp ? options[selectedIndex][labelProp] : options[selectedIndex]
}

const getOptionIndexFromAllOptions = (options, selectedOption, idProp) => {
  const selectedOptionId = idProp ? selectedOption[idProp] : selectedOption
  return options.findIndex(option => {
    const optionIdToCompare = idProp ? option[idProp] : option
    return optionIdToCompare === selectedOptionId
  })
}

const Select = ({
  options,
  selectedIndex,
  handleIndexSelection,
  idProp,
  labelProp = 'value',
  placeholder = 'Select',
}) => {
  const wrapperRef = useRef(null)

  const initialInputValue = getCurrentInputValue(options, selectedIndex, labelProp)
  const [inputValue, setInputValue] = useState(initialInputValue)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        const currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndex, labelProp)
        setInputValue(currentlyExpectedInputValue)
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef, selectedIndex, labelProp, options, idProp, placeholder])

  const optionsThatMatchInputValue = options.filter(option => {
    const optionValue = labelProp ? option[labelProp] : option
    return optionValue.toLowerCase().includes(inputValue.toLowerCase())
  })

  const inputValueToDisplay = isOpen
    ? inputValue
    : getCurrentInputValue(options, selectedIndex, labelProp)

  return (
    <div className="w-full relative" ref={wrapperRef}>
      <TextInput
        placeholder={placeholder}
        value={inputValueToDisplay}
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => {
          setInputValue('')
          setIsOpen(true)
        }}
      />
      {isOpen && (
        <div className="w-full flex flex-col space-y-1 items-start text-start p-2 rounded bg-window border-2 border-window z-50 absolute top-[100%] left-0 max-h-40 overflow-auto">
          {optionsThatMatchInputValue.map((option, index) => (
            <div
              key={option.value || option.description || option.label || option}
              onClick={() => {
                handleIndexSelection(getOptionIndexFromAllOptions(options, option, idProp))
                setIsOpen(false)
              }}
              className={clsx(
                'p-2 m-0',
                'text-start font-medium',
                'text-xs xl:text-sm',
                '!outline-none',
                `w-full select-none cursor-pointer text-center`,
                `bg-window rounded`,
                `hover:bg-grey-light-scale-200 dark:hover:bg-grey-dark-scale-300`,
                index === selectedIndex && `!bg-blue-scale-500`,
              )}
            >
              <PTiny
                className={clsx(
                  'text-primary',
                  index === selectedIndex && `!text-white dark:!text-black`,
                )}
              >
                {labelProp ? option[labelProp] : option}
              </PTiny>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Select
