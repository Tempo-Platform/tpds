'use client'

import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import DateRangePicker from '@tpds/components/date-range-picker'
import PropsTable from '@tpds/components/props-table'

const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

export default function Page() {
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [startDateB, setStartDateB] = React.useState(new Date())
  const [endDateB, setEndDateB] = React.useState(getYesterdayDate())

  return (
    <div>
      <Container>
        <PageHeader title='Date Range Picker' subTitle='Minimalistic date range picker component' />
        <P>
          The default date range picker component will automatically adjust start time if an earlier end time is
          selected, and vice-versa.
        </P>
        <br />
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={date => setStartDate(date)}
          onChangeEndDate={date => setEndDate(date)}
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <P>
          Setting the option "preventWrongTiming" to false allows a "free mode", allowing the component to freely select
          ranges, including an end date before start date.
        </P>
        <br />
        <P>
          An additional option "wrongTimeWarning" can be used to display a warning when the end date is before the start
          date.
        </P>
        <br />
        <DateRangePicker
          startDate={startDateB}
          endDate={endDateB}
          onChangeStartDate={date => setStartDateB(date)}
          onChangeEndDate={date => setEndDateB(date)}
          preventWrongTiming={false}
          wrongTimeWarning={true}
        />
        <br />
        <br />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'preventWrongTiming',
              type: 'Boolean',
              default: 'true',
              required: 'No',
              description: 'Wether to correct the end date if it is before the start date and vice-versa.',
            },
            {
              propName: 'startDate',
              type: 'Date',
              default: 'Now',
              required: 'No',
              description: 'The start date to display',
            },
            {
              propName: 'endDate',
              type: 'Date',
              default: 'Now',
              required: 'No',
              description: 'The end date to display',
            },
            {
              propName: 'omitYear',
              type: 'Boolean',
              default: 'false',
              required: 'No',
              description: 'Do now show the year picker.',
            },
            {
              propName: 'omitMonth',
              type: 'Boolean',
              default: 'false',
              required: 'No',
              description: 'Do not show the month picker.',
            },
            {
              propName: 'omitDay',
              type: 'Boolean',
              default: 'false',
              required: 'No',
              description: 'Do not show the day picker.',
            },
            {
              propName: 'allowPast',
              type: 'Boolean',
              default: 'false',
              required: 'No',
              description: 'Allow post dates to be selected.',
            },
            {
              propName: 'maxYearsToPast',
              type: 'Number',
              default: '10',
              required: 'No',
              description: 'How many years in the past to show in the list.',
            },
            {
              propName: 'maxYearsToFuture',
              type: 'Number',
              default: '10',
              required: 'No',
              description: 'How many years in the future to show in the list.',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`const [startDate, setStartDate] = React.useState(new Date())
const [endDate, setEndDate] = React.useState(new Date())

<DateRangePicker
  startDate={startDate}
  endDate={endDate}
  onChangeStartDate={date => setStartDate(date)}
  onChangeEndDate={date => setEndDate(date)}
/>`
