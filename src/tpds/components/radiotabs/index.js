import React from 'react'
import clsx from 'clsx'

const RadioTabs = ({ items, selectedIndex, handleIndexSelection }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-1 rounded-lg p-1 bg-grey-light-scale-300 dark:bg-grey-dark-scale-500">
        {items.map((item, index) => (
          <div
            className="flex-1"
            key={item.value || item.description || item.label || item}
            onClick={() => handleIndexSelection(index)}
          >
            <p
              className={clsx(
                'text-primary m-0 font-medium',
                'text-xs xl:text-sm',
                '!outline-none',
                `w-full select-none cursor-pointer text-center py-2 rounded-md`,
                index === selectedIndex &&
                  `bg-grey-light-scale-100 text-black dark:bg-grey-dark-scale-300`,
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
