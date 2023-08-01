import Hero from '../tpds/components/hero'
import { P, H1 } from '../tpds/elements/typography'
import { Container, PaddingBox } from '../tpds/elements/layout'
import CodeBlock from '../tpds/components/code'
import configJSON from '../tpds/system/tailwind.config.js'

export default function TailwindCSSConfig() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>TailwindCSS config</H1>
        <P>Ready-to-use TailwindCSS configuration for your project.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>
            Grab this TailwindCSS configuration JSON to quickly strap up a new project using the
            Tempo design system design tokens.
          </P>
          <br />
          <P>
            Create a new file with the name <span tw="font-mono">tailwind.config.js</span> in the
            root of your project to quickly strap up a new project and paste the below configuration
            in it.
          </P>
          <br />
          <P>
            Follow the{' '}
            <a
              tw="font-medium underline"
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noreferrer"
            >
              official instructions
            </a>{' '}
            to install TailwindCSS in your project.
          </P>
          <br />
          <P>
            Note: Some frontend frameworks may require additional configuration to work with
            TailwindCSS.
          </P>
          <br />
          <CodeBlock code={JSON.stringify(configJSON, null, 2)} />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}
