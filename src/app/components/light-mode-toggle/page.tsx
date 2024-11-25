'use client'

import React, { useState } from 'react'
import PageHeader from '@/lib/components/PageHeader'
import { PSmall, Bold } from '@tpds/elements/typography'
import { Container } from '@tpds/elements/layout'
import LightModeToggle from '@tpds/components/light-mode-toggle'
import CodeBlock from '@tpds/components/code'

export default function Page() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div>
      <Container>
        <PageHeader title='Light Mode Toggle' subTitle='A light mode toggle component.' />
        <PSmall>A 'Light Mode Toggle' component, as the one used in this page, displayed in the left sidebar on desktop or at the top on mobile.</PSmall>
        <br />
        <PSmall>This is just a visual component. The actual light mode logic may vary from application to application. You can see a full example of how to implement light mode control in <Bold>lib/components/ColorModeControl.tsx</Bold>.</PSmall>
        <br />
        <br />
        <LightModeToggle onClick={() => setIsDark(!isDark)} isDark={isDark} />
        <br />
        <br />
        <CodeBlock code={code} />
        <br />
        <br />
      </Container>
    </div>
  )
}

const code = String.raw`import LightModeToggle from '@tempoplatform/tpds/components/light-mode-toggle'

const [isDark, setIsDark] = useState(false)

<LightModeToggle onClick={() => setIsDark(!isDark)} isDark={isDark} />`
