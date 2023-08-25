import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import NumberInput from '../../tpds/components/input/number'

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
