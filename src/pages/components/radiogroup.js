/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import RadioGroup from '../../../tpds/components/radiogroup'
import Hero from '../../../tpds/components/hero/Hero'

const items = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
]

const RadioGroupPage = () => {
  return (
    <Layout>
      <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
        <H1 isMedium>Radio Group</H1>
        <P>Keyboard-ready radio group component</P>
      </Hero>
      <MainContent>
        <br />
        <RadioGroup
          screenReaderLabel="Server size"
          items={[
            {
              name: 'Startup',
              ram: '12GB',
              cpus: '6 CPUs',
              disk: '160 GB SSD disk',
            },
            {
              name: 'Business',
              ram: '16GB',
              cpus: '8 CPUs',
              disk: '512 GB SSD disk',
            },
            {
              name: 'Enterprise',
              ram: '32GB',
              cpus: '12 CPUs',
              disk: '1024 GB SSD disk',
            },
          ]}
        />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default RadioGroupPage

const code = String.raw`import React from 'react'
import RadioGroup from '@tempoplatform/tpds/components/radiogroup'

<RadioGroup
  screenReaderLabel="Server size"
  items={[
    {
      name: 'Startup',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk',
    },
    {
      name: 'Business',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk',
    },
    {
      name: 'Enterprise',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk',
    },
  ]}
/>`
