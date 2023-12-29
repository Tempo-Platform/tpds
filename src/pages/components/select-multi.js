import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, PSmall } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import SelectMulti from '../../tpds/components/select-multi'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  const [selectedIndexes, setSelectedIndexes] = React.useState([0, 1])
  return (
    <div>
      <Container>
        <PageHeader title="SelectMulti" subTitle="Multiple selection component" />
        <P>Features:</P>
        <br />
        <PSmall>- Accepts handler function to update array selection of indexes</PSmall>
        <PSmall>- Search by typing</PSmall>
        <PSmall>- Clear text input on focus (to search freely)</PSmall>
        <PSmall>- Close drawer + clear typed content on click away</PSmall>
        <PSmall>- Automatically apply scroll if content exceeds max height</PSmall>
        <PSmall>- Accepts indexes to exclude</PSmall>
        <PSmall>- Optionally show only items that are not yet selected in drawer</PSmall>
        <PSmall>
          - Option to "truncate" number of items shows in the input and resume the rest with "+(n)"
        </PSmall>
        <br />
        <Window>
          <SelectMulti
            handleSelectionUpdate={setSelectedIndexes}
            selectedIndexes={selectedIndexes}
            omitSelectedInDropdown={false}
            truncateAfterNumItems={2}
            labelProp="label"
            idProp="value"
            tagVariant="default"
            excludeIndexes={[2]}
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
              { value: '4', label: 'Option 4' },
              { value: '5', label: 'Option 5' },
              { value: '6', label: 'Option 6' },
              { value: '7', label: 'Option 7' },
              { value: '8', label: 'Option 8' },
              { value: '9', label: 'Option 9' },
            ]}
          />
        </Window>
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
              propName: 'selectedIndexes',
              type: 'Array',
              default: 'null',
              required: 'yes',
              description: 'The indexes to show as selected',
            },
            {
              propName: 'handleSelectionUpdate',
              type: 'Function',
              default: 'null',
              required: 'yes',
              description: 'The handler function used to update the selected indexes',
            },
            {
              propName: 'excludeIndexes',
              type: 'Array',
              default: '[]',
              required: 'no',
              description: 'An array of indexes that will be excluded from the displayed options',
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
            {
              propName: 'isInvalid',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Wether the input is invalid or not',
            },
            {
              propName: 'omitSelectedInDropdown',
              type: 'Boolean',
              default: 'true',
              required: 'no',
              description: 'Wether to show selected items in the dropdown or not',
            },
            {
              propName: 'truncateAfterNumItems',
              type: 'Number',
              default: '-1',
              required: 'no',
              description:
                'If set to a positive number, the input will only show that number os selected items and will truncate the rest with a +X label',
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

const code = String.raw`import SelectMulti from '@tempoplatform/tpds/components/select-multi'

const [selectedIndexes, setSelectedIndexes] = React.useState([0, 1])

<SelectMulti
  handleSelectionUpdate={setSelectedIndexes}
  selectedIndexes={selectedIndexes}
  labelProp="label"
  idProp="value"
  excludeIndexes={[2]}
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
  ]}
/>`
