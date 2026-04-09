import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function LgpdPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: { xs: 3, md: 5 }, boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 12px 36px rgba(0,0,0,0.45)' : '0 16px 40px rgba(27, 63, 99, 0.16)' }}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
              Política de Cookies e LGPD
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Utilizamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdos. Ao continuar navegando em nosso site, você concorda com o uso dessas tecnologias.
            </Typography>
            <Typography variant="h6">Quais cookies utilizamos</Typography>
            <Typography variant="body1" color="text.secondary">
              Cookies essenciais para funcionamento do site, cookies de desempenho para análise de navegação e cookies funcionais para lembrar preferências.
            </Typography>
            <Typography variant="h6">Base legal</Typography>
            <Typography variant="body1" color="text.secondary">
              O tratamento de dados segue os princípios da LGPD, com foco em transparência, segurança e finalidade específica.
            </Typography>
            <Typography variant="h6">Como gerenciar</Typography>
            <Typography variant="body1" color="text.secondary">
              Você pode remover ou bloquear cookies nas configurações do navegador. Isso pode impactar algumas funcionalidades.
            </Typography>
            <Typography variant="h6">Contato</Typography>
            <Typography variant="body1" color="text.secondary">
              Para solicitações relacionadas a dados pessoais, entre em contato pelos canais oficiais da FlowUp Digital.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
