import React from 'react'
import Hero from '../../../tpds/components/hero/Hero'
import { P, H5, H1 } from '../../../tpds/elements/typography'
import { Container, PaddingBox, Window } from '../../../tpds/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Window</H1>
        <P>The standard Window</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>
            The Window is a dark-mode enabled component. It automatically applies the standard
            window color and has resposive padding out of the box.
          </P>
          <br />
          <Window>
            <H5>Example Window</H5>
            <br />
            <P>
              The Window component uses the tw prop "bg-window" as background color, and{' '}
              <span className="font-medium">
                works best placed over a background using the background color "bg-body".
              </span>
            </P>
            <br />
            <P>
              The Window component also has a thin border around it, and rounded corners that become
              tighter in smller screens.
            </P>
          </Window>
          <br />
          <CodeBlock code={codeBlock} />
          <br />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeBlock = String.raw`import { Window } from '@tempoplatform/tpds/elements/layout'

<Window>
  <H5>Example Window</H5>
  <br />
  <P>The Window is a dark-mode enabled component. It has resposive padding out of the box.</P>
  <br />
  <P>It uses the tw prop "bg-window" as background color, and works best placed over a background using the background color "bg-body".</P>
</Window>`
