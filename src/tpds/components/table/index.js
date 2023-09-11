'use client'

import React from 'react'
import { PTiny } from '../../elements/typography'
import { Button } from '../../elements/buttons'
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

function Table({ columns, data, pagination = true, rowsPerPage = 10, rowKey = null, page = 1 }) {
  const [currentPage, setCurrentPage] = React.useState(page)
  const headerClass = clsx('grid gap-2', columnVariants[columns.length], 'mb-1', 'px-4 py-1.5')
  const rowClass = clsx(
    'grid gap-4 mb-2',
    columnVariants[columns.length],
    'border border-window bg-window',
    'px-4 py-2',
  )

  const numPages = Math.ceil(data.length / rowsPerPage)

  let showPagination = pagination && data.length > rowsPerPage

  if (showPagination) {
    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    data = data.slice(startIndex, endIndex)
  }

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
      {showPagination && (
        <div className="flex justify-end gap-1">
          <Button
            className="!p-1 text-primary"
            variant="secondary"
            isDisabled={currentPage === 1}
            size="small"
            onClick={() => setCurrentPage(1)}
          >
            <BeginningIcon />
          </Button>
          <Button
            className="!p-1 text-primary"
            variant="secondary"
            isDisabled={currentPage === 1}
            size="small"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FirstIcon />
          </Button>
          <div className="border p-2 bg-white border-grey-light-scale-400 dark:bg-grey-dark-scale-500 dark:border-grey-dark-scale-200">
            <PTiny
              isMedium
              className="uppercase whitespace-nowrap text-ellipsis overflow-hidden leading-none"
            >
              {currentPage} <span className="opacity-50">/ {numPages}</span>
            </PTiny>
          </div>
          <Button
            className="!p-1 text-primary"
            variant="secondary"
            isDisabled={currentPage === numPages}
            size="small"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <NextIcon />
          </Button>
          <Button
            className="!p-1 text-primary"
            variant="secondary"
            isDisabled={currentPage === numPages}
            size="small"
            onClick={() => setCurrentPage(numPages)}
          >
            <LastIcon />
          </Button>
        </div>
      )}
    </div>
  )
}

export default Table

function BeginningIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M11.725 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L11.3 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L8.35 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H8.35l3.875 3.9c.125.1.125.3 0 .425l-.5.475zM4.9 4.8c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.8z"
      ></path>
      <path fill="#fff" fillOpacity="0.01" d="M0 0H20V20H0z"></path>
    </svg>
  )
}

function FirstIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M10.125 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L9.7 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L6.75 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H6.75l3.875 3.9c.125.1.125.3 0 .425l-.5.475z"
      ></path>
      <path fill="#fff" fillOpacity="0.01" d="M0 0H20V20H0z"></path>
    </svg>
  )
}

function NextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="none" viewBox="0 0 19 20">
      <path
        fill="currentColor"
        d="M9.275 4.575c.1-.125.3-.125.425 0L14.925 9.8c.125.125.125.3 0 .425L9.7 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H4.1c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475z"
      ></path>
      <path fill="#fff" fillOpacity="0.01" d="M0 0H19V20H0z"></path>
    </svg>
  )
}

function LastIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M8.075 4.575c.1-.125.3-.125.425 0L13.725 9.8c.125.125.125.3 0 .425L8.5 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H2.9c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475zM14.9 15.225c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.797c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428z"
      ></path>
      <path fill="#fff" fillOpacity="0.01" d="M0 0H20V20H0z"></path>
    </svg>
  )
}
