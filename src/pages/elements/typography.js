import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import {
  P,
  PNano,
  PTiny,
  PSmall,
  PLarge,
  H6,
  H5,
  H4,
  H3,
  H2,
  H1,
  FormLabel,
  FormLabelNano,
  FormLabelTiny,
  FormLabelSmall,
} from '../../tpds/elements/typography'
import { Separator, Container, Window } from '../../tpds/elements/layout'
import Tag from '@/tpds/components/tag'
import CodeBlock from '@/tpds/components/code'

export default function Typography() {
  return (
    <div>
      <Container>
        <PageHeader
          title="Typography"
          subTitle="Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency."
        />
        <Window>
          <H4>Paragraphs</H4>
          <Separator />
          <br />
          <Tag variant="info" label="PNano" className="mb-2" />
          <PNano>The quick brown fox jumps over the lazy dog</PNano>
          <br />
          <Tag variant="info" label="PTiny" className="mb-2" />
          <PTiny>The quick brown fox jumps over the lazy dog</PTiny>
          <br />
          <Tag variant="info" label="PSmall" className="mb-2" />
          <PSmall>The quick brown fox jumps over the lazy dog</PSmall>
          <br />
          <Tag variant="info" label="P" className="mb-2" />
          <P>The quick brown fox jumps over the lazy dog</P>
          <br />
          <Tag variant="info" label="PLarge" className="mb-2" />
          <PLarge>The quick brown fox jumps over the lazy dog</PLarge>
          <br />
          <Separator />
          <br />
          <CodeBlock code={codeParagraphs} />
        </Window>
        <br />
        <br />
        <Window>
          <H4>Headlines</H4>
          <Separator />
          <br />
          <Tag variant="info" label="H6" className="mb-2" />
          <H6>The quick brown fox jumps over the lazy dog</H6>
          <br />
          <Tag variant="info" label="H5" className="mb-2" />
          <H5>The quick brown fox jumps over the lazy dog</H5>
          <br />
          <Tag variant="info" label="H4" className="mb-2" />
          <H4>The quick brown fox jumps over the lazy dog</H4>
          <br />
          <Tag variant="info" label="H3" className="mb-2" />
          <H3>The quick brown fox jumps over the lazy dog</H3>
          <br />
          <Tag variant="info" label="H2" className="mb-2" />
          <H2>The quick brown fox jumps over the lazy dog</H2>
          <br />
          <Tag variant="info" label="H1" className="mb-2" />
          <H1>The quick brown fox jumps over the lazy dog</H1>
          <br />
          <Separator />
          <br />
          <CodeBlock code={codeHeadlines} />
        </Window>
        <br />
        <br />
        <Window>
          <H4>Form Labels</H4>
          <br />
          <P>Typography elements for forms</P>
          <Separator />
          <br />
          <Tag variant="info" label="FormLabelNano" className="mb-2" />
          <FormLabelNano>The quick brown fox jumps over the lazy dog</FormLabelNano>
          <br />
          <Tag variant="info" label="FormLabelTiny" className="mb-2" />
          <FormLabelTiny>The quick brown fox jumps over the lazy dog</FormLabelTiny>
          <br />
          <Tag variant="info" label="FormLabelSmall" className="mb-2" />
          <FormLabelSmall>The quick brown fox jumps over the lazy dog</FormLabelSmall>
          <br />
          <Tag variant="info" label="FormLabel" className="mb-2" />
          <FormLabel>The quick brown fox jumps over the lazy dog</FormLabel>
          <br />
          <Separator />
          <br />
          <CodeBlock code={codeLabel} />
        </Window>
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeLabel = String.raw`import {
  FormLabelNano,
  FormLabelTiny,
  FormLabelSmall,
  FormLabel
} from '@tempoplatform/tpds/elements/typography'

<FormLabelNano>The quick brown fox jumps over the lazy dog</FormLabelNano>
<FormLabelTiny>The quick brown fox jumps over the lazy dog</FormLabelTiny>
<FormLabelSmall>The quick brown fox jumps over the lazy dog</FormLabelSmall>
<FormLabel>The quick brown fox jumps over the lazy dog</FormLabel>`

const codeParagraphs = String.raw`import {
  PNano,
  PTiny,
  PSmall,
  P,
  PLarge
} from '@tempoplatform/tpds/elements/typography'

<PNano>The quick brown fox jumps over the lazy dog</PNano>
<PTiny>The quick brown fox jumps over the lazy dog</PTiny>
<PSmall>The quick brown fox jumps over the lazy dog</PSmall>
<P>The quick brown fox jumps over the lazy dog</P>
<PLarge>The quick brown fox jumps over the lazy dog</PLarge>`

const codeHeadlines = String.raw`import {
  H6,
  H5,
  H4,
  H3,
  H2,
  H1
} from '@tempoplatform/tpds/elements/typography'

<H6>The quick brown fox jumps over the lazy dog</H6>
<H5>The quick brown fox jumps over the lazy dog</H5>
<H4>The quick brown fox jumps over the lazy dog</H4>
<H3>The quick brown fox jumps over the lazy dog</H3>
<H2>The quick brown fox jumps over the lazy dog</H2>
<H1>The quick brown fox jumps over the lazy dog</H1>`
