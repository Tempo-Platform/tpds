'use client'

import React from 'react'
import { PTiny } from '../../elements/typography'
import clsx from 'clsx'

const getColumnAlign = alignType => {
  switch (alignType) {
    case 'center':
      return 'center'
    case 'right':
      return 'end'
    default:
      return 'start'
  }
}

const columnVariants = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
}

const renderItem = (item, column, itemIndex, columnIndex, rowKey) => {
  return (
    <div
      key={rowKey ? `${item[rowKey]}-${columnIndex}` : `${itemIndex}-${columnIndex}`}
      className={clsx(`flex items-center`)}
      style={{ justifyContent: getColumnAlign(column.align) }}
    >
      {column.render ? (
        column.render(item, rowKey ? item[rowKey] : itemIndex)
      ) : (
        <PTiny className="whitespace-nowrap text-ellipsis overflow-hidden">
          {item[column.key]}
        </PTiny>
      )}
    </div>
  )
}

function Table({ columns, data, pagination = true, rowsPerPage = 30, rowKey = null, page = 1 }) {
  const headerClass = clsx('grid gap-2', columnVariants[columns.length], 'mb-1', 'px-4 py-1.5')
  const rowClass = clsx(
    'grid gap-4 mb-2',
    columnVariants[columns.length],
    'border border-window bg-window',
    'px-4 py-2',
  )

  return (
    <div>
      <div className={headerClass}>
        {columns.map(column => (
          <PTiny
            isBold
            key={column.key}
            className="whitespace-nowrap text-ellipsis overflow-hidden"
            style={{ textAlign: getColumnAlign(column.align) }}
          >
            {column.label}
          </PTiny>
        ))}
      </div>
      {data.map((item, itemIndex) => (
        <div key={rowKey === null ? itemIndex : item[rowKey]} className={clsx(rowClass)}>
          {columns.map((column, columnIndex) => {
            return renderItem(item, column, itemIndex, columnIndex, rowKey)
          })}
        </div>
      ))}
    </div>
  )
}

export default Table
