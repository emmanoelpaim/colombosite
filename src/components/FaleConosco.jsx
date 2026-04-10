import { useState } from 'react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
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
import LocationOn from '@mui/icons-material/LocationOn'
import LinkIcon from '@mui/icons-material/Link'
import PolicyIcon from '@mui/icons-material/Policy'

function maskTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (!digits.length) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function envRecaptchaSiteKey() {
  const raw = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  if (raw == null || typeof raw !== 'string') return ''
  let s = raw.trim()
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim()
  }
  return s
}

const baseUrl = import.meta.env.BASE_URL

const DEFAULT_API_BASE = 'https://inglesback.squareweb.app'

function apiBaseUrl() {
  const env = (import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/$/, '')
  return env || DEFAULT_API_BASE
}

function urlContato() {
  return `${apiBaseUrl()}/api/contact/sendmail`
}

function corpoEnvioContato(form, recaptchaToken) {
  return {
    name: form.nome,
    email: form.email,
    phone: form.telefone,
    message: form.mensagem,
    recaptchaToken
  }
}

function FaleConoscoForm({ getRecaptchaToken }) {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [status, setStatus] = useState({ tipo: null, texto: '' })
  const [enviando, setEnviando] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'telefone') {
      setForm((f) => ({ ...f, telefone: maskTelefone(value) }))
      return
    }
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ tipo: null, texto: '' })
    let recaptchaToken = ''
    if (getRecaptchaToken) {
      try {
        const t = await getRecaptchaToken()
        recaptchaToken = (t && String(t)) || ''
      } catch {
        recaptchaToken = ''
      }
      if (!recaptchaToken) {
        setStatus({ tipo: 'erro', texto: 'Não foi possível validar o envio. Atualize a página e tente novamente.' })
        return
      }
    }
    setEnviando(true)
    try {
      const res = await fetch(urlContato(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpoEnvioContato(form, recaptchaToken))
      })
      let data
      try {
        data = await res.json()
      } catch {
        data = {}
      }
      const msgErro = data.erro || data.error
      const msgInfo = typeof data.message === 'string' ? data.message : ''
      if (!res.ok) {
        const t = typeof msgErro === 'string' && msgErro.length > 0
          ? msgErro
          : (msgInfo || `Não foi possível enviar (${res.status}).`)
        setStatus({ tipo: 'erro', texto: t })
        return
      }
      if (data.ok === false || data.success === false) {
        setStatus({
          tipo: 'erro',
          texto: (typeof msgErro === 'string' && msgErro.length > 0) ? msgErro : (msgInfo || 'Erro ao enviar. Tente novamente.')
        })
        return
      }
      if (msgErro && data.ok !== true && data.success !== true) {
        setStatus({ tipo: 'erro', texto: typeof msgErro === 'string' ? msgErro : 'Erro ao enviar.' })
        return
      }
      setStatus({ tipo: 'sucesso', texto: 'Mensagem enviada com sucesso. Retornaremos em breve!' })
      setForm({ nome: '', email: '', telefone: '', mensagem: '' })
    } catch {
      setStatus({ tipo: 'erro', texto: 'Não foi possível conectar à API. Verifique sua rede ou tente mais tarde.' })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
          Fale Conosco
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Quer crescer no digital? Envie sua mensagem e retornaremos em breve.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
                Contato
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Email color="secondary" />
                <Typography>flowup.digital2@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <LocationOn color="secondary" />
                <Typography>Rio Grande do Sul, Brasil</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Instagram color="secondary" />
                <Link href="https://instagram.com/flowup.digital" target="_blank" rel="noopener noreferrer" color="text.secondary" underline="hover">
                  @flowupdigital
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <LinkIcon color="secondary" />
                <Link component="a" href={`${baseUrl}linktree`} color="text.secondary" underline="hover">
                  Link Tree
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PolicyIcon color="secondary" />
                <Link component="a" href={`${baseUrl}lgpd`} color="text.secondary" underline="hover">
                  LGPD
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
                {status.texto && (
                  <Grid item xs={12}>
                    <Typography color={status.tipo === 'sucesso' ? 'success.main' : 'error.main'}>
                      {status.texto}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large" disabled={enviando} sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.dark' } }}>
                    {enviando ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>
                  {getRecaptchaToken && (
                    <Typography variant="caption" component="p" color="text.secondary" sx={{ mt: 1.5, mb: 0 }}>
                      Este site é protegido pelo reCAPTCHA e aplicam-se a{' '}
                      <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" color="inherit">
                        Política de Privacidade
                      </Link>
                      {' '}e os{' '}
                      <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" color="inherit">
                        Termos de Serviço
                      </Link>
                      {' '}do Google.
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function FaleConoscoComRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  return (
    <FaleConoscoForm
      getRecaptchaToken={() => executeRecaptcha('contato')}
    />
  )
}

export default function FaleConosco() {
  const siteKey = envRecaptchaSiteKey()
  if (siteKey) {
    return (
      <GoogleReCaptchaProvider reCaptchaKey={siteKey} scriptProps={{ async: true, defer: true }}>
        <FaleConoscoComRecaptcha />
      </GoogleReCaptchaProvider>
    )
  }
  return <FaleConoscoForm />
}
