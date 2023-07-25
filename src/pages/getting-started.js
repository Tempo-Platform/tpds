import Hero from '../tpds/components/hero/Hero'
import { P, PLarge, H1 } from '../tpds/elements/typography'
import { Container, PaddingBox } from '../tpds/elements/layout'
//import CodeBlock from '../../../tpds/components/code/CodeBlock'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Getting Started</H1>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <PLarge>Coming soon!</PLarge>
          {/* <P>Choose a project type:</P>
          <br />
          <P>
            <a
              href="https://github.com/Tempo-Platform/tpds-boilerplate-webpack"
              target="_blank"
              rel="noreferrer"
            >
              Webpack
            </a>
          </P>
          <br />
          <P>
            <a
              href="https://github.com/Tempo-Platform/tpds-boilerplate-webpack-ts"
              target="_blank"
              rel="noreferrer"
            >
              Webpack (TypeScript)
            </a>
          </P>
          <br />
          <P>
            <a
              href="https://github.com/Tempo-Platform/tpds-boilerplate-gatsby"
              target="_blank"
              rel="noreferrer"
            >
              Gatsby
            </a>
          </P>
          <br />
          <P>
            <a
              href="https://github.com/Tempo-Platform/tpds-boilerplate-nextjs"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </a>
          </P>
          <br />
          <P>
            These boilerplate projects have the TPDS Design System pre-installed and everything
            already set up. They contain 2 example pages and demonstrate the usage of typography,
            buttons and navigation.
          </P>
          <br />
          <br />
          <PLarge>You should be familiar with the following libraries:</PLarge>
          <a href="https://github.com/ben-rogerson/twin.macro" target="_blank" rel="noreferrer">
            <P isUnderline>twin.macro</P>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <P isUnderline>TailwindCSS</P>
          </a>
          <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
            <P isUnderline>styled-components</P>
          </a> */}
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}
