/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
//import React from 'react'
//import { MainContent } from '../../components/elements/layout'
import Hero from '@/tpds/components/hero/Hero'
import {
  P,
  PNano,
  PTiny,
  PSmall,
  PLarge,
  //PrimaryColor,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  FormLabel,
  FormLabelNano,
  FormLabelTiny,
  FormLabelSmall,
} from '@/tpds/elements/typography'
import { Separator, Container, PaddingBox } from '@/tpds/elements/layout'
//import CodeBlock from '@/tpds/components/code/CodeBlock'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>FAQ</H1>
        <P>
          Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
          <H6>What is this?</H6>
          <P>
            The code and documentation for the{' '}
            <a href="https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System">
              Tempo Platform Design System
            </a>
          </P>
          <br />
          <H6>Who can use this?</H6>
          <P>Everyone. This is an open-source project</P>
          <br />
          <H6>How can I use it?</H6>
          <P>
            If you are a developer, you will want to install the related NPM module:{' '}
            <a href="https://www.npmjs.com/package/@tempoplatform/tpds">@tempoplatform/tpds</a>.
            Then have a look at the elements and components pages to learn how to use the specific
            parts.
          </P>
          <P>
            If you are a designer, have a look at the <a href="/guidelines">Guidelines</a> and{' '}
            <a href="/design-tokens">Design tokens</a>.
          </P>
          <br />
          <H6>Can I contribute?</H6>
          <P>
            Yes. Check out the <a href="https://github.com/Tempo/dsm">project</a> and play around.
          </P>
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}
