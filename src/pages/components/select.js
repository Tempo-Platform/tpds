/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import Select from '../../../tpds/components/select'
import Hero from '../../../tpds/components/hero/Hero'

const items = [
  { id: 1, label: 'Durward Reynolds', disabled: false },
  { id: 2, label: 'Kenton Towne', disabled: false },
  { id: 3, label: 'Therese Wunsch', disabled: false },
  { id: 4, label: 'Benedict Kessler', disabled: true },
  { id: 5, label: 'Katelyn Rohan', disabled: false },
]

const SelectPage = () => {
  const [selected, setSelected] = useState(items[0])
  return (
    <Layout>
      <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
        <H1 isMedium>Select</H1>
        <P>Simple Select with keyboard control</P>
      </Hero>
      <MainContent>
        <Select items={items} selected={selected} setSelected={setSelected} />
        <br />
        <P>Selected:</P>
        <P isBold>{selected.label}</P>
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default SelectPage

const code = String.raw`import React, { useState } from 'react'
import Select from '@tempoplatform/tpds/components/select'

const items = [
  { id: 1, label: 'Durward Reynolds', disabled: false },
  { id: 2, label: 'Kenton Towne', disabled: false },
  { id: 3, label: 'Therese Wunsch', disabled: false },
  { id: 4, label: 'Benedict Kessler', disabled: true },
  { id: 5, label: 'Katelyn Rohan', disabled: false },
]

const [selected, setSelected] = useState(items[0])

<Select
  items={items}
  selected={selected}
  setSelected={setSelected}
/>`
