import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { PTiny } from '../../elements/typography'

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
  tagVariant = 'default',
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

  const tagRootClass = clsx(
    'text-grey-dark-scale-200 dark:text-grey-light-scale-400',
    'inline-flex shadow bg-white dark:bg-grey-dark-scale-200 rounded py-0.5 px-1.5',
    'h-[24px] inline-flex rounded py-0.5 px-1.5 select-none justify-center items-center align-center gap-1',
    'inline-flex rounded py-0.5 px-1.5 select-none justify-center align-center gap-1',
    'select-none justify-center items-center align-center gap-1',
    `hover:text-grey-dark-scale-900 dark:hover:text-white`,
    `hover:bg-grey-light-scale-50 dark:hover:bg-grey-dark-scale-300`,
  )
  const tagClass = clsx('text-[11px] font-bold whitespace-nowrap !text-inherit m-0')

  return (
    <div
      className={clsx('w-full relative', !isOpen && 'cursor-pointer')}
      ref={wrapperRef}
      onClick={() => inputRef.current.focus()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={clsx(
          'pointer-events-none',
          'w-4 h-4 absolute right-2 transform top-[9px] text-[#7e909c]',
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
          'bg-transparent text-primary border-transparent',
          'border-2 border-input focus:border-blue',
          'cursor-pointer',
          'select-none',
          'transition duration-100',
          isOpen && 'border-blue',
        )}
      >
        <div className="flex gap-2 flex-wrap">
          {displayValue &&
            displayValue.map((item, index) => (
              <div
                key={index}
                className={tagRootClass}
                onClick={() => {
                  removeSelectedItem(item)
                }}
              >
                <p className={tagClass} style={{ lineHeight: 'normal' }}>
                  {item[labelProp] || item}
                </p>
                <XIcon className={tagClass} />
              </div>
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
              '!text-secondary',
              !isOpen && 'cursor-pointer',
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

function XIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={clsx('w-[14px] h-[14px]', className)}
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      ></path>
    </svg>
  )
}
