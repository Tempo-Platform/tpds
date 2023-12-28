import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container, Separator, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import ThumbnailsRow from '../../tpds/components/thumbnails-row'
import Switch from '../../tpds/components/switch'
import PropsTable from '../../tpds/components/props-table'
import { P, PSmall } from '../../tpds/elements/typography'
import { Button } from '../../tpds/elements/buttons'
import ColorPicker from '../../tpds/components/color-picker'
import Slider from 'rc-slider'

const imagesData = [
  {
    url: 'https://picsum.photos/200/200?c=1',
    callBack: () => console.log('clicked thumb 1'),
  },
  {
    url: 'https://picsum.photos/200/200?c=2',
    callBack: () => console.log('clicked thumb 2'),
  },
  {
    url: 'https://picsum.photos/200/200?c=3',
    callBack: () => console.log('clicked thumb 3'),
  },
  {
    url: 'https://picsum.photos/200/200?c=4',
    callBack: () => console.log('clicked thumb 4'),
  },
  {
    url: 'https://picsum.photos/200/200?c=5',
    callBack: () => console.log('clicked thumb 4'),
  },
  {
    url: 'https://picsum.photos/200/200?c=6',
    callBack: () => console.log('clicked thumb 4'),
  },
]

export default function Page() {
  const [numImages, setNumImages] = React.useState(4)
  const [removeEnclosingIsland, setRemoveEnclosingIsland] = React.useState(false)
  const [backgroundColor, setBackgroundColor] = React.useState('#ffffff45')
  const [thumbsBorderRadius, setThumbsBorderRadius] = React.useState(6)
  const [thumbnailsBackgroundColor, setThumbnailsBackgroundColor] = React.useState('#0000005c')
  const [thumbsPadding, setThumbsPadding] = React.useState(3)
  const images = imagesData.slice(0, numImages)

  const codeString = String.raw`import ThumbnailsRow from '@tempoplatform/tpds/components/thumbsnails-row'

<ThumbnailsRow
  backgroundColor='${backgroundColor}'
  thumbnailsBackgroundColor='${thumbnailsBackgroundColor}'
  thumbnailsBorderRadius={${thumbsBorderRadius}}
  thumbnailsPadding={${thumbsPadding}}
  removeEnclosingIsland={${removeEnclosingIsland}}
  items={[
    { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 1') },
    { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 2') },
    { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 3') },
    { url: 'https://picsum.photos/200/200', callBack: () => console.log('clicked thumb 4') },
  ]}
/>`

  return (
    <div>
      <Container>
        <PageHeader title="Thumbnails Row" subTitle="Island layout for row of rounded thumbnails" />
        <P>Configurable row of clickable thumbnails in "island" style. Accepts up to 6 items.</P>
        <Separator />
        <br />
        <P>
          You can tweak the style using the controls below. To try a different background image,
          refresh the page. The code example below will change as you tweak the values.
        </P>
        <br />
        <div className="grid grid-cols-2 gap-10">
          <div
            className="w-[300px] h-[520px] relative bg-white/40 dark:bg-grey-dark-scale-500 border border-window"
            style={{
              backgroundImage: `url(${'https://picsum.photos/300/520?c=2'})`,
            }}
          >
            <ThumbnailsRow
              backgroundColor={backgroundColor}
              thumbnailsBackgroundColor={thumbnailsBackgroundColor}
              thumbnailsBorderRadius={thumbsBorderRadius}
              thumbnailsPadding={thumbsPadding}
              removeEnclosingIsland={removeEnclosingIsland}
              items={images}
            />
          </div>
          <Window>
            <PSmall isBold className="mb-6 text-primary">
              CONTROLS
            </PSmall>
            <PSmall isMedium className="mb-1 text-tertiary">
              Number of items:
            </PSmall>
            <div className="flex gap-x-2">
              <Button
                variant={numImages === 2 ? 'info' : 'secondary'}
                onClick={() => setNumImages(2)}
              >
                2
              </Button>
              <Button
                variant={numImages === 3 ? 'info' : 'secondary'}
                onClick={() => setNumImages(3)}
              >
                3
              </Button>
              <Button
                variant={numImages === 4 ? 'info' : 'secondary'}
                onClick={() => setNumImages(4)}
              >
                4
              </Button>
              <Button
                variant={numImages === 5 ? 'info' : 'secondary'}
                onClick={() => setNumImages(5)}
              >
                5
              </Button>
              <Button
                variant={numImages === 6 ? 'info' : 'secondary'}
                onClick={() => setNumImages(6)}
              >
                6
              </Button>
            </div>
            <PSmall isMedium className="mb-1 mt-5 text-tertiary">
              Background color
            </PSmall>
            <ColorPicker
              hexColor={backgroundColor}
              onChangeHandler={value => setBackgroundColor(value)}
            />
            <PSmall isMedium className="mb-1 mt-5 text-tertiary">
              Thumbnails background color
            </PSmall>
            <ColorPicker
              hexColor={thumbnailsBackgroundColor}
              onChangeHandler={value => setThumbnailsBackgroundColor(value)}
            />
            <PSmall isMedium className="mb-1 mt-5 text-tertiary">
              Thumbnails padding: {thumbsPadding}px
            </PSmall>
            <Slider
              defaultValue={thumbsPadding}
              min={0}
              max={8}
              onChange={value => setThumbsPadding(value)}
            />
            <PSmall isMedium className="mb-1 mt-5 text-tertiary">
              Thumbnails border radius: {thumbsBorderRadius}px
            </PSmall>
            <Slider
              defaultValue={thumbsBorderRadius}
              min={0}
              max={60}
              onChange={value => setThumbsBorderRadius(value)}
            />
            <PSmall isMedium className="mb-1 mt-5 text-tertiary">
              Remove island padding
            </PSmall>
            <Switch
              active={removeEnclosingIsland}
              onClick={() => setRemoveEnclosingIsland(!removeEnclosingIsland)}
            />
          </Window>
        </div>
        <br />
        <div className="w-[300px]"></div>
        <br />
        <br />
        <CodeBlock code={codeString} />
        <br />
        <br />
        <PropsTable
          title="Button Props"
          items={[
            {
              propName: 'items',
              type: 'Array',
              default: 'null',
              required: 'yes',
              description: 'The array of images in the format { url: string, callBack: function }',
            },
            {
              propName: 'backgroundColor',
              type: 'string',
              default: 'rgba(156, 163, 175, 0.2)',
              required: 'no',
              description: 'The background color of the island.',
            },
            {
              propName: 'thumbnailsPadding',
              type: 'string',
              default: '0',
              required: 'no',
              description: 'The padding around the thumbnails.',
            },
            {
              propName: 'thumbnailsBackgroundColor',
              type: 'string',
              default: 'white',
              required: 'no',
              description:
                'The background color of the thumbnails. It is only visible if the thumbnails padding is set above zero.',
            },
            {
              propName: 'thumbnailsBorderRadius',
              type: 'string',
              default: 'contain',
              required: '6',
              description: 'The roundness of the thumbnails.',
            },
            {
              propName: 'removeEnclosingIsland',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'If true, removes the island padding around the thumbnails.',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}
