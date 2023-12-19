import React from 'react'
import { PTiny } from '../../elements/typography'
import CalendarIcon from '../../assets/svgs/icons/Calendar'
import { baseInputStyles, outlineStyles } from '../../elements/input'
import clsx from 'clsx'

function DatePicker({
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  day = new Date().getDate(),
  omitYear = false,
  omitMonth = false,
  omitDay = false,
  allowPast = true,
  omitBorders = false,
  omitCalendarIcon = false,
  maxYearsToPast = 10,
  maxYearsToFuture = 10,
  onChange = () => {},
}) {
  if (!onChange) {
    throw new Error('TPDS DatePicker: onChange is required')
  }
  if (omitYear && omitMonth && omitDay) {
    throw new Error('TPDS DatePicker: Cannot omit all year, month, and day')
  }

  const rootClassName = clsx(
    ...baseInputStyles,
    ...outlineStyles,
    '!h-[38px] border !inline-flex items-center !w-auto gap-x-[3px] relative',
    omitBorders && '!border-0',
  )

  const cellStyle = clsx('cursor-pointer relative')

  const yearCellStyle = clsx(cellStyle, '')
  const dayMonthCellStyle = clsx(cellStyle, '')
  const selectLayer = clsx('absolute w-full opacity-0')
  const displayLayer = clsx(
    'relative pointer-events-none top-[2px]',
    'text-[15px] text-ellipsis font-medium !text-primary',
    'flex items-center w-full',
  )
  const displayLayerLeft = clsx(displayLayer, 'justify-start')
  const displayLayerCenter = clsx(displayLayer, 'justify-center')

  const numDaysInMonth = new Date(year, month + 1, 0).getDate()

  const furtherstPastYear = allowPast ? year - maxYearsToPast : year
  const furtherstFutureYear = year + maxYearsToFuture

  const yearOptions = [...Array(furtherstFutureYear - furtherstPastYear + 1).keys()].map(i => (
    <option key={i} value={furtherstPastYear + i}>
      {furtherstPastYear + i}
    </option>
  ))
  const monthOptions = [...Array(12).keys()].map(i => (
    <option key={i} value={i}>
      {i + 1}
    </option>
  ))
  const dayOptions = [...Array(numDaysInMonth).keys()].map(i => (
    <option key={i} value={i}>
      {i + 1}
    </option>
  ))

  let pickers = []

  if (!omitYear) {
    pickers.push(
      <div className={yearCellStyle} key="year-picker">
        <div className={selectLayer}>
          <select
            onChange={e => {
              const testForNextMonthNumDays = new Date(parseInt(e.target.value), month + 1, 0)
              const numDaysInNextMonth = testForNextMonthNumDays.getDate()
              const nextDay = day > numDaysInNextMonth ? numDaysInNextMonth : day
              const newDate = new Date(`${e.target.value}-${month + 1}-${nextDay}`)
              onChange(newDate)
            }}
            value={year}
          >
            {yearOptions}
          </select>
        </div>
        <div className={displayLayerLeft}>
          <>{year}</>
        </div>
      </div>,
    )
  }

  if (!omitMonth) {
    pickers.push(
      <div className={dayMonthCellStyle} key="month-picker">
        <div className={selectLayer}>
          <select
            onChange={e => {
              const testForNextMonthNumDays = new Date(year, parseInt(e.target.value) + 1, 0)
              const numDaysInNextMonth = testForNextMonthNumDays.getDate()
              const nextDay = day > numDaysInNextMonth ? numDaysInNextMonth : day
              const newDate = new Date(`${year}-${parseInt(e.target.value) + 1}-${nextDay}`)
              onChange(newDate)
            }}
            value={month}
          >
            {monthOptions}
          </select>
        </div>
        <div className={displayLayerCenter}>
          <>{parseInt(month) + 1}</>
        </div>
      </div>,
    )
  }

  if (!omitDay) {
    pickers.push(
      <div className={dayMonthCellStyle} key="day-picker">
        <div className={selectLayer}>
          <select
            onChange={e => {
              const newDate = new Date(`${year}-${month + 1}-${parseInt(e.target.value) + 1}`)
              onChange(newDate)
            }}
            value={day - 1}
          >
            {dayOptions}
          </select>
        </div>
        <div className={displayLayerCenter}>
          <>{day}</>
        </div>
      </div>,
    )
  }

  const renderItems = []

  for (let i = 0; i < pickers.length; i++) {
    renderItems.push(pickers[i])
    if (i !== pickers.length - 1) {
      renderItems.push(
        <div
          key={'division' + i}
          className="w-[4px] h-[2px] bg-black dark:bg-white relative opacity-30 top-[1px]"
        />,
      )
    }
  }
  return (
    <>
      <div className={rootClassName}>
        {renderItems}
        {!omitCalendarIcon && <CalendarIcon className="text-tertiary opacity-70 ml-2" />}
      </div>
    </>
  )
}

export default DatePicker
