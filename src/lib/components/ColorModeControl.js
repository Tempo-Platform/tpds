import { useState, useEffect } from 'react'

function ColorModeControl() {
  const [theme, setTheme] = useState(null)

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

  const rawSetTheme = theme => {
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
    <div className="block text-red">
      {theme === 'dark' ? (
        <Moon
          onClick={() => rawSetTheme('light')}
          style={{ width: '24px', height: 'auto', cursor: 'pointer' }}
        />
      ) : (
        <Sun
          onClick={() => rawSetTheme('dark')}
          style={{ width: '24px', height: 'auto', cursor: 'pointer' }}
        />
      )}
    </div>
  )
}

export default ColorModeControl

const Sun = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93v-.001zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121v-.001zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
  </svg>
)

const Moon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="white">
    <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.977 6.977 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
  </svg>
)
