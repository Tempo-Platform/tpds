import React from 'react'
import { PSmall } from '../../elements/typography'
import Checkmark from '../../assets/svgs/icons/Check'
import clsx from 'clsx'

const RadioGroup = ({ options, handleIndexSelection, selectedIndex }) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {options.map((option, index) => {
        const isActive = selectedIndex === index
        return (
          <div
            key={index}
            className={clsx(
              `flex w-full items-center justify-between cursor-pointer`,
              `py-2.5 px-4 rounded-lg overflow-hidden`,
              `border-2 border-window`,
              `transition-all duration-300`,
              isActive ? `bg-grey-light-scale-200 dark:bg-grey-dark-scale-300` : `bg-window`,
            )}
            onClick={handleIndexSelection ? () => handleIndexSelection(index) : null}
          >
            <div className="flex flex-col gap-y-2 w-[calc(100%-40px)]!">
              <PSmall isMedium className="capitalize leading-none">
                {option.title}
              </PSmall>
              <PSmall className="text-tertiary leading-tight">{option.description}</PSmall>
            </div>
            <div
              className={clsx(
                `!w-[26px] !h-[26px] rounded-[50%] border-2 flex justify-center items-center`,
                `transition-all duration-300`,
                isActive
                  ? `border-transparent bg-black dark:bg-white`
                  : `bg-transparent border-grey-light-scale-300 dark:border-grey-dark-scale-300`,
              )}
            >
              {isActive && <Checkmark className="text-white dark:text-black relative top-0" />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RadioGroup
