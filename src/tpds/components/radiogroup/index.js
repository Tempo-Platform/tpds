import React from 'react'
import { PSmall } from '../../elements/typography'
import Checkmark from '../../assets/svgs/icons/Check'
import clsx from 'clsx'

const RadioGroup = ({ options, handleIndexSelection, selectedIndex, lightOnly }) => {
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
              `border-2 border-[#E9EBEC] dark:border-[#323639]`,
              `transition-all duration-300`,
              isActive
                ? `bg-grey-light-scale-200 dark:bg-grey-dark-scale-300`
                : `bg-[#ffffff] dark:bg-[#1E2224]`,
              lightOnly && '!border-[#E9EBEC] !bg-[#ffffff]',
              isActive && lightOnly && '!bg-grey-light-scale-200',
            )}
            onClick={handleIndexSelection ? () => handleIndexSelection(index) : null}
          >
            <div className="flex flex-col gap-y-2 w-[calc(100%-40px)]!">
              <PSmall
                isMedium
                className={clsx('capitalize leading-none', lightOnly && '!text-[#151819]')}
                forceLight={lightOnly}
              >
                {option.title}
              </PSmall>
              <PSmall
                className={clsx('text-tertiary leading-tight', lightOnly && '!text-[#788187]')}
              >
                {option.description}
              </PSmall>
            </div>
            <div
              className={clsx(
                `!w-[26px] !h-[26px] rounded-[50%] border-2 flex justify-center items-center`,
                `transition-all duration-300`,
                !lightOnly &&
                  `bg-transparent border-grey-light-scale-300 dark:border-grey-dark-scale-300`,
                lightOnly && `bg-transparent border-grey-light-scale-300`,
                isActive && '!border-transparent',
                isActive && lightOnly && '!bg-black',
                isActive && !lightOnly && '!bg-black dark:!bg-white',
              )}
            >
              {isActive && (
                <Checkmark
                  className={clsx(
                    lightOnly
                      ? 'text-white relative top-0'
                      : 'text-white relative top-0 dark:text-black',
                  )}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RadioGroup
