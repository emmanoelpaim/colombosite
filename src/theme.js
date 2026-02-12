import { createTheme } from '@mui/material/styles'

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#1B3F63',
      dark: '#132d47',
      light: '#2a5a8a',
    },
    secondary: {
      main: '#2EC4B6',
      dark: '#25a89d',
      light: '#5dd4c9',
    },
    ...(mode === 'dark'
      ? {
        background: {
          default: '#0d1117',
          paper: '#161b22',
        },
      }
      : {
        background: {
          default: '#fafafa',
          paper: '#ffffff',
        },
      }),
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
    subtitle1: { fontFamily: '"Montserrat", sans-serif' },
    subtitle2: { fontFamily: '"Montserrat", sans-serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 8 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: mode === 'dark' ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(27, 63, 99, 0.08)',
        },
      },
    },
  },
})

export default getTheme
