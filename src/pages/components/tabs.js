/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import Tabs from '../../../tpds/components/tabs'
import Hero from '../../../tpds/components/hero/Hero'

const TabsPage = () => {
  return(
    <Layout>
      <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
        <H1 isBold>Tabs</H1>
        <P>Tabs component with keyboard control</P>
      </Hero>
      <MainContent>
        <Tabs
          items={{
            "Tab 1": <div tw='border border-red p-sm'>Tab 1 content</div>,
            "Tab 2": <div tw='border border-blue p-sm'>Tab 2 content</div>,
            "Tab 3": <div tw='border border-yellow p-sm'>Tab 3 content</div>
          }}
          tabGroupProps={{}}
        />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default TabsPage

const code = String.raw`import React from 'react'
import tw from 'twin.macro'
import Tabs from '../../../tpds/components/tabs'

<Tabs
  items={{
    "Tab 1": <div tw='border border-red p-sm'>Tab 1 content</div>,
    "Tab 2": <div tw='border border-blue p-sm'>Tab 2 content</div>,
    "Tab 3": <div tw='border border-yellow p-sm'>Tab 3 content</div>
  }}
  tabGroupProps={{}}
/>`
