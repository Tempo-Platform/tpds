'use client'

import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P, PSmall } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import Select from '@tpds/components/select'
import PropsTable from '@tpds/components/props-table'

export default function Page() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>(undefined)
  return (
    <div>
      <Container>
        <PageHeader title='Select' subTitle='Simple select component' />
        <Select
          handleIndexSelection={index => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
          labelProp={'label'}
          idProp='value'
          enableClear={true}
          excludeIndexes={[2]}
          useKeyboard={true}
          options={[
            {
              value: '1',
              label: 'Option 1 lkasfhd jshdfs',
              subLabel: 'Additional information about this item',
            },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4', subLabel: 'Additional information about this item' },
            { value: '5', label: 'Option 5' },
          ]}
        />
        <br />
        <P>Features:</P>
        <br />
        <PSmall>- Accepts handler function to apply selection by index</PSmall>
        <PSmall>- Option to search by typing</PSmall>
        <PSmall>- Display "no matches" when input doesn't match any options (if using search by typing)</PSmall>
        <PSmall>- Clear text input on focus (favouring quick interaction) (if using search by typing)</PSmall>
        <PSmall>- Close drawer + clear typed content on click away</PSmall>
        <PSmall>- Automatically apply scroll if content exceeds max height</PSmall>
        <PSmall>- Accepts indexes to exclude from list</PSmall>
        <PSmall>- Accepts "sublabel" to display additional information under label of each option</PSmall>
        <PSmall>- "No permanent selection" mode, which skips showing the selected item in the input</PSmall>
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
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
              propName: 'enableClear',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Wether to show an "X" to clear the selected option',
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
              description: "The property name that will be used to access the option's display label",
            },
            {
              propName: 'idProp',
              type: 'String',
              default: 'null',
              required: 'no',
              description: 'The property name that will be used to identify the index of the selected option',
            },
            {
              propName: 'placeholder',
              type: 'String',
              default: 'Select',
              required: 'no',
              description: 'The placeholder text that will be displayed when no option is selected',
            },
            {
              propName: 'isInvalid',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Wether the input is invalid or not',
            },
            {
              propName: 'useKeyboard',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Pass true to allow searching by keyboard',
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
  useKeyboard={true}
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
