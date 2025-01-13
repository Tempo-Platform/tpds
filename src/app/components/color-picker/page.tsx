'use client'

import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P, PNano } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import PropsTable from '@tpds/components/props-table'
import ColorPicker from '@tpds/components/color-picker'

export default function Page() {
  const [selectedColor, setSelectedColor] = React.useState('#ff56e5')
  return (
    <div>
      <Container>
        <PageHeader title='Color Picker' subTitle='A color picker + input combo component' />
        <P>You can click the swatch to pick a color or type a hexadecimal value in the text input.</P>
        <br />
        <PNano isUppercase isBold className='text-tertiary mb-1 opacity-80'>
          color picker
        </PNano>
        <ColorPicker hexColor={selectedColor} onChangeHandler={value => setSelectedColor(value)} />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'selectedColor',
              type: 'string',
              default: 'null',
              required: 'Yes',
              description: 'The selected color to display, hexadecimal format',
            },
            {
              propName: 'onChangeHandler',
              type: 'Function',
              default: 'null',
              required: 'Yes',
              description: 'Handler function to pass updates to the host component.',
            },
            {
              propName: 'omitTextInput',
              type: 'boolean',
              default: 'false',
              required: 'No',
              description: 'If true, the text input will not be displayed.',
            },
            {
              propName: 'swatchSide',
              type: 'string',
              default: 'right',
              required: 'No',
              description: 'The side of the swatch to display, left or right.',
            },
            {
              propName: 'placeholder',
              type: 'string',
              default: 'Hex',
              required: 'No',
              description: 'The placeholder text for the text input.',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import ColorPicker from '@tempoplatform/tpds/components/color-picker'
const [selectedColor, setSelectedColor] = React.useState('#ff0000')

<ColorPicker
  hexColor={selectedColor}
  onChangeHandler={value => setSelectedColor(value)}
/>`
