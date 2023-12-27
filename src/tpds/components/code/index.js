import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter language="jsx" useInlineStyles={false} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
