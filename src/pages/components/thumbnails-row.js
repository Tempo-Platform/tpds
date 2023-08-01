import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H6, H1 } from '../../tpds/elements/typography'
import { TextInput } from '../../tpds/elements/input'
import { Separator, Container, PaddingBox, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import ThumbnailsRow from '../../tpds/components/thumbnails-row'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Thumbnails Row</H1>
        <P>Island layout for row of rounded thumbnails</P>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <ThumbnailsRow
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
        </PaddingBox>
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
