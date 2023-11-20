import PageHeader from '../../lib/components/PageHeader'
import { P, Bold } from '../../tpds/elements/typography'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import tokens from '../../tpds/tokens/index.json'

export default function DesignTokens() {
  return (
    <div>
      <Container>
        <PageHeader title="Design Tokens" />
        <P>
          <Bold>Design Tokens</Bold> are the values of every design element retrieved from the
          original Figma project that are used to configure every aspect of the design system.
        </P>
        <br />
        <P>
          Below are the latest TPDS design tokens of the{' '}
          <a
            href="https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System"
            target="_blank"
            rel="noreferrer"
          >
            TPDS Figma document
          </a>
          .
        </P>
        <br />
        <br />
        <CodeBlock code={JSON.stringify(tokens, null, 2)} />
        <br />
        <br />
      </Container>
    </div>
  )
}
