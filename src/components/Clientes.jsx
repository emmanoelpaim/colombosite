import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const logos = [
  'Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5', 'Cliente 6',
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
          {logos.map((name, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  height: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                }}
              >
                {name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
