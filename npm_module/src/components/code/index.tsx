import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import clsx from 'clsx'

const CodeBlock = ({ code }: { code: string }) => {
  const codeStyles = clsx(
    'rounded-[4px]',
    'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900',
    'border-2 border-grey-light-scale-300 dark:border-grey-dark-scale-500',
  )
  return (
    <div className={codeStyles}>
      <SyntaxHighlighter language="jsx" useInlineStyles={false} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
