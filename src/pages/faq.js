import PageHeader from '../lib/components/PageHeader'
import { PSmall, H6, H1 } from '../tpds/elements/typography'
import { Container, PaddingBox } from '../tpds/elements/layout'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title="FAQ" />
        <H6>What is this?</H6>
        <PSmall className="text-secondary">
          The code and documentation for the{' '}
          <a href="https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System">
            Tempo Platform Design System
          </a>
        </PSmall>
        <br />
        <H6>Who can use this?</H6>
        <PSmall className="text-secondary">Everyone. This is an open-source project</PSmall>
        <br />
        <H6>How can I use it?</H6>
        <PSmall className="text-secondary">
          If you are a developer, you will want to install the related NPM module:{' '}
          <a href="https://www.npmjs.com/package/@tempoplatform/tpds">@tempoplatform/tpds</a>. Then
          have a look at the elements and components pages to learn how to use the specific parts.
        </PSmall>
        <PSmall className="text-secondary">
          If you are a designer, have a look at the <a href="/guidelines">Guidelines</a> and{' '}
          <Link href="/design-tokens">Design tokens</Link>.
        </PSmall>
        <br />
        <H6>Can I contribute?</H6>
        <PSmall className="text-secondary">
          Yes. Check out the <a href="https://github.com/Tempo/dsm">project</a> and play around.
        </PSmall>
        <br />
        <br />
      </Container>
    </div>
  )
}
