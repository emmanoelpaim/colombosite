import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'

const team = [
  { name: 'Luana Colombo', role: 'Gestão e Atendimento ao Cliente', initials: 'N1' },
  { name: 'Larissa Mença', role: 'Criativo & Conteúdo', initials: 'N2' },
  { name: 'Emmanoel Paim', role: 'Desenvolvimento de Aplicações', initials: 'N3' },
]

export default function NossaEquipe() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
          Nossa Equipe
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Pessoas que fazem a Colombo Growth Lab entregar resultados.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {team.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 1.5,
                      bgcolor: 'secondary.main',
                      fontSize: '2rem',
                    }}
                  >
                    {p.initials}
                  </Avatar>
                  <Typography variant="h6">{p.name}</Typography>
                  <Typography variant="body2" color="secondary.main">
                    {p.role}
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
