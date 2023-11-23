import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { TextInput } from '../../elements/input'
import { PTiny, PNano } from '../../elements/typography'

const getCurrentInputValue = (options, selectedIndex, labelProp) => {
  if (!selectedIndex && selectedIndex !== 0) return ''
  if (!options[selectedIndex]) return ''
  return labelProp ? options[selectedIndex][labelProp] : options[selectedIndex]
}

const getOptionIndexFromAllOptions = (options, option, idProp) => {
  const id = idProp ? option[idProp] : option
  return options.findIndex(o => {
    const idToCompare = idProp ? o[idProp] : o
    return idToCompare === id
  })
}

const Select = ({
  options,
  selectedIndex,
  handleIndexSelection,
  idProp,
  excludeIndexes = [],
  noPermanentSelection = false,
  labelProp = 'value',
  placeholder = 'Select',
}) => {
  const wrapperRef = useRef(null)
  const optionsWithoutExcludedIndexes = options.filter(
    (option, index) => !excludeIndexes.includes(index),
  )
  const [inputValue, setInputValue] = useState('')
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
  }, [
    wrapperRef,
    selectedIndex,
    handleIndexSelection,
    labelProp,
    options,
    idProp,
    excludeIndexes,
    noPermanentSelection,
    placeholder,
  ])

  const optionsThatMatchInputValue = optionsWithoutExcludedIndexes.filter(option => {
    const optionValue = labelProp ? option[labelProp] : option
    return optionValue.toLowerCase().includes(inputValue.toLowerCase())
  })

  const inputValueToDisplay = isOpen
    ? inputValue
    : noPermanentSelection
    ? ''
    : getCurrentInputValue(options, selectedIndex, labelProp)

  const isSelected = option => {
    if (!idProp && !labelProp) return false
    const optionIndex = getOptionIndexFromAllOptions(options, option, idProp)
    return optionIndex === selectedIndex
  }

  return (
    <div className=" flex w-full relative text-left" ref={wrapperRef}>
      <TextInput
        placeholder={placeholder}
        value={inputValueToDisplay}
        onChange={e => setInputValue(e.target.value)}
        className={clsx(
          'pr-8 text-ellipsis !text-secondary !bg-transparent !border-[#ededed] dark:!border-[#384147]',
          !isOpen && 'cursor-pointer',
          isOpen && '!border-blue',
        )}
        onFocus={() => {
          setInputValue('')
          setIsOpen(true)
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={clsx(
          'w-4 h-4 absolute right-3 transform top-[10px] pointer-events-none text-[#7e909c]',
          isOpen && 'rotate-180',
        )}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

      {isOpen && (
        <div className="w-full flex flex-col space-y-1 items-start text-left p-2 rounded bg-window border-2 border-window z-50 absolute top-[100%] left-0 max-h-40 overflow-auto">
          {optionsThatMatchInputValue.map((option, index) => (
            <div
              key={labelProp ? option[labelProp] : option}
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
                `hover:bg-input-hover`,
                isSelected(option) && `!bg-blue-scale-500`,
              )}
            >
              <PTiny
                className={clsx(
                  'text-primary text-left',
                  isSelected(option) && `!text-white dark:!text-black`,
                )}
              >
                {labelProp ? option[labelProp] : option}
              </PTiny>
              {option.subLabel && (
                <PNano
                  className={clsx(
                    'mt-1 text-tertiary text-left',
                    isSelected(option) && `!text-white dark:!text-black`,
                  )}
                >
                  {option.subLabel}
                </PNano>
              )}
            </div>
          ))}
          {optionsThatMatchInputValue.length === 0 && (
            <PTiny className={clsx('text-secondary text-left select-none')}>No matches</PTiny>
          )}
        </div>
      )}
    </div>
  )
}
export default Select
