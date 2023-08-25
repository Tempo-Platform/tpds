import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Callout from '../../tpds/components/callout'
import PropsTable from '../../tpds/components/table'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Callout</H1>
        <P>
          The Callout component serves to convey highlighted information content of different types.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <br />
          <Callout
            title="Default callout"
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
            text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
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
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeDefault = String.raw`import { Callout } from '@tempoplatform/tpds/components/callout'

<Callout
  title='Default callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeSuccess = String.raw`import { CalloutSuccess } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="success"
  title='Success callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeInfo = String.raw`import { CalloutInfo } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="info"
  title='Info callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeWarning = String.raw`import { CalloutWarning } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="warning"
  title='Warning callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeDanger = String.raw`import { CalloutDanger } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="danger"
  title='Danger callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeTip = String.raw`import { CalloutTip } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="tip"
  title='Tip callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeBug = String.raw`import { CalloutBug } from '@tempoplatform/tpds/components/callout'

<CalloutBug
  variant="bug"
  title='Bug callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`

const codeNote = String.raw`import { CalloutNote } from '@tempoplatform/tpds/components/callout'

<Callout
  variant="note"
  title='Note callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>`
