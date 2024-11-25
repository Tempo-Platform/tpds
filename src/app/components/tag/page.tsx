import React from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { P } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import CodeBlock from '@tpds/components/code'
import PropsTable from '@tpds/components/props-table'
import Tag from '@tpds/components/tag'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader title='Tag' subTitle='Simple Tag component with multiple states' />
        <P>Default</P>
        <br />
        <Tag label='Default' variant='default' />
        <br />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <Tag label='With X Icon' variant='default' showCloseIcon={true} />
        <br />
        <br />
        <CodeBlock code={codeWithXIcon} />
        <br />
        <br />
        <Tag label='With hover effect' variant='default' addHoverEffect={true} />
        <br />
        <br />
        <CodeBlock code={codeWithHover} />
        <br />
        <br />
        <P>Uppercase</P>
        <br />
        <Tag isUppercase={true} label='UPPERCASE' variant='default' />
        <br />
        <br />
        <CodeBlock code={codeUppercase} />
        <br />
        <br />
        <P>Success</P>
        <br />
        <Tag label='Success' variant='success' />
        <br />
        <br />
        <CodeBlock code={codeSuccess} />
        <br />
        <br />
        <P>Info</P>
        <br />
        <Tag label='Info' variant='info' />
        <br />
        <br />
        <CodeBlock code={codeInfo} />
        <br />
        <br />
        <P>Warning</P>
        <br />
        <Tag label='Warning' variant='warning' />
        <br />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <P>Danger</P>
        <br />
        <Tag label='Danger' variant='danger' />
        <br />
        <br />
        <CodeBlock code={codeDanger} />
        <br />
        <br />
        <PropsTable
          items={[
            {
              propName: 'label',
              type: 'String',
              default: "' '",
              required: 'true',
              description: 'The label to be displayed inside the Tag',
            },
            {
              propName: 'variant',
              type: 'String',
              default: 'null',
              required: 'no',
              description: "The variant type, eg. 'info', 'success', 'warning', etc.",
            },
            {
              propName: 'showCloseIcon',
              type: 'Boolean',
              default: 'false',
              required: 'no',
              description: 'Show a small X icon next to the label',
            },
            {
              propName: 'isUppercase',
              type: 'Boolean',
              default: 'null',
              required: 'no',
              description: 'Force uppercase label display',
            },
            {
              propName: 'addHoverEffect',
              type: 'Boolean',
              default: 'null',
              required: 'no',
              description: 'Adds a hover effect to the Tag. Useful when the Tag is used as a button or link',
            },
            {
              propName: 'rootClassName',
              type: 'String',
              default: '',
              required: 'no',
              description: 'Optional classNames for tag root element',
            },
            {
              propName: 'labelClassName',
              type: 'String',
              default: '',
              required: 'no',
              description: 'Optional classNames for tag label element',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeDefault = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Default'
  variant='default'
/>`

const codeWithXIcon = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='With X Icon'
  variant='default'
  showCloseIcon={true}
/>`

const codeWithHover = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='With hover effect'
  variant='default'
  addHoverEffect={true}
/>`

const codeUppercase = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  isUppercase={true}
  label='UPPERCASE'
  variant='default'
/>`

const codeInfo = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Info'
  variant='info'
/>`

const codeSuccess = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Success'
  variant='success'
/>`

const codeWarning = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Warning'
  variant='warning'
/>`

const codeDanger = String.raw`import Tag from '@tempoplatform/tpds/components/tag'

<Tag
  label='Danger'
  variant='danger'
/>`
