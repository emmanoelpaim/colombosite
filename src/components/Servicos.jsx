import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TrendingUp from '@mui/icons-material/TrendingUp'
import Search from '@mui/icons-material/Search'
import Campaign from '@mui/icons-material/Campaign'
import Analytics from '@mui/icons-material/Analytics'
import Create from '@mui/icons-material/Create'
import Groups from '@mui/icons-material/Groups'

const services = [
  { icon: <TrendingUp />, title: 'Gestão de Tráfego Pago', desc: 'Google e Meta Ads.' },
  { icon: <Search />, title: 'SEO', desc: 'Otimização para mecanismos de busca e crescimento orgânico.' },
  { icon: <Campaign />, title: 'Mídias Sociais', desc: 'Estratégia, conteúdo e gestão de redes para sua marca.' },
  { icon: <Analytics />, title: 'Analytics & BI', desc: 'Métricas, dashboards e relatórios para decisões baseadas em dados.' },
  { icon: <Create />, title: 'Content Marketing', desc: 'Produção de conteúdo que engaja e converte.' },
  { icon: <Groups />, title: 'Consultoria', desc: 'Diagnóstico e planejamento de marketing digital sob medida.' },
]

export default function Servicos() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
          Nossos Serviços
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Soluções integradas para escalar sua presença digital e seus resultados.
        </Typography>
        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: '100%', borderTop: 3, borderColor: 'secondary.main' }}>
                <CardContent sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: 'secondary.main', mb: 1 } }}>
                  {s.icon}
                  <Typography variant="h6" gutterBottom>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
