/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P, PLarge, Bold } from '../../../tpds/elements/typography'
import { Separator } from '../../../tpds/elements/layout'
import {BreadcrumbsBar} from '../../../tpds/components/navigation'
import { Link }from 'gatsby'
import Hero from '../../../tpds/components/hero/Hero'
import PropsTable from '../../../tpds/components/table/PropsTable'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

function BreadcrumbsPage() {
  return (
    <Layout>
      <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
        <H1 isMedium>Breadcrumbs</H1>
        <P>Generic breadcrumbs bar</P>
      </Hero>
      <MainContent>
        <PLarge>
          Simple breadcrumbs bar for internal site navigation
        </PLarge>
        <br />
        <Separator tw='mb-[2px]' />
        <BreadcrumbsBar
          links={breadcrumbLinks}
          linkClass={Link}
        />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          title='Breadcrumbs Props'
          items={[
            {
              propName: 'links',
              type: 'Array',
              default: "null",
              required: 'required',
              description: 'The array of links you intend to display, ads shown in the example above'
            },
            {
              propName: 'linkClass',
              type: 'Class',
              default: "null",
              required: 'required',
              description: 'Pass the { Link } class you are using in your site eg. from "react-router-dom" or "gatsby"'
            },
          ]}
        />
      </MainContent>
    </Layout>
  )
}

export default BreadcrumbsPage

const code = String.raw`import BreadcrumbsBar from '@tempoplatform/tpds/components/navigation/BreadcrumbsBar'
import { Link } from 'gatsby'

const breadcrumbLinks = [
  { url: "/launchpad", label: "Launchpad" },
  { url: "/fleet", label: "Fleet" },
  { url: "/strategies", label: "Strategies" },
  { url: "/components/navigation/breadcrumbs", label: "Backtests" },
]

return (
  <BreadcrumbsBar
    links={breadcrumbLinks}
    linkClass={Link}
  />
)`
