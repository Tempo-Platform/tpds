import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import RadioTabs from '../../tpds/components/radiotabs'

const items = [
  {
    title: 'Startup',
    description: '160 GB SSD disk',
  },
  {
    title: 'Business',
    description: '512 GB SSD disk',
  },
  {
    title: 'Enterprise',
    description: '1024 GB SSD disk',
  },
]

export default function Page() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>RadioTabs</H1>
        <P>Radio selection component in row layout.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <RadioTabs
            items={items}
            selectedIndex={selectedIndex}
            handleIndexSelection={index => setSelectedIndex(index)}
          />
          <br />
          <CodeBlock code={code} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const code = String.raw`import React from 'react'
import RadioTabs from '@tempoplatform/tpds/components/radiotabs'

const items = [
  {
    title: 'Startup',
    description: '160 GB SSD disk',
  },
  {
    title: 'Business',
    description: '512 GB SSD disk',
  },
  {
    title: 'Enterprise',
    description: '1024 GB SSD disk',
  },
]

const [selectedIndex, setSelectedIndex] = React.useState(0)

<RadioTabs
  items={items}
  selectedIndex={selectedIndex}
  handleIndexSelection={index => setSelectedIndex(index)}
/>`
