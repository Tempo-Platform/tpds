import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Hero</H1>
        <P>A Hero component to show headlines at the start of pages.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>A 'Hero' component, as the one used in this page, seen above this text.</P>
          <br />
          <CodeBlock code={code} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const code = String.raw`import Hero from '@tempoplatform/tpds/components/hero/Hero'
import { P, H1 } from '../../tpds/elements/typography'

<Hero className="bg-window border-b-2 border-body">
  <H1 isMedium>Headline</H1>
  <P>Description.</P>
</Hero>`
