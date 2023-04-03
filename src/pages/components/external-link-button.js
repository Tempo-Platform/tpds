/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, PLarge, P } from '../../../tpds/elements/typography'
import { ExternalLinkButton as ExternalLinkButtonComponent } from '../../../tpds/components/buttons'
import Layout from '../../components/layout'
import Hero from '../../../tpds/components/hero/Hero'

const ExternalLinkButton = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
      <H1 isBold>External Link Button</H1>
      <P>Button for external links</P>
    </Hero>
    <MainContent>
      <PLarge>External link Button with dark-mode ready icon (before)</PLarge>
      <br />
      <P>This button includes an "external link" icon on the right side by default</P>
      <br />
      <ExternalLinkButtonComponent
        label="External Link Button"
      />
      <br />
      <CodeBlock code={codeWithIconBefore} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default ExternalLinkButton

const codeWithIconBefore = String.raw`import { ExternalLinkButton } from '@tempoplatform/tpds/components/buttons'

<ExternalLinkButton
  label="External Link Button"
/>`
