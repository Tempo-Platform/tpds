import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H6, H1 } from '../../tpds/elements/typography'
import { TextInput } from '../../tpds/elements/input'
import { Separator, Container, PaddingBox, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Headline</H1>
        <P>Description.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <P>Description</P>
          <br />
          <CodeBlock code={code} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const code = String.raw`<TextInput
  isValid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`
