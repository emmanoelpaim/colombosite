import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const COOKIE_NAME = 'flowup_lgpd_accepted'

function hasConsentCookie() {
  return document.cookie.split(';').some((item) => item.trim().startsWith(`${COOKIE_NAME}=true`))
}

function saveConsentCookie() {
  const oneYearInSeconds = 60 * 60 * 24 * 365
  document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${oneYearInSeconds}; SameSite=Lax`
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!hasConsentCookie())
  }, [])

  const handleAccept = () => {
    saveConsentCookie()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 1400,
        mx: 'auto',
        maxWidth: 960,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 30px rgba(0,0,0,0.45)' : '0 12px 32px rgba(27, 63, 99, 0.2)',
        p: 2
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between">
        <Typography variant="body2" color="text.secondary" sx={{ pr: { md: 2 } }}>
          Utilizamos cookies para melhorar sua experiência de navegação, analisar tráfego e personalizar conteúdos, conforme a LGPD.
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button component="a" href={`${import.meta.env.BASE_URL}lgpd`} variant="outlined" color="primary">
            Política de Cookies
          </Button>
          <Button onClick={handleAccept} variant="contained" color="primary">
            Aceitar
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
