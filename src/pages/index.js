/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { MainContent } from '../components/elements/layout'
import { Container } from '../../tpds/elements/layout'
import { H1, PLarge, P, H4 } from '../../tpds/elements/typography'
import { Button } from '../../tpds/elements/buttons'
import Hero from '../../tpds/components/hero/Hero'

const IndexPage = () => (
  <Layout>
    <Hero tw='bg-window border-b-2 border-grey-light-scale-400 dark:border-grey-dark-scale-200'>
      <H1 isHeavy>TPDS</H1>
      <H4>The Tempo Platform Design System</H4>
    </Hero>
    <MainContent>
      <PLarge>Welcome to the Tempo Platform Design System</PLarge>
      <br />
      <P>
        1. The original source of this design system is a <a href='https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System' target='_blank' rel="noreferrer">Figma document</a> containing
        all the original styles.
      </P>
      <br />
      <P>
        2. The styles are downloaded and parsed via a local script, which
        stores the <a href='https://css-tricks.com/what-are-design-tokens/' target='_blank' rel="noreferrer">design tokens</a> in
        a local file.
      </P>
      <br />
      <P>
        3. These design tokens are then used to create a
        custom <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer">TailwindCSS</a> configuration 
        file that reflects the Tempo Platform design language.
      </P>
      <br />
      <P>
        4. An <a href='https://www.npmjs.com/package/@tempoplatform/tpds' target='_blank' rel="noreferrer">NPM module</a> containing
        a collection of react elements, components and system files is provided to allow any project to use this design system.
      </P>
      <br />
      <P>
        5. By using this NPM module, we achieve the goal of standardising the visual language across all 
        Tempo Platform projects, as well as accelerating development time.
      </P>
      <br />
      <P>
        6. This project is open-source and free to use for everyone. Contributions are encouraged.
      </P>
      <br />
      <br />
      <br />
      <PLarge>Useful links:</PLarge>
      <P>
        <a href='https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System' target='_blank' rel="noreferrer">
          Figma source
        </a>
      </P>
      <P>
        <a href='https://www.npmjs.com/package/@tempoplatform/tpds' target='_blank' rel="noreferrer">
          NPM Module
        </a>
      </P>
      {/*<P>
        <a href='https://github.com/Tempo-Platform/tpds-boilerplate-webpack' target='_blank' rel="noreferrer">
        Webpack Boilerplate
        </a> (Webpack React app)
      </P>
      <P>
        <a href='https://github.com/Tempo-Platform/tpds-boilerplate-webpack-ts' target='_blank' rel="noreferrer">
        Webpack Boilerpate (TS)
        </a> (TypeScript-ready Webpack React app)
      </P>
      <P>
        <a href='https://github.com/Tempo-Platform/tpds-boilerplate-gatsby' target='_blank' rel="noreferrer">
        Gatsby Boilerplate
        </a> (Gatsby app)
      </P>
      <P>
        <a href='https://github.com/Tempo-Platform/tpds-boilerplate-nextjs' target='_blank' rel="noreferrer">
        Next.js Boilerplate
        </a> (Gatsby app)
      </P>*/}
      <P>
        <a href='https://github.com/Tempo-Platform/tpds' target='_blank' rel="noreferrer">
          Github repo
        </a> of this project
      </P>
      <P>
        <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer">
          TailwindCSS
        </a>
      </P>
      <P>
        <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel="noreferrer">
          twin.macro
        </a>
      </P>
    </MainContent>
  </Layout>
)

export default IndexPage
