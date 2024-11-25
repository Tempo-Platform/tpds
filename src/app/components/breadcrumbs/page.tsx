import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title='Headline' subTitle='Description.' />
        <P>Description</P>
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
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
