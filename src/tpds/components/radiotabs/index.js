import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

const Tabs = ({ items, selectedIndex, callBack }) => {
  return (
    <div className="w-full">
      <Tab.Group
        defaultIndex={selectedIndex || 0}
        onChange={index => {
          if (callBack) callBack(index)
        }}
      >
        <Tab.List className="flex space-x-1 rounded-lg p-1 bg-grey-light-scale-300 dark:bg-grey-dark-scale-500">
          {items.map(item => (
            <Tab as={Fragment} key={item.value || item.description || item.label || item}>
              {({ selected }) => (
                <p
                  className={clsx(
                    'text-primary m-0 font-medium',
                    'text-xs xl:text-sm',
                    '!outline-none',
                    `w-full select-none cursor-pointer text-center py-2 rounded-md`,
                    selected && `bg-grey-light-scale-100 text-black dark:bg-grey-dark-scale-300`,
                  )}
                >
                  {item.value || item.description || item.label || item}
                </p>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
export default Tabs
