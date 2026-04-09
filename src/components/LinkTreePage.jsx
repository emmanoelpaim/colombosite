import CampaignIcon from '@mui/icons-material/Campaign'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const links = [
  {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5551980305426',
    icon: <WhatsAppIcon />
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/flow.updigital/',
    icon: <InstagramIcon />
  },
  {
    label: 'Nosso Site',
    href: 'https://flowuphub.com.br/',
    icon: <LanguageIcon />
  },
  {
    label: 'Conhecer Serviços',
    href: `${window.location.origin}${import.meta.env.BASE_URL}`,
    icon: <CampaignIcon />
  }
]

export default function LinkTreePage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, p: { xs: 3, md: 4 }, border: '1px solid', borderColor: 'divider', boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 12px 36px rgba(0,0,0,0.45)' : '0 16px 40px rgba(27, 63, 99, 0.16)' }}>
          <Stack spacing={2.5} alignItems="center">
            <Box component="img" src={`${import.meta.env.BASE_URL}img/logo.png`} alt="FlowUp" sx={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '3px solid', borderColor: 'secondary.main', p: 1, bgcolor: 'background.default' }} />
            <Typography variant="h4" align="center" sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
              FlowUp Digital
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary">
              Acesse nossos canais e fale com a nossa equipe.
            </Typography>
            <Stack spacing={1.5} sx={{ width: '100%', mt: 1 }}>
              {links.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={link.icon}
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ py: 1.2, fontWeight: 600 }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
