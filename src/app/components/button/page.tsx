import PageHeader from '@/lib/components/PageHeader'
import { PSmall } from '@tpds/elements/typography'
import { Play } from '@tpds/assets/svgs/tiny'
import { Container } from '@tpds/elements/layout'
//import MenuDropdown from '../../../tpds/components/menudropdown'
import CodeBlock from '@tpds/components/code'
import { Button as ButtonComponent } from '@tpds/components/buttons'
import PropsTable from '@tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title='Button' subTitle='Button component - to be used together with icons' />
        <PSmall>Button with loading state</PSmall>
        <br />
        <ButtonComponent loading={true} variant='secondary' label='Loading...' />
        <br />
        <CodeBlock code={codeWithLoading} />
        <br />
        <br />
        <PSmall>Button with dark-mode ready icon (before)</PSmall>
        <br />
        <ButtonComponent variant='secondary' label='Button' iconBefore={<Play className='fill-current' />} />
        <br />
        <CodeBlock code={codeWithIconBefore} />
        <br />
        <br />
        <PSmall>Button with dark-mode ready icon (after)</PSmall>
        <br />
        <ButtonComponent variant='secondary' label='Button' iconAfter={<Play className='fill-current' />} />
        <br />
        <CodeBlock code={codeWithIconAfter} />
        <br />
        <br />
        <PSmall>Button with dark-mode ready icon (before and after)</PSmall>
        <br />
        <ButtonComponent
          variant='secondary'
          label='Button'
          iconBefore={<Play className='fill-current' />}
          //iconAfter={<MenuDropdown linkClass={Link} links={[]} />}
        />
        <br />
        <CodeBlock code={codeWithIconBeforeAndAfter} />
        <br />
        <br />
        <PSmall>Button only with icon (no label)</PSmall>
        <br />
        <ButtonComponent label='Button' variant='secondary' iconBefore={<Play className='fill-current' />} />
        <br />
        <CodeBlock code={codeWithIconBeforeAndAfter} />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'label',
              type: 'String',
              default: "' '",
              required: 'required',
              description: 'The label of the button.',
            },
            {
              propName: 'variant',
              type: 'String',
              default: 'default',
              required: 'optional',
              description: 'The variant identifies the type of the Button (success, info, danger etc.)',
            },
            {
              propName: 'iconBefore',
              type: 'SVG JSX',
              default: 'null',
              required: 'optional',
              description: 'Optional icon to show before the label',
            },
            {
              propName: 'iconAfter',
              type: 'SVG JSX',
              default: 'null',
              required: 'optional',
              description: 'Optional icon to show after the label',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeWithLoading = String.raw`import { Button } from '@tempoplatform/tpds/components/buttons'

<Button
  variant='secondary'
  loading={true}
  label="Loading..."
/>`

const codeWithIconBefore = String.raw`import { Button } from '@tempoplatform/tpds/components/buttons'
import Play from '@tempoplatform/tpds/svgs/16x16/Play'

<Button
  label="Button"
  iconBefore={<Play className='fill-current />}
/>`

const codeWithIconAfter = String.raw`import { Button } from '@tempoplatform/tpds/components/buttons'
import Play from '@tempoplatform/tpds/svgs/16x16/Play'

<Button
  variant='secondary'
  label="Button"
  iconAfter={<Play className='fill-current />}
/>`

const codeWithIconBeforeAndAfter = String.raw`import { Button } from '@tempoplatform/tpds/components/buttons'
import Play from '@tempoplatform/tpds/svgs/16x16/Play'
import MenuDropdown from '@tempoplatform/tpds/components/menudropdown'

<Button
  variant='secondary'
  label="Button"
  iconBefore={<Play className='fill-current />}
  iconAfter={<MenuDropdown />}
/>`

const codeWithCustomIconColor = String.raw`import { Button } from '@tempoplatform/tpds/components/buttons'
import { DummyIcon } from '@tempoplatform/tpds/svgs/16x16/DummyIcon'

<Button
  variant='success'
  label="Button"
  iconBefore={<DummyIcon />}
/>`
