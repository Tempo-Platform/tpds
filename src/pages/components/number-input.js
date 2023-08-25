import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import NumberInput from '../../tpds/components/input/number'
import PropsTable from '../../tpds/components/table'

export default function Page() {
  const [number, setNumber] = React.useState(10)

  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Number Input</H1>
        <P>A text input optimized for numbers</P>
      </Hero>
      <Container>
        <Window className="mt-8">
          <NumberInput
            initialValue={number}
            maxValue={1000}
            onChangeCallback={value => setNumber(value)}
          />
          <br />
          <CodeBlock code={code} />
        </Window>
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
              default: '999999999',
              required: 'no',
              description: 'the maiumum number the input will accept',
            },
            {
              propName: 'maxLength',
              type: 'Number',
              default: '100',
              required: 'no',
              description: 'The maxiumum number of characters the input will accept',
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
