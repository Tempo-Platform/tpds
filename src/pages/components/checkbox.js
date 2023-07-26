import React, { useState } from 'react'
import Hero from '../../tpds/components/hero/Hero'
import { H1, P } from '../../tpds/elements/typography'
import Checkbox from '../../tpds/components/checkbox'
import { Container, PaddingBox, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code/CodeBlock'
import PropsTable from '../../tpds/components/table/PropsTable'

export default function Page() {
  const [stateChecked, setCheckedState] = useState(true)
  const [statePartial, setPartialState] = useState(true)
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Headline</H1>
        <P>Description.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <Window>
            <P>Default</P>
            <br />
            <Checkbox active={stateChecked} onClick={() => setCheckedState(!stateChecked)} />
          </Window>
          <br />
          <CodeBlock code={codeChecked} />
          <br />
          <br />
          <Window>
            <P>Partially selected - use prop "partial"</P>
            <br />
            <Checkbox
              active={statePartial}
              partial={true}
              onClick={() => setPartialState(!statePartial)}
            />
          </Window>
          <br />
          <CodeBlock code={codePartial} />
          <br />
          <br />
          <Window>
            <P>Disabled - use prop "disabled"</P>
            <br />
            <Checkbox active={true} disabled={true} />
          </Window>
          <br />
          <CodeBlock code={codeDisabled} />
          <br />
          <br />
          <br />
          <br />
          <PropsTable
            title="Checkbox Props"
            items={[
              {
                propName: 'active',
                type: 'Boolean',
                default: 'false',
                required: 'required',
                description: 'Wether the Checkbox is active or not',
              },
              {
                propName: 'partial',
                type: 'Boolean',
                default: 'false',
                required: 'required',
                description:
                  'Wether the active state is only partial. If true, will show a horizontal symbol instead of a checkmark.',
              },
              {
                propName: 'onClick',
                type: 'Function',
                default: 'null',
                required: 'optional',
                description:
                  "Optionally, you can attach an onClick handler to toggle it's active state. But the element receiving this event can be another.",
              },
              {
                propName: 'disabled',
                type: 'Boolean',
                default: 'false',
                required: 'required',
                description:
                  "Set true to display the checkbox in it's disabled state: semi-transparent and with pointer events disabled.",
              },
            ]}
          />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeChecked = String.raw`import Checkbox from '@tempoplatform/tpds/components/checkbox'

const [state, setState] = useState(true)

<Checkbox
  active={state}
  onClick={() => setState(!state)}
/>`

const codePartial = String.raw`import Checkbox from '@tempoplatform/tpds/components/checkbox'

const [state, setState] = useState(true)

<Checkbox
  active={state}
  partial={true}
  onClick={() => setState(!state)}
/>`

const codeDisabled = String.raw`import Checkbox from '@tempoplatform/tpds/components/checkbox'

<Checkbox
  active={true}
  disabled={true}
/>`
