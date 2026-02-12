import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'

const clientes = [
  {
    nome: 'Doce Lembrança',
    depoimento: 'A Colombo Growth Lab transformou nossa presença digital. As vendas aumentaram muito e hoje conseguimos alcançar muito mais clientes.',
    handle: '@personalizadosdocelembranca',
    username: 'personalizadosdocelembranca',
    imgurl: 'img/doce.jpg',
    url: 'https://www.instagram.com/personalizadosdocelembranca',
  },
  {
    nome: 'Alegra Kids',
    depoimento: 'O trabalho da equipe foi incrível. Nossas vendas cresceram de forma que não imaginávamos. Super indicamos!',
    handle: '@ale.grakids',
    username: 'ale.grakids',
    imgurl: 'img/alegra.jpg',
    url: 'https://www.instagram.com/ale.grakids',
  },
]

export default function Clientes() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
          Nossos Clientes
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Empresas que confiam na Colombo Growth Lab para crescer no digital.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {clientes.map((cliente, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex' }}>
              <Card
                elevation={0}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  '&:hover': { boxShadow: 2 },
                }}
              >
                <CardActionArea
                  href={cliente.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <CardContent sx={{ py: 3, px: 3 }}>
                    <Box
                      component="img"
                      src={`${cliente.imgurl}`}
                      alt={cliente.nome}
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mx: 'auto',
                        mb: 2,
                        display: 'block',
                        bgcolor: 'action.hover',
                      }}
                    />
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {cliente.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1.5 }}>
                      "{cliente.depoimento}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cliente.handle}
                    </Typography>
                    <Typography variant="caption" color="primary" sx={{ mt: 1, display: 'block' }}>
                      Ver no Instagram →
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
