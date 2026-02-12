import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CheckCircle from '@mui/icons-material/CheckCircle'

const values = [
  'Foco em resultados mensuráveis',
  'Metodologia baseada em dados',
  'Atendimento próximo e transparente',
  'Ética e compromisso com o cliente',
]

export default function QuemSomos() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
          Quem Somos
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', mb: 4 }}>
          A Colombo Growth Lab nasceu da vontade de unir estratégia, criatividade e tecnologia para gerar crescimento real para negócios.
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="body1" paragraph>
                Somos um laboratório de crescimento: testamos, medimos e ajustamos campanhas e canais para que sua marca alcance mais pessoas e converta melhor. Trabalhamos com redes sociais, desenvolvimento de aplicações e análise de dados para entregar resultados que aparecem no seu faturamento.
              </Typography>
              <Typography variant="body1">
                Nossa equipe combina experiência em agências, empresas e atendimento ao cliente, sempre com foco em simplicidade e eficiência.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {values.map((v, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircle sx={{ color: 'secondary.main', fontSize: 24 }} />
                  <Typography variant="body1">{v}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
