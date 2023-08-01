import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1, Bold } from '../../tpds/elements/typography'
import { Separator, Container, PaddingBox } from '../../tpds/elements/layout'
import { Button } from '../../tpds/elements/buttons'
import CodeGridComponent from '../../lib/components/CodeGridComponent'

export default function ButtonsPage() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>Buttons</H1>
        <P>
          Use the typography elements directly. They are all responsive by default and will ensure
          typographic consistency.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
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
            code={codeSecondary}
            element={<Button variant="secondary">Secondary</Button>}
          />
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
            code={codeDefaultDisabled}
            element={<Button isDisabled>Regular (disabled)</Button>}
          />
          <br />
          <br />
          <CodeGridComponent
            code={codeSecondaryDisabled}
            element={
              <Button variant="secondary" isDisabled>
                Secondary (disabled)
              </Button>
            }
          />
          <br />
          <br />
          <CodeGridComponent
            code={codeSuccessDisabled}
            element={
              <Button variant="success" isDisabled>
                Success (disabled)
              </Button>
            }
          />
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
          <CodeGridComponent
            code={codeWarningDisabled}
            element={
              <Button variant="warning" isDisabled>
                Warning (disabled)
              </Button>
            }
          />
          <br />
          <br />
          <CodeGridComponent
            code={codeDangerDisabled}
            element={
              <Button variant="danger" isDisabled>
                Danger (disabled)
              </Button>
            }
          />
          <br />
          <br />
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <P>
            The <Bold>small</Bold> and <Bold>large</Bold> are options available in all variants.
          </P>
          <br />
          <Separator />
          <br />
          <br />
          <CodeGridComponent code={codeSmallSizes} element={<Button isSmall>Text label</Button>} />
          <br />
          <br />
          <CodeGridComponent code={codeLargeSizes} element={<Button isLarge>Text label</Button>} />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeDefault = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button>
  Default
</Button>`

const codeSecondary = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='secondary'>
  Secondary
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

const codeDefaultDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isDisabled>
  Regular (disabled)
</Button>`

const codeSecondaryDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='secondary' isDisabled>
  Secondary (disabled)
</ButtonSecondary>`

const codeSuccessDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='success' isDisabled>
  Success (disabled)
</ButtonSuccess>`

const codeInfoDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='info' isDisabled>
  Info (disabled)
</ButtonInfo>`

const codeWarningDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='warning' isDisabled>
  Warning (disabled)
</ButtonWarning>`

const codeDangerDisabled = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button variant='danger' isDisabled>
  Danger (disabled)
</ButtonDanger>`

const codeLargeSizes = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isLarge>
  Text label
</Button>`

const codeSmallSizes = String.raw`import { Button } from '@tempoplatform/tpds/elements/buttons'

<Button isSmall>
  Text label
</Button>`
