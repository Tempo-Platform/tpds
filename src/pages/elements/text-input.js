import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { P, H6 } from '../../tpds/elements/typography'
import { TextInput } from '../../tpds/elements/input'
import { Separator, Container, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import CodeGridComponent from '../../lib/components/CodeGridComponent'

export default function TextInputPage() {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <div>
      <Container>
        <PageHeader
          title="TextInput"
          subTitle="The TextInput element is used by the TextInput component. Use the TextInput element
          directly for custom scenarios."
        />
        <P>Import input element</P>
        <br />
        <CodeBlock code={codeImport} />
        <br />
        <br />
        <H6>States</H6>
        <Separator />
        <br />
        <br />
        <Window>
          <P>Default</P>
          <br />
          <CodeGridComponent
            code={codeDefault}
            element={
              <TextInput
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="Placeholder"
              />
            }
          />
          <br />
          <br />
          <P>Valid</P>
          <br />
          <CodeGridComponent
            code={codeValid}
            element={<TextInput isValid defaultValue="Text" placeholder="Placeholder" />}
          />
          <br />
          <br />
          <P>Invalid</P>
          <br />
          <CodeGridComponent
            code={codeInvalid}
            element={<TextInput isInvalid defaultValue="Text" placeholder="Placeholder" />}
          />
          <br />
          <br />
          <P>Warning</P>
          <br />
          <CodeGridComponent
            code={codeWarning}
            element={<TextInput isWarning defaultValue="Text" placeholder="Placeholder" />}
          />
        </Window>
        <br />
        <br />
      </Container>
    </div>
  )
}

const codeImport = String.raw`import { TextInput } from '@tempoplatform/tpds/elements/input'

const [inputValue, setInputValue] = React.useState('')`

const codeDefault = String.raw`<TextInput
  value={inputValue}
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeValid = String.raw`<TextInput
  isValid
  value={inputValue}
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeInvalid = String.raw`<TextInput
  isInvalid
  value={inputValue}
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeWarning = String.raw`<TextInput
  isWarning
  value={inputValue}
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`
