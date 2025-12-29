import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [mode, setMode] = useState('system')
  const [resolvedTheme, setResolvedTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const initialMode = saved || 'system'
    setMode(initialMode)

    const initialTheme = initialMode === 'system' ? getSystemTheme() : initialMode
    setResolvedTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  useEffect(() => {
    if (mode !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      const theme = e.matches ? 'dark' : 'light'
      setResolvedTheme(theme)
      document.documentElement.setAttribute('data-theme', theme)
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const setThemeMode = (newMode) => {
    setMode(newMode)
    localStorage.setItem(STORAGE_KEY, newMode)

    const theme = newMode === 'system' ? getSystemTheme() : newMode
    setResolvedTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return { 
    mode, 
    resolvedTheme, 
    setThemeMode,
    isLight: resolvedTheme === 'light',
    isDark: resolvedTheme === 'dark', 
    isSystem: mode === 'system'
  }
}
