import React from 'react'
import Hero from '../../tpds/components/hero'
import { H1, P } from '../../tpds/elements/typography'
import { ExternalLinkButton as ExternalLinkButtonComponent } from '../../tpds/components/buttons'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>ExternalLinkButton</H1>
        <P>Button for external links</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>A helper component to quickly create a button containing a hyperlink icon.</P>
          <br />
          <ExternalLinkButtonComponent label="External Link Button" />
          <br />
          <CodeBlock code={codeWithIconBefore} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}
const codeWithIconBefore = String.raw`import { ExternalLinkButton } from '@tempoplatform/tpds/components/buttons'

<ExternalLinkButton
  label="External Link Button"
/>`
