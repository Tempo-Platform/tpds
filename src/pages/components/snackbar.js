/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P, PLarge } from '../../../tpds/elements/typography'
import Snackbar from '../../../tpds/components/snackbar'
import Hero from '../../../tpds/components/hero/Hero'

const SnackBar = () => (
  <Layout>
    <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
      <H1 isMedium>Snackbar</H1>
      <P>The Snackbar component is used to display notifications in various states.</P>
    </Hero>
    <MainContent>
      <PLarge>Import Snackbar element (adjust path)</PLarge>
      <CodeBlock code={codeImport} />
      <br />
      <br />
      <PLarge>Default state</PLarge>
      <br />
      <Snackbar label="Default" />
      <br />
      <CodeBlock code={codeDefault} />
      <br />
      <PLarge>Active state</PLarge>
      <br />
      <Snackbar label="Success" type="success" />
      <br />
      <CodeBlock code={codeSuccess} />
      <br />
      <PLarge>Info state</PLarge>
      <br />
      <Snackbar label="Info" type="info" />
      <br />
      <CodeBlock code={codeInfo} />
      <br />
      <PLarge>Warning state</PLarge>
      <br />
      <Snackbar label="Warning" type="warning" />
      <br />
      <CodeBlock code={codeWarning} />
      <br />
      <PLarge>Danger state</PLarge>
      <br />
      <Snackbar label="Danger" type="danger" />
      <br />
      <CodeBlock code={codeDanger} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default SnackBar

const codeImport = String.raw`import Snackbar from '@tempoplatform/tpds/components/snackbar'`

const codeDefault = String.raw`<Snackbar
  label='Default'
/>`

const codeSuccess = String.raw`<Snackbar
  type='success'
  label='Success'
/>`

const codeInfo = String.raw`<Snackbar
  type='info'
  label='Info'
/>`

const codeWarning = String.raw`<Snackbar
  type='warning'
  label='Warning'
/>`

const codeDanger = String.raw`<Snackbar
  type='danger'
  label='Danger'
/>`
