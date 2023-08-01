import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H6, H1, Medium, Green, Blue, Red } from '../../tpds/elements/typography'
import { Separator, Section, Container, PaddingBox, PageRoot } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function LayoutPage() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Layout</H1>
        <P>
          Core layout elements to create responsive layouts without thinking about the underlying
          breakpoints.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
          <H6>The 3 main layout elements:</H6>
          <br />
          <P isMedium isGreen>
            PageRoot
          </P>
          <br />
          <P>
            Placed at the root of a page, ensures the page always takes the full height of the
            browser window. Give it a background colors to ensure the correct background color fills
            the screen.
          </P>
          <br />
          <P isMedium isRed>
            Section
          </P>
          <br />
          <P>
            Takes the full width of the screen. Usually takes a <Medium isBlue>Container</Medium>{' '}
            inside.
          </P>
          <br />
          <P isMedium isBlue>
            Container
          </P>
          <br />
          <P>
            Is the central column, within a single-column layout. <Medium>Responsive</Medium> by
            default.
          </P>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <H6>Example:</H6>
          <br />
          <P>
            Resize the browser to see the interplay between <Green>PageRoot</Green>,{' '}
            <Red>Section</Red> and <Blue>Container</Blue>:
          </P>
          <br />
          <P>
            (Note how the <Green>PageRoot</Green> takes the full screen height, the{' '}
            <Red>Section</Red> the full width, and the <Blue>Container</Blue> a constrained central
            position.)
          </P>
          <br />
          <PageRoot className="border-2 border-green">
            <Section className="border-2 border-red">
              <Container className="border-2 border-blue">
                <P>
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus
                  porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit
                  tempus porttitor.
                </P>
              </Container>
            </Section>
          </PageRoot>
          <br />
          <CodeBlock code={codeSingleColumnLayout} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeSingleColumnLayout = String.raw`import { PageRoot, Section, Container } from '@tempoplatform/tpds/elements/layout'
import { P } from '@tempoplatform/tpds/elements/typography'

<PageRoot>
  <Section>
    <Container>
      <P>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.</P>
    </Container>
  </Section>
</PageRoot>`
