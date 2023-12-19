import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, PSmall, PNano, H6 } from '../../tpds/elements/typography'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import DatePicker from '../../tpds/components/date-picker'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  const [currenDate, setCurrentDate] = React.useState(new Date())
  return (
    <div>
      <Container>
        <PageHeader title="Date Picker" subTitle="A simple date picker component" />
        <P>Use this date picker to implement selection of a single date.</P>
        <br />
        <P>
          You can combine two of these to get a date range, but you can use the Date Range Picker
          instead.
        </P>
        <br />
        <PNano isUppercase isBold className="text-tertiary mb-1 opacity-80">
          Full picker
        </PNano>
        <DatePicker
          year={currenDate.getFullYear()}
          month={currenDate.getMonth()}
          day={currenDate.getDate()}
          onChange={date => setCurrentDate(date)}
        />
        <br />
        <br />
        <PSmall isBold className="mb-1">
          Current Selection:
        </PSmall>
        <P>Year: {currenDate.getFullYear()}</P>
        <P>Month: {currenDate.getMonth() + 1}</P>
        <P>Day: {currenDate.getDate()}</P>
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <H6 isBold className="mb-1">
          Other variants:
        </H6>
        <br />
        <PNano isUppercase isBold className="text-tertiary mb-1 opacity-80">
          Just month and day
        </PNano>
        <DatePicker
          year={currenDate.getFullYear()}
          month={currenDate.getMonth()}
          day={currenDate.getDate()}
          onChange={date => setCurrentDate(date)}
          omitYear={true}
        />
        <br />
        <br />
        <CodeBlock code={codeJustMonthAndDay} />
        <br />
        <br />
        <PNano isUppercase isBold className="text-tertiary mb-1 opacity-80">
          Just year and month
        </PNano>
        <DatePicker
          year={currenDate.getFullYear()}
          month={currenDate.getMonth()}
          day={currenDate.getDate()}
          onChange={date => setCurrentDate(date)}
          omitDay={true}
        />
        <br />
        <br />
        <CodeBlock code={codeJustYearAndMonth} />
        <br />
        <br />
        <PNano isUppercase isBold className="text-tertiary mb-1 opacity-80">
          Just year
        </PNano>
        <DatePicker
          year={currenDate.getFullYear()}
          month={currenDate.getMonth()}
          day={currenDate.getDate()}
          onChange={date => setCurrentDate(date)}
          omitMonth={true}
          omitDay={true}
        />
        <br />
        <br />
        <CodeBlock code={codeJustYear} />
        <br />
        <br />
        <PNano isUppercase isBold className="text-tertiary mb-1 opacity-80">
          Just day
        </PNano>
        <DatePicker
          year={currenDate.getFullYear()}
          month={currenDate.getMonth()}
          day={currenDate.getDate()}
          onChange={date => setCurrentDate(date)}
          omitMonth={true}
          omitYear={true}
        />
        <br />
        <br />
        <CodeBlock code={codeJustDay} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'year',
              type: 'Number',
              default: 'Current year',
              required: 'No',
              description: 'The year to display',
            },
            {
              propName: 'month',
              type: 'Number',
              default: 'Current month',
              required: 'No',
              description: 'The month to display.',
            },
            {
              propName: 'day',
              type: 'Number',
              default: 'Today',
              required: 'No',
              description: 'The day to display.',
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

const code = String.raw`import DatePicker from '@tempoplatform/tpds/components/date-picker'
const [currenDate, setCurrentDate] = React.useState(new Date())

<DatePicker
  year={currenDate.getFullYear()}
  month={currenDate.getMonth()}
  day={currenDate.getDate()}
  onChange={date => setCurrentDate(date)}
/>`

const codeJustMonthAndDay = String.raw`<DatePicker
  year={currenDate.getFullYear()}
  month={currenDate.getMonth()}
  day={currenDate.getDate()}
  onChange={date => setCurrentDate(date)}
  omitYear={true}
/>`

const codeJustYearAndMonth = String.raw`<DatePicker
  year={currenDate.getFullYear()}
  month={currenDate.getMonth()}
  day={currenDate.getDate()}
  onChange={date => setCurrentDate(date)}
  omitDay={true}
/>`

const codeJustYear = String.raw`<DatePicker
  year={currenDate.getFullYear()}
  month={currenDate.getMonth()}
  day={currenDate.getDate()}
  onChange={date => setCurrentDate(date)}
  omitMonth={true}
  omitDay={true}
/>`

const codeJustDay = String.raw`<DatePicker
  year={currenDate.getFullYear()}
  month={currenDate.getMonth()}
  day={currenDate.getDate()}
  onChange={date => setCurrentDate(date)}
  omitMonth={true}
  omitYear={true}
/>`
