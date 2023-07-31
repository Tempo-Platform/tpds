import React from 'react'
import Hero from '../../tpds/components/hero/Hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code/CodeBlock'
import Steps from '../../tpds/components/steps'

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

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Steps</H1>
        <P>Dynamic Steps component</P>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <br />
          <Steps style={{ maxWidth: '500px' }} steps={steps} currentStepIndex={currentStep} />
          <br />
          <br />
          <CodeBlock code={code} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

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
