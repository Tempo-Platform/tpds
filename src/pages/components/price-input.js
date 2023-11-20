import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import PriceInput from '../../tpds/components/input/price'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  const [price, setPrice] = React.useState(10)

  return (
    <div>
      <Container>
        <PageHeader title="Price Input" subTitle="A text input optimized for prices." />
        <Window className="mt-8">
          <PriceInput
            initialValue={price}
            currencySymbol="$"
            onChangeCallback={value => setPrice(value)}
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
        <br />
        <br />
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
