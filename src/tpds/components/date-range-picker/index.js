import React from 'react'
import { ArrowRightIcon } from '../../assets/svgs/arrows'
import clsx from 'clsx'
import DatePicker from '../date-picker'
import { PNano } from '../../elements/typography'

function DateRangePicker({
  startDate = new Date(),
  endDate = new Date(),
  omitYear = false,
  omitMonth = false,
  omitDay = false,
  allowPast = true,
  maxYearsToPast = 10,
  maxYearsToFuture = 10,
  preventWrongTiming = true,
  wrongTimeWarning = false,
  warnEqualTime = false,
  onChangeStartDate = () => {},
  onChangeEndDate = () => {},
}) {
  // checks
  if (!onChangeStartDate) {
    throw new Error('TPDS DateRangePicker: onChangeStartDate is required')
  }
  if (!onChangeEndDate) {
    throw new Error('TPDS DateRangePicker: onChangeEndDate is required')
  }
  if (omitYear && omitMonth && omitDay) {
    throw new Error('TPDS DateRangePicker: Cannot omit all year, month, and day')
  }

  const startTime = startDate.getTime()
  const endTime = endDate.getTime()
  const endDateBeforeStartDate = startTime > endTime
  const endDateEqualStartDate = startTime === endTime

  const rootClassName = clsx(
    '!h-[38px] rounded',
    'gap-x-0.5',
    '!inline-flex items-center !w-auto',
    'inline-flex w-full',
    'border-2',
    'bg-transparent border-[#ededed] dark:border-[#384147]',
    wrongTimeWarning && endDateBeforeStartDate && '!border-orange',
  )

  return (
    <div>
      <div className={rootClassName}>
        <DatePicker
          year={startDate.getFullYear()}
          month={startDate.getMonth()}
          day={startDate.getDate()}
          onChange={date => {
            if (preventWrongTiming) {
              if (date.getTime() > endDate.getTime()) {
                onChangeEndDate(date)
              }
            }
            onChangeStartDate(date)
          }}
          maxYearsToPast={maxYearsToPast}
          maxYearsToFuture={0}
          allowPast={allowPast}
          omitBorders={true}
          omitCalendarIcon={true}
        />
        <ArrowRightIcon className="h-[12px] text-black dark:text-white opacity-30" />
        <DatePicker
          year={endDate.getFullYear()}
          month={endDate.getMonth()}
          day={endDate.getDate()}
          onChange={date => {
            if (preventWrongTiming) {
              if (date.getTime() < startDate.getTime()) {
                onChangeStartDate(date)
              }
            }
            onChangeEndDate(date)
          }}
          maxYearsToPast={endDate.getFullYear() - startDate.getFullYear()}
          maxYearsToFuture={maxYearsToFuture}
          allowPast={allowPast}
          omitBorders={true}
        />
      </div>
      {wrongTimeWarning && endDateBeforeStartDate && (
        <PNano isMedium className="mt-1 !text-orange">
          End date is before start date
        </PNano>
      )}
      {warnEqualTime && endDateEqualStartDate && (
        <PNano isMedium className="mt-1 text-tertiary">
          Start and end dates are the same
        </PNano>
      )}
    </div>
  )
}

export default DateRangePicker
