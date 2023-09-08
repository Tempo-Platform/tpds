import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Separator, Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Spinner from '../../tpds/components/spinner'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Spinner</H1>
        <P>Versatile SVG-based spinner component to use in loading scenarios</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>Default (grey, 40px radius)</P>
          <br />
          <Spinner />
          <br />
          <br />
          <CodeBlock code={codeSpinnerDefault} />
          <br />
          <br />
          <P>Custom: red, 50px radius</P>
          <br />
          <Spinner color="red" radius={50} />
          <br />
          <br />
          <CodeBlock code={codeSpinnerRed} />
          <br />
          <br />
          <P>Custom: green, 40px radius</P>
          <br />
          <Spinner color="green" radius={40} />
          <br />
          <br />
          <CodeBlock code={codeSpinnerGreen} />
          <br />
          <br />
          <br />
          <br />
          <P>Custom: blue, 40px radius, 1800ms loop duration</P>
          <br />
          <Spinner color="blue" radius={40} duration={1800} />
          <br />
          <br />
          <CodeBlock code={codeSpinnerBlueSlow} />
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PropsTable
            title="Spinner Props"
            items={[
              {
                propName: 'color',
                type: 'String',
                default: "' '",
                required: 'no',
                description:
                  "Can be 'red', 'blue', 'green', 'orange', 'purple', 'yellow', or 'magenta'. Default will be white on dark mode and black on light mode.",
              },
              {
                propName: 'radius',
                type: 'Number',
                default: '40',
                required: 'no',
                description: 'The radius of the spinner',
              },
              {
                propName: 'duration',
                type: 'Number',
                default: '900',
                required: 'no',
                description: 'Duration of a single spinner rotation in milliseconds',
              },
              {
                propName: 'strokeWidth',
                type: 'String',
                default: '3',
                required: 'no',
                description: 'The thickness of the spinner SVG stroke',
              },
            ]}
          />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeSpinnerDefault = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  radius={50}
/>`

const codeSpinnerRed = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  color='red'
  radius={50}
/>`

const codeSpinnerGreen = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  color='green'
  radius={40}
/>`

const codeSpinnerBlueSlow = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  color='blue'
  radius={40}
  duration={1800}
/>`
