import React from 'react'
import clsx from 'clsx'

const getClassNamesForBreakpoint = (breakpoint: string): string => {
  switch (breakpoint) {
    case 'sm':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[38px]'
    case 'md':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[38px]'
    case 'lg':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[38px]'
    case 'xl':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[38px]'
    case '2xl':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[38px]'
    default:
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[38px]'
  }
}

const RadioTabs = ({
  items,
  selectedIndex,
  handleIndexSelection,
  className,
  style,
  stackAtBreakpoint,
}: {
  items: any[]
  selectedIndex: number
  handleIndexSelection: (index: number) => void
  className?: string
  style?: React.CSSProperties
  stackAtBreakpoint?: string
}) => {
  const containerStyles = clsx(
    'flex gap-x-[2px] rounded-[6px] p-[2px] h-[38px]',
    'bg-zinc-100 dark:bg-grey-dark-scale-600',
    'border border-zinc-300 dark:border-grey-dark-scale-400',
    // using template strings isn't working so we're using a dumb function
    stackAtBreakpoint && getClassNamesForBreakpoint(stackAtBreakpoint),
  )
  const itemDivStyles = clsx(
    'flex-1 overflow-hidden cursor-pointer',
    '!px-[7px] py-[4px]',
    'flex justify-center',
    'select-none !outline-none rounded-[4px]',
  )
  const itemLabelStyles = clsx(
    'font-semibold',
    'text-[13px]',
    '!outline-none',
    'overflow-hidden whitespace-nowrap text-ellipsis',
    '!m-0 self-center',
    'relative top-0',
  )
  return (
    <div className={clsx('w-full', className)} style={style}>
      <div className={containerStyles}>
        {items.map((item, index) => (
          <div
            className={clsx(
              itemDivStyles,
              index === selectedIndex && 'bg-white dark:bg-zinc-700',
            )}
            key={item.value || item.description || item.label || item}
            onClick={() => handleIndexSelection(index)}
          >
            <p
              className={clsx(
                itemLabelStyles,
                index === selectedIndex
                  ? 'text-zinc-600 dark:text-zinc-200'
                  : 'text-zinc-400 dark:text-zinc-500',
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
