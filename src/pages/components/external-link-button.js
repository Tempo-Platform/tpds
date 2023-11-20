import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P } from '../../tpds/elements/typography'
import { ExternalLinkButton as ExternalLinkButtonComponent } from '../../tpds/components/buttons'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title="ExternalLinkButton" subTitle="Button for external links" />
        <P>A helper component to quickly create a button containing a hyperlink icon.</P>
        <br />
        <ExternalLinkButtonComponent label="External Link Button" />
        <br />
        <CodeBlock code={codeWithIconBefore} />
        <br />
        <br />
      </Container>
    </div>
  )
}
const codeWithIconBefore = String.raw`import { ExternalLinkButton } from '@tempoplatform/tpds/components/buttons'

<ExternalLinkButton
  label="External Link Button"
/>`
