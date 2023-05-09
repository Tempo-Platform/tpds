/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import { H1, P, Bold } from '../../../tpds/elements/typography'
import Hero from '../../../tpds/components/hero/Hero'

const Components = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
      <H1 isMedium>Components</H1>
    </Hero>
    <MainContent>
      <P>
        <Bold>Components</Bold> are more complex structures that will often
        use Elements as building blocks, and may include JavaScript logic.
      </P>
    </MainContent>
  </Layout>
)

export default Components
