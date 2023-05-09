/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { MainContent } from '../../components/elements/layout'
import {
  P,
  PSmall,
  PTiny,
  H1,
  H2,
  H4,
  H6,
  H5,
  LabelTiny
} from '../../../tpds/elements/typography'
import { PageRoot, Separator } from '../../../tpds/elements/layout'
import Hero from '../../../tpds/components/hero/Hero'
import { CalloutInfo } from '../../../tpds/components/callout'

const Typography = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
      <H1 isMedium>Typography</H1>
    </Hero>
    <MainContent>
      <br />
      <br />
      <H5 isBold>Font stacks</H5>
      <Separator />
      <br />
      <br />
      <P>You can control the typeface of text using the font family utilities.</P>
      <br />
      <br />
      <br />
      <PSmall isBold>Font-sans</PSmall>
      <br />
      <H2 isBold tw='leading-tight'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</H2>
      <br />
      <br />
      <br />
      <PSmall>Type weights</PSmall>
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-light border-solid border-b-2 border-body'>Graphik Light</H4>
          <H4 tw='py-4 font-normal border-solid border-b-2 border-body'>Graphik Regular</H4>
          <H4 tw='py-4 font-medium border-solid border-b-2 border-body'>Graphik Medium</H4>
          <H4 tw='py-4 font-bold border-solid border-b-2 border-body'>Graphik Bold</H4>
          <H4 tw='py-4 font-black border-solid border-b-2 border-body'>Graphik Black</H4>
        </div>
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-light border-solid border-b-2 border-body italic'>Graphik Light Italic</H4>
          <H4 tw='py-4 font-normal border-solid border-b-2 border-body italic'>Graphik Regular Italic</H4>
          <H4 tw='py-4 font-medium border-solid border-b-2 border-body italic'>Graphik Medium Italic</H4>
          <H4 tw='py-4 font-bold border-solid border-b-2 border-body italic'>Graphik Bold Italic</H4>
          <H4 tw='py-4 font-black border-solid border-b-2 border-body italic'>Graphik Black Italic</H4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <PSmall isBold>Font-mono</PSmall>
      <br />
      <H2 isBold tw='leading-tight font-mono'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</H2>
      <br />
      <br />
      <PSmall>Type weights</PSmall>
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-mono font-normal border-solid border-b-2 border-body'>SF Mono Regular</H4>
          <H4 tw='py-4 font-mono font-bold border-solid border-b-2 border-body'>SF Mono Bold</H4>
        </div>
        <div tw="grid col-span-12 md:col-span-6">
          <H4 tw='py-4 font-mono font-normal border-solid border-b-2 border-body italic'>SF Mono Reg. Italic</H4>
          <H4 tw='py-4 font-mono font-bold border-solid border-b-2 border-body italic'>SF Mono Bold Italic</H4>
        </div>
      </div>
      <br />
      <br />
      <CalloutInfo
        title='Download'
        text={<span>Get access to our font pack in the <Link to='/downloads#typography'>downloads</Link> section.</span>}
      />
      <br />
      <br />
      <br />
      <br />
      <H5 isBold>Font</H5>
      <Separator />
      <br />
      <br />
      <P>Use these font weights to change how thin or heavy the weight is for our font.</P>
      <br />
      <br />
      <br />
      <div tw="grid grid-cols-12 gap-4 bg-window">
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>Example</PSmall>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>Description</PSmall>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>Transform</PSmall>
        </div>
      </div>
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-4">
          <H4 isLight tw='py-2 pl-3'>Aa</H4>
          <PTiny tw='py-2 pl-3 font-medium'>Graphik Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PTiny tw='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>{'<H4 isLight>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-4">
          <H4 tw='py-2 pl-3'>Aa</H4>
          <PTiny tw='py-2 pl-3 font-medium'>Graphik Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PTiny tw='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>None (default)</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-4">
          <H4 isMedium tw='py-2 pl-3'>Aa</H4>
          <PTiny tw='py-2 pl-3 font-medium'>Graphik Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PTiny tw='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>{'<H4 isMedium>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-4">
          <H4 isBold tw='py-2 pl-3'>Aa</H4>
          <PTiny tw='py-2 pl-3 font-medium'>Graphik Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PTiny tw='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>{'<H4 isBold>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-4">
          <H4 isExtraBold tw='py-2 pl-3'>Aa</H4>
          <PTiny tw='py-2 pl-3 font-medium'>Graphik Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PTiny tw='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>{'<H4 isExtraBold>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
      <br />
      <div tw="grid grid-cols-12 gap-4">
        <div tw="grid col-span-12 md:col-span-4">
          <H4 isHeavy tw='py-2 pl-3'>Aa</H4>
          <PTiny tw='py-2 pl-3 font-medium'>Graphik Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PTiny tw='py-2 pl-3 font-medium'>Default font-family for Tempo DSM products</PTiny>
        </div>
        <div tw="grid col-span-12 md:col-span-4">
          <PSmall tw='py-2 pl-3 font-medium'>{'<H4 isHeavy>Aa</H4>'}</PSmall>
        </div>
      </div>
      <br />
    </MainContent>
  </Layout>
)

export default Typography
