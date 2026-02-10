import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Instagram from '@mui/icons-material/Instagram'
import Email from '@mui/icons-material/Email'
import Phone from '@mui/icons-material/Phone'
import LocationOn from '@mui/icons-material/LocationOn'

function maskTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (!digits.length) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function FaleConosco() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'telefone') {
      setForm((f) => ({ ...f, telefone: maskTelefone(value) }))
      return
    }
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
          Fale Conosco
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Quer crescer no digital? Envie sua mensagem e retornaremos em breve.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Contato
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Email color="secondary" />
                <Typography>contato@colombogrowthlab.com.br</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Phone color="secondary" />
                <Typography>(00) 00000-0000</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <LocationOn color="secondary" />
                <Typography>Sua cidade, UF</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Instagram color="secondary" />
                <Link href="https://instagram.com/colombogrowthlab" target="_blank" rel="noopener noreferrer" color="text.secondary" underline="hover">
                  @colombogrowthlab
                </Link>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Nome" name="nome" value={form.nome} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="E-mail" name="email" type="email" value={form.email} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Telefone" name="telefone" value={form.telefone} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} multiline rows={4} required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large" sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}>
                    Enviar mensagem
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
