import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, Window, Separator } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import StarsRating from '../../tpds/components/stars-rating'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>StarsRating</H1>
        <P>A 5-stars row rating component</P>
      </Hero>
      <Container>
        <br />
        <br />
        <Window>
          <P>
            The StarsRating component accepts a rating (number) from 0 to 5, and an optional width.
          </P>
          <br />
          <Separator />
          <br />
          <P>A basic implementation with the value of 4.5:</P>
          <br />
          <StarsRating rating={4.5} />
          <br />
          <CodeBlock code={code} />
          <br />
          <P>An implementation with a custom width, and value of 2.5:</P>
          <br />
          <StarsRating rating={2.5} width={80} />
          <br />
          <CodeBlock code={code2} />
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
            ]}
          />
        </Window>
        <br />
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
