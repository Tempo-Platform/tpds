import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import RadioTabs from '../../tpds/components/radiotabs'
import PropsTable from '../../tpds/components/props-table'

const items = [
  {
    title: 'Startup',
    description: '160 GB SSD disk',
  },
  {
    title: 'Business',
    description: '512 GB SSD disk',
  },
  {
    title: 'Enterprise',
    description: '1024 GB SSD disk',
  },
]

export default function Page() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return (
    <div>
      <Container>
        <PageHeader title="RadioTabs" subTitle="Radio selection component in row layout." />
        <RadioTabs
          items={items}
          selectedIndex={selectedIndex}
          stackAtBreakpoint="sm"
          handleIndexSelection={setSelectedIndex}
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          title="Props"
          items={[
            {
              propName: 'items',
              type: 'JSX',
              default: 'null',
              required: 'yes',
              description: 'The items to be displayed',
            },
            {
              propName: 'selectedIndex',
              type: 'Int',
              default: 'null',
              required: 'yes',
              description: 'The index to show as selected',
            },
            {
              propName: 'callBack',
              type: 'Function',
              default: 'null',
              required: 'yes',
              description: 'The callout function used to select the clicked index',
            },
            {
              propName: 'stackAtBreakpoint',
              type: 'String',
              default: '""',
              required: 'no',
              description:
                'Option breakpoint at whit to stack the items. Valid values are "sm", "md", "lg", "xl", "2xl"',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import React from 'react'
import RadioTabs from '@tempoplatform/tpds/components/radiotabs'

const items = [
  {
    title: 'Startup',
    description: '160 GB SSD disk',
  },
  {
    title: 'Business',
    description: '512 GB SSD disk',
  },
  {
    title: 'Enterprise',
    description: '1024 GB SSD disk',
  },
]

const [selectedIndex, setSelectedIndex] = React.useState(0)

<RadioTabs
  items={items}
  outlineStyle={true}
  selectedIndex={selectedIndex}
  handleIndexSelection={setSelectedIndex}
/>`
