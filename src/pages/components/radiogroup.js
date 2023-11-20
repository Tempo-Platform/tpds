import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import RadioGroup from '../../tpds/components/radiogroup'
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
        <PageHeader
          title="RadioGroup"
          subTitle="Radio selection component in stacked pills style."
        />
        <RadioGroup
          options={items}
          selectedIndex={selectedIndex}
          handleIndexSelection={index => setSelectedIndex(index)}
        />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          title="RadioGroup props"
          items={[
            {
              propName: 'options',
              type: 'Array',
              default: 'null',
              required: 'yes',
              description: 'An array of items to select from',
            },
            {
              propName: 'selectedIndex',
              type: 'Int',
              default: 'null',
              required: 'yes',
              description: 'The index to show as selected',
            },
            {
              propName: 'handleIndexSelection',
              type: 'Function',
              default: 'null',
              required: 'yes',
              description: 'The handler function used to select the clicked index',
            },
            {
              propName: 'lightOnly',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Wether to force the component to render in light mode',
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
import RadioGroup from '@tempoplatform/tpds/components/radiogroup'

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

<RadioGroup
  options={items}
  selectedIndex={selectedIndex}
  handleIndexSelection={index => setSelectedIndex(index)}
/>`
