import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, PSmall, PNano, H6 } from '../../tpds/elements/typography'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import PropsTable from '../../tpds/components/props-table'
import ColorPicker from '../../tpds/components/color-picker'

export default function Page() {
  const [selectedColor, setSelectedColor] = React.useState('#ff0000')
  return (
    <div>
      <Container>
        <PageHeader title="Date Picker" subTitle="A color picker + input combo component" />
        <P>
          You can click the swatch to pick a color or type a hexadecimal value in the text input.
        </P>
        <br />
        <PNano isUppercase isBold className="text-tertiary mb-1 opacity-80">
          color picker
        </PNano>
        <ColorPicker hexColor={selectedColor} onChangeHandler={value => setSelectedColor(value)} />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'year',
              type: 'Number',
              default: 'Current year',
              required: 'No',
              description: 'The year to display',
            },
            {
              propName: 'month',
              type: 'Number',
              default: 'Current month',
              required: 'No',
              description: 'The month to display.',
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
