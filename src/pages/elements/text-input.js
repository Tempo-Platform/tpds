import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H6, H1 } from '../../tpds/elements/typography'
import { TextInput } from '../../tpds/elements/input'
import { Separator, Container, PaddingBox, Window } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'
import CodeGridComponent from '../../lib/components/CodeGridComponent'

export default function TextInputPage() {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>TextInput</H1>
        <P>
          The TextInput element is used by the TextInput component. Use the TextInput element
          directly for custom scenarios.
        </P>
      </Hero>
      <Container>
        <PaddingBox>
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
              element={
                <TextInput
                  onChange={e => setInputValue(e.target.value)}
                  isValid
                  value={inputValue}
                  placeholder="Placeholder"
                />
              }
            />
            <br />
            <br />
            <P>Invalid</P>
            <br />
            <CodeGridComponent
              code={codeInvalid}
              element={
                <TextInput
                  onChange={e => setInputValue(e.target.value)}
                  isInvalid
                  value={inputValue}
                  placeholder="Placeholder"
                />
              }
            />
            <br />
            <br />
            <P>Warning</P>
            <br />
            <CodeGridComponent
              code={codeWarning}
              element={
                <TextInput
                  onChange={e => setInputValue(e.target.value)}
                  isWarning
                  value={inputValue}
                  placeholder="Placeholder"
                />
              }
            />
          </Window>
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeImport = String.raw`import { TextInput } from '@tempoplatform/tpds/elements/input'

const [inputValue, setInputValue] = React.useState('')`

const codeDefault = String.raw`<TextInput
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeValid = String.raw`<TextInput
  isValid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeInvalid = String.raw`<TextInput
  isInvalid
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`

const codeWarning = String.raw`<TextInput
  isWarning
  defaultValue=''
  placeholder='Placeholder'
  onChange={(e) => setInputValue(e.target.value)}
/>`
