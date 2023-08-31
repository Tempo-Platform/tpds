import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { PTiny } from '../../elements/typography'
import Tag from '../tag'

const getCurrentInputValue = (options, selectedIndexes, labelProp) => {
  if (!selectedIndexes || selectedIndexes.length === 0) return []
  return options.filter((option, index) => selectedIndexes.includes(index))
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
  selectedIndexes,
  handleSelectionUpdate,
  idProp,
  excludeIndexes = [],
  labelProp = 'value',
  placeholder = 'Select',
  tagVariant = 'primary',
}) => {
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)
  const optionsWithoutExcludedIndexes = options.filter(
    (option, index) => !excludeIndexes.includes(index),
  )
  const [displayValue, setDisplayValue] = useState(
    getCurrentInputValue(options, selectedIndexes, labelProp),
  )
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndexes, labelProp)
    const isDifferent = JSON.stringify(currentlyExpectedInputValue) !== JSON.stringify(displayValue)
    if (isDifferent) {
      setDisplayValue(currentlyExpectedInputValue)
    }
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [
    wrapperRef,
    selectedIndexes,
    handleSelectionUpdate,
    labelProp,
    options,
    idProp,
    excludeIndexes,
    placeholder,
    inputValue,
    displayValue,
  ])

  const optionsThatMatchInputValue = optionsWithoutExcludedIndexes.filter(option => {
    const optionValue = labelProp ? option[labelProp] : option
    return optionValue.toLowerCase().includes(inputValue.toLowerCase())
  })

  const inputValueToDisplay = isOpen ? inputValue : ''
  const isSelected = option => {
    if (!selectedIndexes || selectedIndexes.length === 0) return false
    const optionIndex = getOptionIndexFromAllOptions(options, option, idProp)
    return selectedIndexes.includes(optionIndex)
  }
  const removeSelectedItem = item => {
    const itemIndex = getOptionIndexFromAllOptions(options, item, idProp)
    const updatedSelection = selectedIndexes.filter(item => item !== itemIndex)
    handleSelectionUpdate(updatedSelection)
  }
  const addSelectedItem = item => {
    const itemIndex = getOptionIndexFromAllOptions(options, item, idProp)

    const updatedSelectionArray = [...selectedIndexes]

    updatedSelectionArray.push(itemIndex)
    handleSelectionUpdate(updatedSelectionArray)
  }

  const optionsThatAreStillNotSelected = optionsThatMatchInputValue.filter(
    option => !isSelected(option),
  )

  return (
    <div className="w-full relative" ref={wrapperRef} onClick={() => inputRef.current.focus()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={clsx(
          'cursor-pointer',
          'w-4 h-4 absolute right-2 transform top-[10px] text-primary',
          isOpen && 'rotate-180',
        )}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      <div
        className={clsx(
          'flex flex-row flex-wrap gap-2 items-center justify-between',
          'w-full',
          'px-2.5 py-1 rounded focus:outline-none',
          'font-normal',
          'bg-grey-light-scale-200 text-primary border-transparent dark:bg-grey-dark-scale-400',
          'border-2 focus:border-blue',
          'cursor-pointer',
          'select-none',
          'transition duration-100',
          isOpen && 'border-blue',
        )}
      >
        <div className="flex gap-2 flex-wrap">
          {displayValue &&
            displayValue.map((item, index) => (
              <Tag
                className="inline-flex"
                variant={tagVariant}
                key={index}
                label={item[labelProp] || item}
                showCloseIcon={true}
                noBorder={true}
                addHoverEffect={true}
                onClick={() => {
                  removeSelectedItem(item)
                }}
              />
            ))}
          <input
            ref={inputRef}
            className={clsx(
              'inline-flex',
              'bg-transparent',
              'font-normal',
              'w-auto',
              'p-0',
              'mr-auto',
              '!outline-none',
              '!border-none',
            )}
            type="text"
            placeholder={placeholder}
            value={inputValueToDisplay}
            onChange={e => setInputValue(e.target.value)}
            onFocus={() => {
              setInputValue('')
              setIsOpen(true)
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="w-full flex flex-col space-y-1 items-start text-start p-2 rounded bg-window border-2 border-window z-50 absolute top-[100%] left-0 max-h-40 overflow-auto">
          {optionsThatAreStillNotSelected.map((option, index) => (
            <div
              key={labelProp ? option[labelProp] : option}
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                addSelectedItem(option)
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
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Select
