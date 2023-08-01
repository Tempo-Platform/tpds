import React from 'react'
import Hero from '../../tpds/components/hero'
import { P, H1 } from '../../tpds/elements/typography'
import { Container, PaddingBox } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function Page() {
  return (
    <div>
      <Hero className="bg-window border-b-2 border-body">
        <H1 isMedium>CodeBlock</H1>
        <P>Show blocks of code with Tempo styled syntax highlighting.</P>
      </Hero>
      <Container>
        <PaddingBox>
          <br />
          <CodeBlock code={codeblockCode} />
          <br />
          <br />
          <br />
        </PaddingBox>
      </Container>
    </div>
  )
}

const codeblockCode = `import CodeBlock from '@tempoplatform/tpds/components/code/CodeBlock'\n
// declare the code to pass to the component using String.raw:
const myCodeContent = String.raw\`<CodeBlock
  code={myCodeContent}
/>\`

// pass it as a prop to the component:
<CodeBlock
  code={myCodeContent}
/>`
