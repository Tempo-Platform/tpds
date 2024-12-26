import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { PTiny } from '../../elements/typography'
import { Cross } from '../../assets/svgs/tiny'
import { baseInputStyles, colorInputStyles } from '../../elements/input'

const getCurrentInputValue = (options: any[], selectedIndexes: number[]): string[] => {
  if (!selectedIndexes || selectedIndexes.length === 0) return []
  return options.filter((option, index) => selectedIndexes.includes(index))
}

const getOptionIndexFromAllOptions = (options: any[], option: any, idProp: string): number => {
  const id = idProp ? option[idProp] : option

  return options.findIndex(o => {
    const idToCompare = idProp ? o[idProp] : o
    return idToCompare === id
  })
}

const SelectMulti = ({
  options,
  selectedIndexes,
  handleSelectionUpdate,
  idProp,
  excludeIndexes = [],
  isInvalid = false,
  labelProp = 'value',
  placeholder = 'Select',
  omitSelectedInDropdown = true,
  truncateAfterNumItems = -1,
  className = '',
}: {
  options: any[]
  selectedIndexes: number[]
  handleSelectionUpdate: (indexes: number[]) => void
  idProp: string
  excludeIndexes?: number[]
  isInvalid?: boolean
  labelProp: string
  placeholder?: string
  omitSelectedInDropdown?: boolean
  truncateAfterNumItems?: number
  className?: string
}) => {
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)
  const optionsWithoutExcludedIndexes = options.filter((option, index) => !excludeIndexes.includes(index))
  const [displayValue, setDisplayValue] = useState(getCurrentInputValue(options, selectedIndexes))
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndexes)
    const isDifferent = JSON.stringify(currentlyExpectedInputValue) !== JSON.stringify(displayValue)
    if (isDifferent) {
      setDisplayValue(currentlyExpectedInputValue)
    }
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
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
  const isSelected = (option: any): boolean => {
    if (!selectedIndexes || selectedIndexes.length === 0) return false
    const optionIndex = getOptionIndexFromAllOptions(options, option, idProp)
    return selectedIndexes.includes(optionIndex)
  }
  const removeSelectedItem = (item: any) => {
    const itemIndex = getOptionIndexFromAllOptions(options, item, idProp)
    const updatedSelection = selectedIndexes.filter(item => item !== itemIndex)
    handleSelectionUpdate(updatedSelection)
  }
  const clickTruncatedItems = () => {
    const newMaxIndex = truncateAfterNumItems
    const updatedSelection = selectedIndexes.slice(0, newMaxIndex)
    handleSelectionUpdate(updatedSelection)
  }
  const addSelectedItem = (item: any) => {
    const itemIndex = getOptionIndexFromAllOptions(options, item, idProp)
    const updatedSelectionArray = [...selectedIndexes]
    updatedSelectionArray.push(itemIndex)
    handleSelectionUpdate(updatedSelectionArray)
  }

  const optionsThatAreStillNotSelected = optionsThatMatchInputValue.filter(option => !isSelected(option))

  const optionsToShow = omitSelectedInDropdown ? optionsThatAreStillNotSelected : optionsThatMatchInputValue

  const tagRootClass = clsx(
    'inline-flex shadow bg-white dark:bg-zinc-700 rounded py-0.5 px-1.5',
    'h-[22px] inline-flex rounded py-0.5 px-1.5 select-none justify-center items-center align-center gap-1',
    'inline-flex rounded py-0.5 px-1.5 select-none justify-center align-center gap-1',
    'leading-none select-none justify-center items-center align-center gap-1',
    // 'hover:text-grey-dark-scale-900 dark:hover:text-white',
    // 'hover:bg-grey-light-scale-50 dark:hover:bg-grey-dark-scale-300',
  )
  const tagRootClassInverted = clsx(tagRootClass, 'text-zinc-600 dark:text-zinc-200 bg-white dark:bg-zinc-700')
  const tagClass = clsx(
    'text-[11px] font-bold whitespace-nowrap text-zinc-600 dark:text-zinc-200 m-0',
    'relative top-[-1px]',
  )
  const xClass = clsx('text-[11px] font-bold whitespace-nowrap text-zinc-600 dark:text-zinc-200 m-0')

  let selectedTagsToDisplay = displayValue
  if (truncateAfterNumItems !== -1 && displayValue.length > truncateAfterNumItems) {
    selectedTagsToDisplay = displayValue.slice(0, truncateAfterNumItems)
  }

  return (
    <div
      className={clsx('w-full relative', !isOpen && 'cursor-pointer', className)}
      ref={wrapperRef}
      // @ts-ignore
      onClick={() => inputRef.current?.focus()}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 20 20'
        strokeWidth={1.5}
        stroke='currentColor'
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        className={clsx(
          'pointer-events-none',
          'w-4 h-4 absolute right-[12px] top-[11px]',
          'text-tertiary',
          //'!hover:text-black !hover:dark:text-white',
          isOpen && 'rotate-180 !top-[12px] !right-[9px]',
        )}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
      </svg>
      {displayValue.length > 0 && (
        <div className='absolute right-[34px] top-[12px]'>
          <Cross
            className='text-tertiary hover:text-black hover:dark:text-white cursor-pointer'
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              e.preventDefault()
              handleSelectionUpdate([])
            }}
          />
        </div>
      )}
      <div
        className={clsx(
          baseInputStyles,
          colorInputStyles,
          'flex flex-row flex-wrap gap-2 items-center justify-between',
          'font-normal',
          'border',
          isInvalid && '!border-red',
          'cursor-pointer',
          'select-none',
          isOpen && '!border-blue',
        )}
      >
        <div className='flex gap-1 flex-wrap'>
          {selectedTagsToDisplay &&
            selectedTagsToDisplay.map((item, index) => (
              <div
                key={index}
                className={tagRootClass}
                onClick={() => {
                  removeSelectedItem(item)
                }}
              >
                <p className={tagClass} style={{ lineHeight: 'normal' }}>
                  {/* @ts-ignore */}
                  {item[labelProp] || item}
                </p>
                <XIcon className={xClass} />
              </div>
            ))}
          {truncateAfterNumItems !== -1 && truncateAfterNumItems && displayValue.length > truncateAfterNumItems && (
            <div className={tagRootClassInverted} onClick={clickTruncatedItems}>
              <p className={tagClass} style={{ lineHeight: 'normal' }}>
                +{displayValue.length - truncateAfterNumItems}
              </p>
            </div>
          )}
          <input
            ref={inputRef}
            className={clsx(
              'inline-flex',
              'bg-transparent',
              'font-normal',
              'w-auto',
              'p-0',
              'ml-1.5 mr-auto',
              '!outline-none',
              '!border-none',
              '!text-secondary',
              !isOpen && 'cursor-pointer',
            )}
            type='text'
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
        <div className='w-full flex flex-col space-y-1 items-start text-left p-1 lg:p-2 rounded bg-window border-2 border-window shadow-md dark:shadow-none z-50 absolute top-[100%] left-0 max-h-40 overflow-auto'>
          {optionsToShow.map((option, index) => (
            <div
              key={labelProp ? option[labelProp] : option}
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                isSelected(option) ? removeSelectedItem(option) : addSelectedItem(option)
                //setIsOpen(false)
              }}
              className={clsx(
                'p-2 m-0',
                'text-start font-medium',
                'text-xs xl:text-sm',
                '!outline-none',
                `w-full select-none cursor-pointer text-center`,
                `bg-window rounded`,
                `hover:bg-grey-light-scale-100 hover:dark:bg-grey-dark-scale-600`,
                isSelected(option) && `!bg-grey-light-scale-300 dark:!bg-grey-dark-scale-500`,
              )}
            >
              <PTiny className={clsx('text-primary text-left', isSelected(option) && `!text-black dark:!text-white`)}>
                {labelProp ? option[labelProp] : option}
              </PTiny>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default SelectMulti

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      className={clsx('w-[14px] h-[14px]', className)}
      viewBox='0 0 20 20'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
      ></path>
    </svg>
  )
}
