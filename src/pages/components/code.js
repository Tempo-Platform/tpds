/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import { MainContent } from '../../components/elements/layout'
import { H1, H4, P } from '../../../tpds/elements/typography'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import Layout from '../../components/layout'
import Hero from '../../../tpds/components/hero/Hero'

function CodeBlockPage() {
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
        <H1 isBold>Code</H1>
        <P>Code components</P>
      </Hero>
      <MainContent>
        <H4>CodeBlock</H4>
        <P>Show blocks of code with Tempo styled syntax highlighting.</P>
        <br />
        <CodeBlock
          code={codeblockCode}
        />
        <br />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default CodeBlockPage

const codeblockCode = `import CodeBlock from '@tempoplatform/tpds/components/code/CodeBlock'\n
// declare the code to pass to the component using String.raw:
const myCodeContent = String.raw\`<CodeBlock
  code={myCodeContent}
/>\`

// pass it as a prop to the component:
<CodeBlock
  code={myCodeContent}
/>`