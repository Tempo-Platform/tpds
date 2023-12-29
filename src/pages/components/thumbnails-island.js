import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container, Separator, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import ThumbnailsRow from '../../tpds/components/thumbnails-island'
import Switch from '../../tpds/components/switch'
import PropsTable from '../../tpds/components/props-table'
import { P, PSmall } from '../../tpds/elements/typography'
import { Button } from '../../tpds/elements/buttons'
import ColorPicker from '../../tpds/components/color-picker'
import Slider from 'rc-slider'
import { set } from 'lodash'

export default function Page() {
  const [numImages, setNumImages] = React.useState(4)
  const [removeEnclosingIsland, setRemoveEnclosingIsland] = React.useState(false)
  const [backgroundColor, setBackgroundColor] = React.useState('#ffffff45')
  const [thumbsBorderRadius, setThumbsBorderRadius] = React.useState(6)
  const [thumbnailsBackgroundColor, setThumbnailsBackgroundColor] = React.useState('#0000005c')
  const [thumbsPadding, setThumbsPadding] = React.useState(3)
  const [updatingThumbnail, setUpdatingThumbnail] = React.useState(null)
  const [backgroundImage, setBackgroundImage] = React.useState(null)
  const [imagesData, setImagesData] = React.useState([
    {
      url: 'https://picsum.photos/200/200?c=1',
      callBack: e => {
        e.stopPropagation()
        inputThumb0Ref.current.click()
      },
    },
    {
      url: 'https://picsum.photos/200/200?c=2',
      callBack: e => {
        e.stopPropagation()
        inputThumb1Ref.current.click()
      },
    },
    {
      url: 'https://picsum.photos/200/200?c=3',
      callBack: e => {
        e.stopPropagation()
        inputThumb2Ref.current.click()
      },
    },
    {
      url: 'https://picsum.photos/200/200?c=4',
      callBack: e => {
        e.stopPropagation()
        inputThumb3Ref.current.click()
      },
    },
    {
      url: 'https://picsum.photos/200/200?c=5',
      callBack: e => {
        e.stopPropagation()
        inputThumb4Ref.current.click()
      },
    },
    {
      url: 'https://picsum.photos/200/200?c=6',
      callBack: e => {
        e.stopPropagation()
        inputThumb5Ref.current.click()
      },
    },
  ])

  const inputRef = React.useRef(null)
  const inputThumb0Ref = React.useRef(null)
  const inputThumb1Ref = React.useRef(null)
  const inputThumb2Ref = React.useRef(null)
  const inputThumb3Ref = React.useRef(null)
  const inputThumb4Ref = React.useRef(null)
  const inputThumb5Ref = React.useRef(null)

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setBackgroundImage(URL.createObjectURL(event.target.files[0]))
    }
  }
  const onThumbnail0Change = event => {
    if (event.target.files && event.target.files[0]) {
      const updateImagesData = [...imagesData]
      updateImagesData[0].url = URL.createObjectURL(event.target.files[0])
      setImagesData(updateImagesData)
    }
  }
  const onThumbnail1Change = event => {
    if (event.target.files && event.target.files[0]) {
      const updateImagesData = [...imagesData]
      updateImagesData[1].url = URL.createObjectURL(event.target.files[0])
      setImagesData(updateImagesData)
    }
  }
  const onThumbnail2Change = event => {
    if (event.target.files && event.target.files[0]) {
      const updateImagesData = [...imagesData]
      updateImagesData[2].url = URL.createObjectURL(event.target.files[0])
      setImagesData(updateImagesData)
    }
  }
  const onThumbnail3Change = event => {
    if (event.target.files && event.target.files[0]) {
      const updateImagesData = [...imagesData]
      updateImagesData[3].url = URL.createObjectURL(event.target.files[0])
      setImagesData(updateImagesData)
    }
  }
  const onThumbnail4Change = event => {
    if (event.target.files && event.target.files[0]) {
      const updateImagesData = [...imagesData]
      updateImagesData[4].url = URL.createObjectURL(event.target.files[0])
      setImagesData(updateImagesData)
    }
  }
  const onThumbnail5Change = event => {
    if (event.target.files && event.target.files[0]) {
      const updateImagesData = [...imagesData]
      updateImagesData[5].url = URL.createObjectURL(event.target.files[0])
      setImagesData(updateImagesData)
    }
  }

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

  const imagesToDisplay = imagesData.slice(0, numImages)

  return (
    <div>
      <Container>
        <PageHeader title="Thumbnails Row" subTitle="Island layout for row of rounded thumbnails" />
        <P>Configurable row of clickable thumbnails in "island" style. Accepts up to 6 items.</P>
        <Separator />
        <br />
        <P>
          You can tweak the style using the controls on the right side. The code example below will
          change as you tweak the values.
        </P>
        <br />
        <P>
          In this demo, you can{' '}
          <span className="font-bold">click the background image or the thumbnails</span> to upload
          different images.
        </P>
        <br />
        <div className="flex flex-col gap-y-10 md:flex-row gap-x-12 items-start">
          <div
            onClick={() => inputRef.current.click()}
            className="w-full md:w-auto cursor-pointer relative bg-white/40 dark:bg-grey-dark-scale-500 border border-window"
            style={{
              aspectRatio: '1 / 1.8',
              minWidth: '320px',
              maxWidth: '400px',
              backgroundImage: `url(${
                backgroundImage ? backgroundImage : 'https://picsum.photos/300/520?c=2'
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <ThumbnailsRow
              backgroundColor={backgroundColor}
              thumbnailsBackgroundColor={thumbnailsBackgroundColor}
              thumbnailsBorderRadius={thumbsBorderRadius}
              thumbnailsPadding={thumbsPadding}
              removeEnclosingIsland={removeEnclosingIsland}
              items={imagesToDisplay}
            />
          </div>
          <Window className="w-full md:w-auto">
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
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputRef}
              onChange={onImageChange}
              className="filetype"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputThumb0Ref}
              onChange={onThumbnail0Change}
              className="filetype"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputThumb1Ref}
              onChange={onThumbnail1Change}
              className="filetype"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputThumb2Ref}
              onChange={onThumbnail2Change}
              className="filetype"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputThumb3Ref}
              onChange={onThumbnail3Change}
              className="filetype"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputThumb4Ref}
              onChange={onThumbnail4Change}
              className="filetype"
            />
            <input
              style={{ display: 'none' }}
              type="file"
              ref={inputThumb5Ref}
              onChange={onThumbnail5Change}
              className="filetype"
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
              type: 'String',
              default: 'rgba(156, 163, 175, 0.2)',
              required: 'no',
              description: 'The background color of the island.',
            },
            {
              propName: 'thumbnailsBackgroundColor',
              type: 'String',
              default: 'white',
              required: 'no',
              description:
                'The background color of the thumbnails. It is only visible if the thumbnails padding is set above zero.',
            },
            {
              propName: 'thumbnailsPadding',
              type: 'Number',
              default: '0',
              required: 'no',
              description: 'The padding around the thumbnails.',
            },
            {
              propName: 'thumbnailsBorderRadius',
              type: 'Number',
              default: '6',
              required: 'no',
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
