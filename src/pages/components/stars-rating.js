import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Separator } from '../../tpds/elements/layout'
import { P } from '../../tpds/elements/typography'
import { Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import StarsRating from '../../tpds/components/stars-rating'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title="StarsRating" subTitle="A 5-stars row rating component" />
        <P>
          The StarsRating component accepts a rating (number) from 0 to 5, and an optional width.
        </P>
        <Separator className="!my-12" />
        <P>Basic implementation with the value of 4.5:</P>
        <br />
        <StarsRating rating={4.5} />
        <br />
        <CodeBlock code={code} />
        <Separator className="!my-12" />
        <P>Implementation with a custom width, and value of 2.5:</P>
        <br />
        <StarsRating rating={2.5} width={80} />
        <br />
        <CodeBlock code={code2} />
        <br />
        <br />
        <br />
        <PropsTable
          title="Props"
          items={[
            {
              propName: 'rating',
              type: 'Number',
              default: 'null',
              required: 'yes',
              description: 'The value of the rating, from 0 to 5',
            },
            {
              propName: 'width',
              type: 'Number',
              default: '100',
              required: 'no',
              description: 'The width of the rendered component in pixels',
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

const code = String.raw`import StarsRating from '@tempoplatform/tpds/components/stars-rating'

<StarsRating rating={4.5} />`

const code2 = String.raw`import StarsRating from '@tempoplatform/tpds/components/stars-rating'

<StarsRating rating={2.5} width={80} />`
