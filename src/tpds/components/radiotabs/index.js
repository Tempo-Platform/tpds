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
          'flex gap-x-[2px] rounded-[4px] p-[2px] h-[36px]',
          outlineStyle
            ? 'bg-transparent border-2 !border-[#ededed] dark:!border-[#384147]'
            : 'bg-grey-light-scale-200 dark:bg-grey-dark-scale-500',
        )}
      >
        {items.map((item, index) => (
          <div
            className={clsx(
              'flex-1 overflow-hidden cursor-pointer',
              '!px-[7px] py-[4px]',
              'flex justify-center',
              'select-none !outline-none rounded-[3px]',
              index === selectedIndex && 'bg-black dark:bg-white',
            )}
            key={item.value || item.description || item.label || item}
            onClick={() => handleIndexSelection(index)}
          >
            <p
              className={clsx(
                index === selectedIndex ? 'text-primary' : 'text-secondary',
                'font-semibold',
                'text-[13px]',
                '!outline-none',
                'overflow-hidden whitespace-nowrap text-ellipsis',
                '!m-0 self-center',
                'relative top-0',
                index === selectedIndex && 'text-white dark:text-black',
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
