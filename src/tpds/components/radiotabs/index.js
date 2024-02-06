import React from 'react'
import clsx from 'clsx'

const RadioTabs = ({ items, selectedIndex, handleIndexSelection, outlineStyle }) => {
  return (
    <div className="w-full">
      <div
        className={clsx(
          'flex space-x-1 rounded-[8px] p-1',
          outlineStyle
            ? 'bg-transparent border !border-[#ededed] dark:!border-[#384147]'
            : 'bg-grey-light-scale-200 dark:bg-grey-dark-scale-500',
        )}
      >
        {items.map((item, index) => (
          <div
            className="flex-1"
            key={item.value || item.description || item.label || item}
            onClick={() => handleIndexSelection(index)}
          >
            <p
              className={clsx(
                index === selectedIndex ? 'text-primary' : 'text-secondary',
                'm-0 font-medium',
                'text-xs xl:text-sm',
                '!outline-none',
                `w-full select-none cursor-pointer text-center py-2 rounded-[5px]`,
                index === selectedIndex &&
                  'bg-grey-dark-scale-500 text-white dark:bg-white dark:text-black',
              )}
            >
              {item.value || item.description || item.label || item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RadioTabs
