import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P } from '../../tpds/elements/typography'
import { PageRoot, Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function WindowPage() {
  return (
    <PageRoot>
      <Container>
        <PageHeader title="Window" subTitle="The standard Window" />
        <P>
          The Window is a dark-mode enabled component. It automatically applies the standard window
          color and has resposive padding out of the box.
        </P>
        <br />
        <br />
        <div className="bg-body p-20">
          <Window>
            <P isBold>Example Window</P>
            <br />
            <P>
              The Window component uses the class "bg-window" as background color, and{' '}
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
        </div>
        <br />
        <br />
        <CodeBlock code={codeBlock} />
        <br />
        <br />
      </Container>
    </PageRoot>
  )
}

const codeBlock = String.raw`import { Window } from '@tempoplatform/tpds/elements/layout'

<Window>
  <H5>Example Window</H5>
  <br />
  <P>The Window is a dark-mode enabled component. It has resposive padding out of the box.</P>
  <br />
  <P>It uses the class "bg-window" as background color, and works best placed over a background using the background color "bg-body".</P>
</Window>`
