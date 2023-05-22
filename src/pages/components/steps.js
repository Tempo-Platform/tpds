/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import Steps from '../../../tpds/components/steps'
import Hero from '../../../tpds/components/hero/Hero'

const StepsPage = () => {
  const currentStep = 1
  const steps = [
    {
      title: 'Main Ad',
    },
    {
      title: 'Add Products',
    },
    {
      title: 'Delivery',
    },
  ]

  return (
    <Layout>
      <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
        <H1 isMedium>Steps</H1>
        <P>Dynamic Steps component</P>
      </Hero>
      <MainContent>
        <br />
        <br />
        <Steps style={{ maxWidth: '500px' }} steps={steps} currentStepIndex={currentStep} />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default StepsPage

const code = String.raw`import Steps from '@tempoplatform/tpds/components/steps'

const currentStep = 1;
const steps = [
  {
    title: 'Main Ad',
  },
  {
    title: 'Add Products',
  },
  {
    title: 'Delivery',
  },
];

<Steps
  steps={steps}
  currentStepIndex={currentStep}
/>`
