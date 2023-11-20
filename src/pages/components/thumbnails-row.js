import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import ThumbnailsRow from '../../tpds/components/thumbnails-row'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title="Thumbnails Row" subTitle="Island layout for row of rounded thumbnails" />
        <ThumbnailsRow
          objectFit="contain"
          images={[
            {
              url: 'https://picsum.photos/100/200',
              callBack: () => console.log('clicked thumb 1'),
            },
            {
              url: 'https://picsum.photos/200/100',
              callBack: () => console.log('clicked thumb 2'),
            },
            {
              url: 'https://picsum.photos/200/200',
              callBack: () => console.log('clicked thumb 3'),
            },
            {
              url: 'https://picsum.photos/250/200',
              callBack: () => console.log('clicked thumb 4'),
            },
          ]}
        />
        <br />
        <CodeBlock code={codeString} />
        <br />
        <br />
        <PropsTable
          title="Button Props"
          items={[
            {
              propName: 'images',
              type: 'Array',
              default: 'null',
              required: 'yes',
              description: 'The array of images to display.',
            },
            {
              propName: 'objectFit',
              type: 'string',
              default: 'contain',
              required: 'no',
              description: 'The object-fit property value to apply to the images.',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeString = String.raw`import ThumbnailsRow from '@tempoplatform/tpds/components/thumbsnails-row'

<ThumbnailsRow
  images={[
    { url: 'https://picsum.photos/100/200', callBack: () => console.log('clicked thumb 1') },
    { url: 'https://picsum.photos/200/100', callBack: () => console.log('clicked thumb 2') },
    { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 3') },
    { url: 'https://picsum.photos/250/200', callBack: () => console.log('clicked thumb 4') },
  ]}
/>`
