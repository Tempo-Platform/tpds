import Hero from '../../tpds/components/hero/Hero'
import { P, H1, Bold } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code/CodeBlock'
import tokens from '../../tpds/tokens/index.json'

export default function DesignTokens() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium={true}>Design Tokens</H1>
      </Hero>
      <Container>
        <PaddingBox>
          <P>
            <Bold>Design Tokens</Bold> are the values of every design element retrieved from the
            original Figma project that are used to configure every aspect of the design system.
          </P>
          <br />
          <P>
            Below are the design tokens of the original{' '}
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
          <CodeBlock code={JSON.stringify(tokens, null, 2)} />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}
