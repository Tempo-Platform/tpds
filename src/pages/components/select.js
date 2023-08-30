import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1, PSmall } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Select from '../../tpds/components/select'
import PropsTable from '../../tpds/components/table'

export default function Page() {
  const [selectedIndex, setSelectedIndex] = React.useState(null)
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Select</H1>
        <P>Simple select component</P>
      </Hero>
      <Container>
        <br />
        <br />
        <Window>
          <P>Features:</P>
          <br />
          <PSmall>- Accepts handler function to apply selection by index</PSmall>
          <PSmall>- Search by typing</PSmall>
          <PSmall>- Clear text input on focus (to search freely)</PSmall>
          <PSmall>- Clear typed content on click away</PSmall>
          <PSmall>- Automatically apply scroll if content exceeds max height</PSmall>
          <br />
          <Select
            handleIndexSelection={setSelectedIndex}
            selectedIndex={selectedIndex}
            labelProp="label"
            idProp="value"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
              { value: '4', label: 'Option 4' },
            ]}
          />
        </Window>
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          title="Props"
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
              propName: 'labelProp',
              type: 'String',
              default: 'value',
              required: 'no',
              description:
                "The property name that will be used to access the option's display label",
            },
            {
              propName: 'idProp',
              type: 'String',
              default: 'null',
              required: 'no',
              description:
                'The property name that will be used to identify the index of the selected option',
            },
            {
              propName: 'placeholder',
              type: 'String',
              default: 'Select',
              required: 'no',
              description: 'The placeholder text that will be displayed when no option is selected',
            },
          ]}
        />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import Select from '@tempoplatform/tpds/components/select'

const [selectedIndex, setSelectedIndex] = React.useState(null)

<Select
  handleIndexSelection={setSelectedIndex}
  selectedIndex={selectedIndex}
  labelProp="label"
  idProp="value"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
  ]}
/>`
