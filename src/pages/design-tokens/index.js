/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, Bold } from '../../../tpds/elements/typography'
import { Window } from '../../../tpds/elements/layout'
import Hero from '../../../tpds/components/hero/Hero'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import tokens from '../../../tpds/tokens/index.json'

const DesignTokens = () => (
  <Layout>
    <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
      <H1 isMedium>Design Tokens</H1>
    </Hero>
    <MainContent>
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
    </MainContent>
  </Layout>
)

export default DesignTokens
