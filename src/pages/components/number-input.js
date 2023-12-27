import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import NumberInput from '../../tpds/components/input/number'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  const [number, setNumber] = React.useState(10)

  return (
    <div>
      <Container>
        <PageHeader title="Number Input" subTitle="A text input optimized for numbers" />
        <Window className="mt-8">
          <NumberInput
            initialValue={number}
            maxValue={1000}
            onChangeCallback={value => setNumber(value)}
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
              propName: 'initialValue',
              type: 'String | Number',
              default: 'null',
              required: 'yes',
              description: 'The initial value displayed',
            },
            {
              propName: 'onChangeCallback',
              type: 'Function',
              default: 'null',
              required: 'yes',
              description: 'The used to update the value',
            },
            {
              propName: 'maxValue',
              type: 'Number',
              default: 'null',
              required: 'no',
              description: 'The maximum number the input will accept',
            },
            {
              propName: 'maxLength',
              type: 'Number',
              default: '100',
              required: 'no',
              description: 'The maximum number of characters the input will accept',
            },
            {
              propName: 'allowFloats',
              type: 'Boolean',
              default: 'true',
              required: 'no',
              description:
                'Wether the input will accept floats - otherwise will be limited to integers',
            },
            {
              propName: 'floatPrecision',
              type: 'Number',
              default: '2',
              required: 'no',
              description: 'How many decimal places to allow if floats are allowed',
            },
          ]}
        />
      </Container>
    </div>
  )
}

const code = String.raw`import React from 'react'
import NumberInput from '@tempoplatform/tpds/components/input/number'

const [number, setNumber] = React.useState(10)

<NumberInput
  initialValue={number}
  maxValue={1000}
  onChangeCallback={value => setNumber(value)}
/>`
