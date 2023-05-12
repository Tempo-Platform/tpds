/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import tw from 'twin.macro'
import React, { useState } from 'react'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import ExpandableSection from '../../../tpds/components/mobile/expandable-section'
import Hero from '../../../tpds/components/hero/Hero'

const ExpandableSectionPage = () => {
  const [active, setActive] = useState(true)
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
        <H1 isMedium>ExpandableSection</H1>
        <P>A box that expands and contracts on tap.</P>
      </Hero>
      <MainContent>
        <br />
        <br />
        <ExpandableSection
            title='Box title'
            children={
                <div>
                    <P>Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</P>
                    <br />
                    <P>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.</P>
                </div>                    
            }
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default ExpandableSectionPage


const code = String.raw`import ExpandableSection from '@tempoplatform/tpds/components/mobile/expandable-section'
import { P } from '../../../tpds/elements/typography'

<ExpandableSection
    title='Box title'
    children={
        <div>
            <P>Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</P>
            <br />
            <P>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.</P>
        </div>                    
    }
/>`
