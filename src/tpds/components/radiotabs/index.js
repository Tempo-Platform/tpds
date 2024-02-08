import React from 'react'
import clsx from 'clsx'

const RadioTabs = ({
  items,
  selectedIndex,
  handleIndexSelection,
  outlineStyle,
  className,
  style,
}) => {
  return (
    <div className={clsx('w-full', className)} style={{ style }}>
      <div
        className={clsx(
          'flex gap-x-[2px] rounded-[8px] p-[2px] h-[36px]',
          outlineStyle
            ? 'bg-transparent border !border-[#ededed] dark:!border-[#384147]'
            : 'bg-grey-light-scale-200 dark:bg-grey-dark-scale-500',
        )}
      >
        {items.map((item, index) => (
          <div
            className={clsx(
              'flex-1 overflow-hidden',
              '!px-[7px] py-[4px]',
              'flex justify-center',
              'select-none !outline-none',
              index === selectedIndex && 'bg-black dark:text-black rounded-[5px]',
            )}
            key={item.value || item.description || item.label || item}
            onClick={() => handleIndexSelection(index)}
          >
            <p
              className={clsx(
                index === selectedIndex ? 'text-primary' : 'text-secondary',
                'font-medium',
                'text-[14px]',
                '!outline-none',
                'overflow-hidden whitespace-nowrap text-ellipsis',
                index === selectedIndex && 'text-white dark:bg-white',
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
