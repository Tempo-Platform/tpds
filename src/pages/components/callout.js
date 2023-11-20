import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Callout from '../../tpds/components/callout'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader
          title="Callout"
          subTitle="The Callout component serves to convey highlighted information content of different types."
        />
        <Callout
          title="Default callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="success"
          title="Success callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeSuccess} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="info"
          title="Info callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeInfo} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="warning"
          title="Warning callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="danger"
          title="Danger callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeDanger} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="tip"
          title="Tip callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeTip} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="bug"
          title="Bug callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeBug} />
        <br />
        <br />
        <br />
        <br />
        <Callout
          variant="note"
          title="Note callout"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
        />
        <br />
        <CodeBlock code={codeNote} />
        <br />
        <br />
        <PropsTable
          title="Callout Props"
          items={[
            {
              propName: 'title',
              type: 'String',
              default: "' '",
              required: 'required',
              description: 'The title of the callout.',
            },
            {
              propName: 'text',
              type: 'String',
              default: "' '",
              required: 'required',
              description: 'The description of the callout.',
            },
            {
              propName: 'variant',
              type: 'String',
              default: 'default',
              required: 'optional',
              description:
                'The style of the callout. Can be "default", "success", "info", "warning", "danger", "tip", "bug", "note".',
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeDefault = String.raw`import { Callout } from '@tempoplatform/tpds/components/callout'

<Callout
  title='Default callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeSuccess = String.raw`import { CalloutSuccess } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="success"
  title='Success callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeInfo = String.raw`import { CalloutInfo } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="info"
  title='Info callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeWarning = String.raw`import { CalloutWarning } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="warning"
  title='Warning callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeDanger = String.raw`import { CalloutDanger } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="danger"
  title='Danger callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeTip = String.raw`import { CalloutTip } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="tip"
  title='Tip callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeBug = String.raw`import { CalloutBug } from '@tempoplatform/tpds/components/callout'

<CalloutBug
  variant="bug"
  title='Bug callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`

const codeNote = String.raw`import { CalloutNote } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="note"
  title='Note callout'
  text='Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.'
/>`
