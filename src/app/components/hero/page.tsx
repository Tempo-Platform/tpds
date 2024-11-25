import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import Hero from '@tpds/components/hero'
import { P, H1 } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'

export default function Page() {
  return (
    <div>
      <Hero className='bg-grey-light-scale-500 dark:bg-grey-dark-scale-500'>
        <H1 isMedium>Hero Title</H1>
        <P>Hero subtitle</P>
      </Hero>
      <Container>
        <PageHeader title='Hero' subTitle='A Hero component to show headlines at the start of pages.' />
        <P>A 'Hero' component, as the one used in this page, displayed above.</P>
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import Hero from '@tempoplatform/tpds/components/hero/Hero'
import { P, H1 } from '../../tpds/elements/typography'

<Hero className="bg-grey-light-scale-500 dark:bg-grey-dark-scale-500">
  <H1 isMedium>Headline</H1>
  <P>Description.</P>
</Hero>`
