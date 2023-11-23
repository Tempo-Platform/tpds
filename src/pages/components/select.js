import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, PSmall } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Select from '../../tpds/components/select'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  const [selectedIndex, setSelectedIndex] = React.useState(null)
  return (
    <div>
      <Container>
        <PageHeader title="Select" subTitle="Simple select component" />
        <Window>
          <Select
            handleIndexSelection={setSelectedIndex}
            selectedIndex={selectedIndex}
            labelProp={'label'}
            idProp="value"
            excludeIndexes={[2]}
            allowMultiple={true}
            options={[
              {
                value: '1',
                label: 'Option 1',
                subLabel: 'Additional information about this item',
              },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
              { value: '4', label: 'Option 4', subLabel: 'Additional information about this item' },
              { value: '5', label: 'Option 5' },
            ]}
          />
        </Window>
        <br />
        <P>Features:</P>
        <br />
        <PSmall>- Accepts handler function to apply selection by index</PSmall>
        <PSmall>- Search by typing</PSmall>
        <PSmall>- Display "no matches" when input doesn't match any options</PSmall>
        <PSmall>- Clear text input on focus (favouring quick interaction)</PSmall>
        <PSmall>- Close drawer + clear typed content on click away</PSmall>
        <PSmall>- Automatically apply scroll if content exceeds max height</PSmall>
        <PSmall>- Accepts indexes to exclude from list</PSmall>
        <PSmall>
          - Accepts "sublabel" to display additional information under label of each option
        </PSmall>
        <PSmall>
          - "No permanent selection" mode, which skips showing the selected item in the input
        </PSmall>
        <br />
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
              propName: 'excludeIndexes',
              type: 'Array',
              default: '[]',
              required: 'no',
              description: 'An array of indexes that will be excluded from the displayed options',
            },
            {
              propName: 'noPermanentSelection',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Wether the input shows the clicked option or not',
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
  excludeIndexes={[2]}
  options={[
    {
      value: '1',
      label: 'Option 1',
      subLabel: 'Additional information about this item',
    },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4', subLabel: 'Additional information about this item' },
    { value: '5', label: 'Option 5' },
  ]}
/>`
