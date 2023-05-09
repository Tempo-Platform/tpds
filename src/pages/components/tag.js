/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../tpds/elements/typography'
import { Separator } from '../../../tpds/elements/layout'
import Tag from '../../../tpds/components/tag'
import Hero from '../../../tpds/components/hero/Hero'

const TagPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
      <H1 isMedium>Tag</H1>
      <P>Simple Tag component with multiple states</P>
    </Hero>
    <MainContent>
      <br />
      <br />
      <PLarge>Default</PLarge>
      <br />
      <Tag
        label='Default'
        variant='default'
      />
      <br />
      <br />
      <CodeBlock code={codeDefault} />
      <br />
      <br />
      <PLarge>Uppercase</PLarge>
      <br />
      <Tag
        isUppercase={true}
        label='UPPERCASE'
        variant='default'
      />
      <br />
      <br />
      <CodeBlock code={codeUppercase} />
      <br />
      <br />
      <PLarge>Success</PLarge>
      <br />
      <Tag
        label='Success'
        variant='success'
      />
      <br />
      <br />
      <CodeBlock code={codeSuccess} />
      <br />
      <br />
      <PLarge>Info</PLarge>
      <br />
      <Tag
        label='Info'
        variant='info'
      />
      <br />
      <br />
      <CodeBlock code={codeInfo} />
      <br />
      <br />
      <PLarge>Warning</PLarge>
      <br />
      <Tag
        label='Warning'
        variant='warning'
      />
      <br />
      <br />
      <CodeBlock code={codeWarning} />
      <br />
      <br />
      <PLarge>Danger</PLarge>
      <br />
      <Tag
        label='Danger'
        variant='danger'
      />
      <br />
      <br />
      <CodeBlock code={codeDanger} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default TagPage


const codeDefault = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Default'
  variant='default'
/>`

const codeUppercase = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  isUppercase={true}
  label='UPPERCASE'
  variant='default'
/>`

const codeInfo = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Info'
  variant='info'
/>`

const codeSuccess = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Success'
  variant='success'
/>`

const codeWarning = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Warning'
  variant='warning'
/>`

const codeDanger = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Danger'
  variant='danger'
/>`
