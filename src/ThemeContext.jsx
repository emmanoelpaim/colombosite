import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import getTheme from './theme'

const ThemeContext = createContext({ mode: 'light', toggleMode: () => { } })

const STORAGE_KEY = 'flowup-theme-mode'

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem(STORAGE_KEY) || 'light')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'))

  const theme = useMemo(() => getTheme(mode), [mode])

  const value = useMemo(() => ({ mode, toggleMode }), [mode])

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeMode must be used within ThemeProvider')
  return ctx
}
