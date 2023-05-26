/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { theme } from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../tpds/elements/typography'
import { Separator } from '../../../tpds/elements/layout'
import Spinner from '../../../tpds/components/spinner'
import Hero from '../../../tpds/components/hero/Hero'

const SpinnerPage = () => (
  <Layout>
    <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
      <H1 isMedium>Spinner</H1>
      <P>Versatile SVG-based spinner component to use in loading scenarios</P>
    </Hero>
    <MainContent>
      <PLarge>Default color: black & white. Custom colors: green, red, orange, blue. </PLarge>
      <br />
      <br />
      <Separator />
      <br />
      <br />
      <br />
      <PLarge>Default (grey, 40px radius)</PLarge>
      <br />
      <Spinner />
      <br />
      <br />
      <CodeBlock code={codeSpinnerDefault} />
      <br />
      <br />
      <PLarge>Custom: red, 50px radius</PLarge>
      <br />
      <Spinner color="red" radius={50} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerRed} />
      <br />
      <br />
      <PLarge>Custom: green, 40px radius</PLarge>
      <br />
      <Spinner color="green" radius={40} />
      <br />
      <br />
      <CodeBlock code={codeSpinnerGreen} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default SpinnerPage

const codeSpinnerDefault = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  radius={50}
/>`

const codeSpinnerRed = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  color='red'
  radius={50}
/>`

const codeSpinnerGreen = String.raw`import Spinner from '@tempoplatform/tpds/components/spinner'

<Spinner
  color='green'
  radius={40}
/>`
