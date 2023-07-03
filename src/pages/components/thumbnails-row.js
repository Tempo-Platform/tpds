/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { MainContent } from '../../components/elements/layout'
import CodeBlock from '../../../tpds/components/code/CodeBlock'
import { H1, P } from '../../../tpds/elements/typography'
import ThumbnailsRow from '../../../tpds/components/thumbnails-row'
import Hero from '../../../tpds/components/hero/Hero'

const ThumbnailsRowPage = () => (
  <Layout>
    <Hero tw="bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200">
      <H1 isMedium>Thumbnails Row</H1>
      <P>Island layout for row of rounded thumbnails</P>
    </Hero>
    <MainContent>
      <br />
      <ThumbnailsRow
        images={[
          { url: 'https://picsum.photos/100/200', callBack: () => console.log('clicked thumb 1') },
          { url: 'https://picsum.photos/200/100', callBack: () => console.log('clicked thumb 2') },
          { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 3') },
          { url: 'https://picsum.photos/250/200', callBack: () => console.log('clicked thumb 4') },
        ]}
      />
      <br />
      <CodeBlock code={codeString} />
      <br />
      <br />
    </MainContent>
  </Layout>
)

export default ThumbnailsRowPage

const codeString = String.raw`import ThumbnailsRow from '@tempoplatform/tpds/components/thumbsnails-row'

<ThumbnailsRow
  images={[
    { url: 'https://picsum.photos/100/200', callBack: () => console.log('clicked thumb 1') },
    { url: 'https://picsum.photos/200/100', callBack: () => console.log('clicked thumb 2') },
    { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 3') },
    { url: 'https://picsum.photos/250/200', callBack: () => console.log('clicked thumb 4') },
  ]}
/>`
