import React from 'react'
import clsx from 'clsx'
import { PTiny } from '../../elements/typography'
import { Button } from '../../elements/buttons'
import { TriangleDown } from '../../assets/svgs/arrows'

const getColumnAlign = (alignType: string) => {
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

const renderElement = (item: any, column: any, rowIndex: number, elementIndex: number) => {
  return (
    <div
      key={`row-${rowIndex}-element-${elementIndex}`}
      className='flex items-center'
      style={{
        justifyContent: getColumnAlign(column.align),
      }}
    >
      {column.render ? (
        column.render(item)
      ) : (
        <PTiny className={clsx('whitespace-nowrap text-ellipsis overflow-hidden', column.addClass)}>
          {item[column.propName]}
        </PTiny>
      )}
    </div>
  )
}

const runSort = (array: any[], column: any, sortDirection: number) => {
  const compare = column.sortFunction
    ? column.sortFunction
    : (a: any, b: any) => {
        if (a[column.propName] < b[column.propName]) {
          return -1
        }
        if (a[column.propName] > b[column.propName]) {
          return 1
        }
        return 0
      }
  sortDirection === 1 ? array.sort(compare) : array.sort(compare).reverse()
  return array
}

function Table({
  columns,
  data,
  pagination = true,
  rowsPerPage = 10,
  page = 1,
  router = null,
  rowClick = null,
  density = 'high', // 'low', 'medium', 'high'
  rowSpacing = 'low', // 'none', 'low', 'medium', 'high'
  customRowClass,
  customHeaderClass,
}: {
  columns: any[]
  data: any[]
  pagination?: boolean
  rowsPerPage?: number
  page?: number
  router?: any
  rowClick?: any
  density?: 'low' | 'medium' | 'high'
  rowSpacing?: 'none' | 'low' | 'medium' | 'high'
  customRowClass?: string
  customHeaderClass?: string
}) {
  const [sortByColumn, setSortByColumn] = React.useState<any>(null)
  const [sortDirection, setSortDirection] = React.useState(1)
  const headerClass = clsx(
    'grid gap-2',
    columnVariants[columns.length as keyof typeof columnVariants],
    'px-4 py-1.5',
    'border-b border-grey-light-scale-300 dark:border-grey-dark-scale-600',
  )
  const rowClass = clsx(
    'grid gap-4',
    'px-4',
    columnVariants[columns.length as keyof typeof columnVariants],
    'border-b border-grey-light-scale-200 dark:border-grey-dark-scale-700',
    rowClick && 'cursor-pointer hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50',
    density === 'high' && 'py-2',
    density === 'medium' && 'py-3',
    density === 'low' && 'py-4',
    // rowSpacing === 'none' && '!border-b-0 last:!border-b',
    customRowClass,
  )
  const rowsContainerClass = 'flex flex-col mb-4'

  const numPages = Math.ceil(data.length / rowsPerPage)

  if (pagination && !router) {
    throw new Error(
      'TPDS: Table component requires router prop when pagination is enabled, to "push" new page to router.',
    )
  }

  const handleBackToFirstPage = () => {
    router.push(window.location.pathname)
  }

  const handleGoToLastPage = () => {
    router.push(`${window.location.pathname}?page=${numPages}`)
  }

  const handleClickToNextPage = () => {
    router.push(`${window.location.pathname}?page=${page + 1}`)
  }

  const handleClickToPreviousPage = () => {
    router.push(`${window.location.pathname}?page=${page - 1}`)
  }

  if (sortByColumn) {
    data = runSort(data, sortByColumn, sortDirection)
  }

  let showPagination = pagination && data.length > rowsPerPage

  if (showPagination) {
    const startIndex = (page - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    data = data.slice(startIndex, endIndex)
  }

  return (
    <div>
      <div className={headerClass}>
        {columns.map((column, columnIndex) => (
          <PTiny
            isMedium
            key={`column-${columnIndex}`}
            className={clsx(
              'select-none whitespace-nowrap text-ellipsis overflow-hidden flex gap-x-2 items-center',
              column.enableSort && 'cursor-pointer',
              customHeaderClass,
            )}
            style={{
              textAlign: getColumnAlign(column.align),
            }}
            onClick={
              column.enableSort
                ? () => {
                    if (!sortByColumn) {
                      setSortDirection(1)
                      setSortByColumn(column)
                    } else {
                      if (sortByColumn.propName === column.propName && sortDirection === 1) {
                        setSortDirection(-1)
                      } else if (sortByColumn.propName === column.propName && sortDirection === -1) {
                        setSortDirection(1)
                        setSortByColumn(null)
                      } else {
                        setSortDirection(1)
                        setSortByColumn(column)
                      }
                    }
                  }
                : undefined
            }
          >
            {column.label}{' '}
            {sortByColumn && sortByColumn.propName === column.propName && (
              <TriangleDown
                className='inline-block ml-1'
                style={{ transform: sortDirection === 1 ? '' : 'rotate(180deg)' }}
              />
            )}
          </PTiny>
        ))}
      </div>
      <div className={rowsContainerClass}>
        {data.map((item, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={
              rowIndex === data.length - 1
                ? clsx(rowClass, '!border-grey-light-scale-300 dark:!border-grey-dark-scale-600')
                : rowClass
            }
            onClick={rowClick ? () => rowClick(item) : undefined}
          >
            {columns.map((column, elementIndex) => {
              return renderElement(item, column, rowIndex, elementIndex)
            })}
          </div>
        ))}
      </div>
      {showPagination && (
        <div className='flex justify-end gap-1'>
          <Button
            className='!p-2 min-w-0 text-primary'
            variant='default'
            isDisabled={page === 1}
            isSmall
            onClick={handleBackToFirstPage}
          >
            <BeginningIcon />
          </Button>
          <Button
            className='!p-2 min-w-0 text-primary'
            variant='default'
            isDisabled={page === 1}
            isSmall
            onClick={handleClickToPreviousPage}
          >
            <FirstIcon />
          </Button>

          <Button
            className='!p-2 min-w-0 pointer-events-none'
            variant='default'
            isDisabled={page === numPages}
            isSmall
            onClick={handleClickToNextPage}
          >
            {page} <span className='opacity-50'>/ {numPages}</span>
          </Button>
          <Button
            className='!p-2 min-w-0 text-primary'
            variant='default'
            isDisabled={page === numPages}
            isSmall
            onClick={handleClickToNextPage}
          >
            <NextIcon />
          </Button>
          <Button
            className='!p-2 min-w-0 text-primary'
            variant='default'
            isDisabled={page === numPages}
            isSmall
            onClick={handleGoToLastPage}
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
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <path
        fill='currentColor'
        d='M11.725 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L11.3 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L8.35 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H8.35l3.875 3.9c.125.1.125.3 0 .425l-.5.475zM4.9 4.8c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.8z'
      ></path>
      <path fill='#fff' fillOpacity='0.01' d='M0 0H20V20H0z'></path>
    </svg>
  )
}

function FirstIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <path
        fill='currentColor'
        d='M10.125 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L9.7 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L6.75 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H6.75l3.875 3.9c.125.1.125.3 0 .425l-.5.475z'
      ></path>
      <path fill='#fff' fillOpacity='0.01' d='M0 0H20V20H0z'></path>
    </svg>
  )
}

function NextIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='19' height='20' fill='none' viewBox='0 0 19 20'>
      <path
        fill='currentColor'
        d='M9.275 4.575c.1-.125.3-.125.425 0L14.925 9.8c.125.125.125.3 0 .425L9.7 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H4.1c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475z'
      ></path>
      <path fill='#fff' fillOpacity='0.01' d='M0 0H19V20H0z'></path>
    </svg>
  )
}

function LastIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
      <path
        fill='currentColor'
        d='M8.075 4.575c.1-.125.3-.125.425 0L13.725 9.8c.125.125.125.3 0 .425L8.5 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H2.9c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475zM14.9 15.225c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.797c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428z'
      ></path>
      <path fill='#fff' fillOpacity='0.01' d='M0 0H20V20H0z'></path>
    </svg>
  )
}
