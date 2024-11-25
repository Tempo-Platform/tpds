import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import Steps from '@tpds/components/steps'

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
      <Container>
        <PageHeader title='Steps' subTitle='Dynamic Steps component' />
        <Steps style={{ maxWidth: '500px' }} steps={steps} currentStepIndex={currentStep} />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
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
