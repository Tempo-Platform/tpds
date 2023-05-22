/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import { Separator } from '../../../tpds/elements/layout'
import Switch from '../../../tpds/components/switch'
import Hero from '../../../tpds/components/hero/Hero'

const SwitchPage = () => {
  const [active, setActive] = useState(true)
  return (
    <Layout>
      <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
        <H1 isMedium>Switch</H1>
        <P>Simple binary switch control</P>
      </Hero>
      <MainContent>
        <br />
        <br />
        <Switch active={active} onChange={() => setActive(!active)} />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </MainContent>
    </Layout>
  )
}

export default SwitchPage

const code = String.raw`import React, { useState } from 'react'
import Switch from '@tempoplatform/tpds/components/switch'

const [active, setActive] = useState(true)

<Switch
  active={active}
  onChange={() => setActive(!active)}
/>`
