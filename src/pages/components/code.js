import React from 'react'
import PageHeader from '../../lib/components/PageHeader'
import { Container } from '../../tpds/elements/layout'
import CodeBlock from '../../tpds/components/code'

export default function Page() {
  return (
    <div>
      <Container>
        <PageHeader
          title="CodeBlock"
          subTitle="Show blocks of code with Tempo styled syntax highlighting."
        />
        <CodeBlock code={codeblockCode} />
        <br />
        <br />
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
