'use client'

import { useState, useEffect } from 'react'
import LightModeToggle from '@tpds/components/light-mode-toggle'

function ColorModeControl() {
  const [theme, setTheme] = useState<string | null>(null)

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme')
      if (typeof storedPrefs === 'string') {
        return storedPrefs
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (userMedia.matches) {
        return 'dark'
      }
    }
    return 'dark'
  }

  const rawSetTheme = (theme: string) => {
    const root = window.document.body
    const isDark = theme === 'dark'
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)
    setTheme(theme)
    localStorage.setItem('color-theme', theme)
  }

  useEffect(() => {
    const initialTheme = getInitialTheme()
    console.log('initialTheme', initialTheme)
    rawSetTheme(initialTheme)
    setTheme(initialTheme)
  }, [])

  return (
    <div className="block">
      <LightModeToggle onClick={() => rawSetTheme(theme === 'dark' ? 'light' : 'dark')} isDark={theme === 'dark'} />
    </div>
  )
}

export default ColorModeControl
