import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, H6 } from '../../tpds/elements/typography'
import { Container, Window, Separator } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import Switch from '../../tpds/components/switch'
import PropsTable from '../../tpds/components/props-table'

export default function Page() {
  const [active, setActive] = React.useState(true)

  return (
    <div>
      <Container>
        <PageHeader title="Switch" subTitle="Simple binary switch control" />
        <Window>
          <P>Standard switch control for binary options.</P>
          <br />
          <Switch active={active} onClick={() => setActive(!active)} />
          <br />
          <br />
          <CodeBlock code={code} />
          <br />
          <br />
          <H6>Other options</H6>
          <Separator />
          <br />
          <P>Disabled (active)</P>
          <br />
          <Switch active={true} disabled />
          <br />
          <br />
          <br />
          <P>Disabled (inactive)</P>
          <br />
          <Switch active={false} disabled />
          <br />
          <br />
          <br />
          <P>Success variant (active)</P>
          <br />
          <Switch active={true} variant="success" />
        </Window>
        <br />
        <br />
        <PropsTable
          title="Button Props"
          items={[
            {
              propName: 'active',
              type: 'Boolean',
              default: 'false',
              required: 'required',
              description: 'The state of the switch.',
            },
            {
              propName: 'onClick',
              type: 'Function',
              default: 'null',
              required: 'required',
              description: 'The click handler controlling the state of the switch.',
            },
            {
              propName: 'variant',
              type: 'String',
              default: 'info',
              required: 'optional',
              description:
                'The style of the switch. Can be "info", "success", "warning" or "danger", resulting in respectively blue, green, orange or red background color.',
            },
            {
              propName: 'disabled',
              type: 'SVG JSX',
              default: 'null',
              required: 'optional',
              description: 'Optional icon to show after the label',
            },
            {
              propName: 'iconColor',
              type: 'HEX String',
              default: 'null',
              required: 'optional',
              description:
                "If iconBefore or iconAfter is passed, this color will be applied to it's fill.",
            },
          ]}
        />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import '@tempoplatform/tpds/components/switch'

const [active, setActive] = React.useState(true)

<Switch
  active={active}
  onClick={() => setActive(!active)}
/>`
