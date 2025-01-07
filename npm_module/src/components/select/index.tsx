import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { TextInput, baseInputStyles } from '../../elements/input'
import { PTiny, PNano } from '../../elements/typography'
import { Cross } from '../../assets/svgs/tiny'
import { twMerge } from 'tailwind-merge'

const getCurrentInputValue = (options: any[], selectedIndex: number, labelProp?: string): string => {
  if (!selectedIndex && selectedIndex !== 0) return ''
  if (!options[selectedIndex]) return ''
  return labelProp ? options[selectedIndex][labelProp] : options[selectedIndex]
}

const Select = ({
  options,
  handleIndexSelection,
  selectedIndex = -1,
  excludeIndexes = [],
  noPermanentSelection = false,
  enableClear = false,
  labelProp,
  placeholder = 'Select',
  isInvalid = false,
  forceLightMode = false,
  useKeyboard = false,
  className,
}: {
  options: any[]
  handleIndexSelection: (index: number) => void
  selectedIndex?: number
  excludeIndexes?: number[]
  noPermanentSelection?: boolean
  enableClear?: boolean
  labelProp?: string
  placeholder?: string
  isInvalid?: boolean
  forceLightMode?: boolean
  useKeyboard?: boolean
  className?: string
}) => {
  const wrapperRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  if (labelProp && !options[0][labelProp]) {
    throw new Error('TPDS Select: labelProp was passed but is missing in the options')
  }

  const optionsCopy = [...options]
  
  const optionsWithoutExcludedIndexes = options.filter((option, index) => !excludeIndexes.includes(index))

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        const currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndex, labelProp)
        if (useKeyboard) {
          setInputValue(currentlyExpectedInputValue)
        }
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

  const drawerStyles = clsx(
    '!w-full flex flex-col space-y-1 items-start text-left',
    'p-1 lg:p-2 rounded bg-window border-2 border-window shadow-md',
    'z-50 absolute top-[100%] left-0 max-h-40 overflow-auto',
    !forceLightMode && 'dark:shadow-none',
  )

  const optionIsSelected = (option: any) => {
    if (selectedIndex === -1) return false
    if (labelProp) {
      return option[labelProp] === optionsCopy[selectedIndex][labelProp]
    }
    return option === optionsCopy[selectedIndex]
  }

  const getOptionCopyIndex = (option: any) => {
    if (labelProp) {
      return optionsCopy.findIndex(o => o[labelProp] === option[labelProp])
    }
    return optionsCopy.findIndex(o => o === option)
  }

  return (
    <div className={clsx('flex w-full relative text-left', className)} ref={wrapperRef}>
      <div
        className='w-full shrink-0 grow-0'
        onClick={e => {
          setIsOpen(true)
        }}
      >
        <TextInput
          forceLightMode={forceLightMode}
          placeholder={placeholder}
          value={inputValueToDisplay}
          onChange={e => setInputValue(e.target.value)}
          className={clsx(
            'w-full shrink-0 grow-0',
            baseInputStyles,
            isInvalid && forceLightMode && '!border-grey-light-scale-600',
            isInvalid && !forceLightMode && '!border-grey-light-scale-600 dark:!border-grey-dark-scale-300',
            !isOpen && 'cursor-pointer',
            isOpen && '!border-blue',
            !useKeyboard && 'pointer-events-none',
          )}
          onFocus={() => {
            setInputValue('')
          }}
        />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={clsx(
          'w-5 h-5 absolute right-3 transform top-[10px] pointer-events-none text-[#7e909c] shrink-0 grow-0',
          isOpen && 'rotate-180',
        )}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
      </svg>
      {enableClear && selectedIndex > -1 ? (
        <Cross
          onClick={() => handleIndexSelection(-1)}
          className='absolute top-[11px] right-[60px] cursor-pointer text-[#7e909c] shrink-0 grow-0'
        />
      ) : null}

      {isOpen && (
        <div className={drawerStyles}>
          {optionsThatMatchInputValue.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                // handleIndexSelection(getOptionIndexFromAllOptions(options, option, ))
                handleIndexSelection(getOptionCopyIndex(option))
                setIsOpen(false)
              }}
              className={twMerge(
                clsx(
                  'p-2 m-0',
                  'text-start font-medium',
                  'text-xs xl:text-sm',
                  '!outline-none',
                  'w-full select-none cursor-pointer text-center',
                  'bg-window rounded',
                  forceLightMode && 'hover:bg-grey-light-scale-300',
                  !forceLightMode && 'hover:bg-grey-light-scale-300 hover:dark:bg-grey-dark-scale-600',
                  optionIsSelected(option) && forceLightMode && '!bg-grey-light-scale-300',
                  optionIsSelected(option) && !forceLightMode && '!bg-grey-light-scale-300 dark:!bg-grey-dark-scale-600',
                ),
              )}
            >
              <PTiny
                forceLightMode={forceLightMode}
                className={clsx(
                  'text-primary text-left !text-[14px] !leading-tight',
                  optionIsSelected(option) && forceLightMode && '!text-black',
                  optionIsSelected(option) && !forceLightMode && '!text-black dark:!text-white',
                )}
              >
                {labelProp ? option[labelProp] : option}
              </PTiny>
              {option.subLabel && (
                <PNano
                  forceLightMode={forceLightMode}
                  className={clsx(
                    'mt-1 text-secondary text-left !text-[13px] !leading-tight',
                    optionIsSelected(option) && forceLightMode && '!text-grey-light-scale-800',
                    optionIsSelected(option) &&
                      !forceLightMode &&
                      '!text-grey-light-scale-800 dark:!text-grey-light-scale-600',
                  )}
                >
                  {option.subLabel}
                </PNano>
              )}
            </div>
          ))}
          {optionsThatMatchInputValue.length === 0 && (
            <PTiny forceLightMode={forceLightMode} className={clsx('text-secondary text-left select-none')}>
              No matches
            </PTiny>
          )}
        </div>
      )}
    </div>
  )
}
export default Select
