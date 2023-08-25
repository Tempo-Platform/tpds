import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import PriceInput from '../../tpds/components/input/price'
import PropsTable from '../../tpds/components/table'

export default function Page() {
  const [price, setPrice] = React.useState(10)

  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Price Input</H1>
        <P>A text input optimized for prices.</P>
      </Hero>
      <Container>
        <Window className="mt-8">
          <PriceInput
            initialValue={price}
            currencySymbol="$"
            onChangeCallback={value => setPrice(value)}
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
              propName: 'currencySymbol',
              type: 'String',
              default: '$',
              required: 'no',
              description: 'The currency symbol to be displayed',
            },
            {
              propName: 'onChangeCallback',
              type: 'Function',
              default: 'null',
              required: 'yes',
              description: 'The callout function used to select the clicked index',
            },
          ]}
        />
      </Container>
    </div>
  )
}

const code = String.raw`import React from 'react'
import PriceInput from '@tempoplatform/tpds/components/input/price'

const [price, setPrice] = React.useState(10)

<PriceInput
  initialValue={price}
  currencySymbol="$"
  onChangeCallback={value => setPrice(value)}
/>`
