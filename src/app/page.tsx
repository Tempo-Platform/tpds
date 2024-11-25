import PageHeader from '@/lib/components/PageHeader'
import { Section, Container } from '@tpds/elements/layout'
import { P } from '@tpds/elements/typography'
import Link from 'next/link'

export default function Page() {
  return (
    <Section>
      <Container className="text-white">
        <PageHeader title="TPDS" subTitle="The Tempo Platform Design System" />
        <P>A unifying digital design system that enables consistency at scale.</P>
        <br />

        <P isBold>Source</P>
        <P className="text-secondary">
          The original source of this design system is a{' '}
          <a
            href="https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System"
            target="_blank"
            rel="noreferrer"
          >
            Figma document
          </a>{' '}
          containing all the original styles.
        </P>

        <br />
        <P isBold>Design Tokens</P>
        <P className="text-secondary">
          2. The styles are downloaded and parsed via a local script, which stores the{' '}
          <Link href="/design-tokens">design tokens</Link> in a local file.
        </P>

        <br />
        <P isBold>TailwindCSS configuration</P>
        <P className="text-secondary">
          3. These design tokens are then used to create a custom{' '}
          <Link href="/tailwindcss-config">TailwindCSS configuration</Link> file that reflects the
          Tempo Platform design language.
        </P>

        <br />
        <P isBold>NPM Module</P>
        <P className="text-secondary">
          4. An{' '}
          <a
            href="https://www.npmjs.com/package/@tempoplatform/tpds"
            target="_blank"
            rel="noreferrer"
          >
            NPM module
          </a>{' '}
          containing a collection of react elements, components and system files is provided to
          allow any project to use this design system.
        </P>

        <br />
        <P isBold>Aim</P>
        <P className="text-secondary">
          To achieve consistency and standardisation the Tempo visual language across all Tempo
          projects, as well as accelerating frontend development time.
        </P>
        <br />
        <P isBold>License</P>
        <P className="text-secondary">
          6. This project is open-source and free to use for everyone. Contributions are encouraged.
        </P>
        <br />
        <br />
        <br />
        <P isBold>Useful links:</P>
        <P>
          <a
            href="https://www.figma.com/file/HLmNcoB2XSKbv5dKJd2JpK/Tempo-Platform-Design-System"
            target="_blank"
            rel="noreferrer"
          >
            Figma source
          </a>
        </P>
        <P>
          <a
            href="https://www.npmjs.com/package/@tempoplatform/tpds"
            target="_blank"
            rel="noreferrer"
          >
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
          <a href="https://github.com/Tempo-Platform/tpds" target="_blank" rel="noreferrer">
            Github repo
          </a>{' '}
          of this project
        </P>
        <P>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            TailwindCSS
          </a>
        </P>
        <br />
        <br />
      </Container>
    </Section>
  )
}
