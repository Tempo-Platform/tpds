import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, Bold } from '../../tpds/elements/typography'
import { Separator, Container } from '../../tpds/elements/layout'
import { Button } from '../../tpds/elements/buttons'
import CodeGridComponent from '../../lib/components/CodeGridComponent'

export default function ButtonsPage() {
  return (
    <div>
      <Container>
        <PageHeader title="Buttons" subTitle="Button elements in various variants." />
        <P>
          The button element has <Bold>7 variants</Bold>.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <CodeGridComponent code={codeDefault} element={<Button>Default</Button>} />
        <br />
        <br />
        <CodeGridComponent
          code={codeSuccess}
          element={<Button variant="success">Success</Button>}
        />
        <br />
        <br />
        <CodeGridComponent code={codeInfo} element={<Button variant="info">Info</Button>} />
        <br />
        <br />
        <CodeGridComponent
          code={codeWarning}
          element={<Button variant="warning">Warning</Button>}
        />
        <br />
        <br />
        <CodeGridComponent code={codeDanger} element={<Button variant="danger">Danger</Button>} />
        <br />
        <br />
        <CodeGridComponent
          code={codeSpecial}
          element={<Button variant="special">Special</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeContrast}
          element={<Button variant="contrast">Contrast</Button>}
        />
        <br />
        <br />
        <CodeGridComponent
          code={codeContrastGhost}
          element={<Button variant="contrastghost">Contrast Ghost</Button>}
        />
        <br />
        <br />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <P>
          The <Bold>disabled</Bold> button variant is an option available in all variants, to be
          used when, for example, a user needs to fill out a form before submitting. The button
          becomes transparent and pointer-events are disabled.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <CodeGridComponent
          code={codeInfoDisabled}
          element={
            <Button variant="info" isDisabled>
              Info (disabled)
            </Button>
          }
        />
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <P>
          The sizes <Bold>tiny</Bold>, <Bold>small</Bold>, <Bold>large</Bold> and{' '}
          <Bold>extra large</Bold> are available in all variants.
        </P>
        <br />
        <Separator />
        <br />
        <br />
        <CodeGridComponent code={codeTiny} element={<Button isTiny>Button</Button>} />
        <br />
        <br />
        <CodeGridComponent code={codeSmall} element={<Button isSmall>Button</Button>} />
        <br />
        <br />
        <CodeGridComponent code={codeLarge} element={<Button isLarge>Button</Button>} />
        <br />
        <br />
        <CodeGridComponent code={codeExtraLarge} element={<Button isExtraLarge>Button</Button>} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeDefault = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button>
  Default
</Button>`

const codeSuccess = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='success'>
  Success
</Button>`

const codeInfo = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='info'>
  Info
</Button>`

const codeWarning = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='warning'>
  Warning
</Button>`

const codeDanger = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='danger'>
  Danger
</Button>`

const codeSpecial = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='special'>
  Special
</Button>`

const codeContrast = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='contrast'>
  Contrast
</Button>`

const codeContrastGhost = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='contrastghost'>
  Contrast Ghost
</Button>`

const codeInfoDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='info' isDisabled>
  Info (disabled)
</ButtonInfo>`

const codeTiny = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isTiny>
  Button
</Button>`

const codeSmall = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isSmall>
  Button
</Button>`

const codeLarge = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isLarge>
  Button
</Button>`

const codeExtraLarge = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isExtraLarge>
  Button
</Button>`
