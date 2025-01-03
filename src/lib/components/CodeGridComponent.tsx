//import React from 'react'
import CodeBlock from '@tpds/components/code'

const CodeGridComponent = ({ element, code }: { element: React.ReactNode; code: string }) => {
  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="col-span-10 md:col-span-4">{element}</div>
      <div className="col-span-10 md:col-span-6">
        <CodeBlock code={code} />
      </div>
    </div>
  )
}

export default CodeGridComponent
