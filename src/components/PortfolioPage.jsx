import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CodeIcon from '@mui/icons-material/Code'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import { getPortfolioBySlug } from '../data/portfolios'

const base = import.meta.env.BASE_URL
const rootHref = base.endsWith('/') ? base.slice(0, -1) || '/' : `${base}/`

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`
}

function workItemInitials(item) {
  if (item.logoInitials) return String(item.logoInitials).slice(0, 2).toUpperCase()
  const letters = item.title.replace(/[^a-zA-ZÀ-ÿ]/g, '')
  return (letters.slice(0, 2) || 'PR').toUpperCase()
}

function PortfolioWorkItemLogo({ item }) {
  const [failed, setFailed] = useState(false)
  const rawSrc = failed
    ? undefined
    : item.logoSrc || (item.logoDomain ? faviconUrl(item.logoDomain) : undefined)
  const initials = workItemInitials(item)
  return (
    <Avatar
      src={rawSrc || undefined}
      alt=""
      variant="rounded"
      sx={{
        width: 48,
        height: 48,
        flexShrink: 0,
        bgcolor: 'action.hover',
        color: 'primary.main',
        fontWeight: 700,
        fontSize: '0.95rem',
        border: '1px solid',
        borderColor: 'divider',
      }}
      imgProps={{
        onError: () => setFailed(true),
      }}
    >
      {initials}
    </Avatar>
  )
}

export default function PortfolioPage({ slug }) {
  const data = getPortfolioBySlug(slug)

  if (!data) {
    return (
      <Box sx={{ minHeight: '70vh', py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: (t) => (t.palette.mode === 'dark' ? '#fff' : 'primary.main') }}>
            Portfólio não encontrado
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Não há página para este endereço. Confira o link ou volte ao site principal.
          </Typography>
          <Button variant="contained" color="primary" href={rootHref} startIcon={<ArrowBackIcon />}>
            Voltar ao site FlowUp
          </Button>
        </Container>
      </Box>
    )
  }

  const isMarketing = data.type === 'marketing'
  const accent = isMarketing ? 'secondary.main' : 'primary.main'
  const HeroIcon = isMarketing ? AutoAwesomeIcon : CodeIcon
  const actionBtnSx = {
    minHeight: 52,
    py: 1.25,
    px: { xs: 3, sm: 4 },
    borderRadius: 2,
    border: '2px solid',
    boxSizing: 'border-box',
  }

  return (
    <Box sx={{ bgcolor: 'background.default', pb: 8 }}>
      <Box
        sx={{
          pt: { xs: 4, md: 6 },
          pb: { xs: 5, md: 7 },
          background: (t) =>
            t.palette.mode === 'dark'
              ? `linear-gradient(165deg, ${t.palette.primary.dark}22 0%, transparent 55%)`
              : `linear-gradient(165deg, ${t.palette.secondary.light} 0%, transparent 50%)`,
        }}
      >
        <Container maxWidth="lg">
          <Button
            size="small"
            href={rootHref}
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 3, color: 'text.secondary' }}
          >
            Site FlowUp
          </Button>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Avatar
                src={`${base}${data.avatar}`}
                alt={data.name}
                sx={{
                  width: { xs: 140, md: 160 },
                  height: { xs: 140, md: 160 },
                  mx: { xs: 'auto', md: 0 },
                  mb: 2,
                  fontSize: '2.5rem',
                  bgcolor: accent,
                  border: 4,
                  borderColor: 'background.paper',
                  boxShadow: 3,
                }}
              >
                {data.initials}
              </Avatar>
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <HeroIcon sx={{ color: accent }} />
                <Typography variant="overline" fontWeight={700} letterSpacing={1.2} color="text.secondary">
                  Portfólio
                </Typography>
              </Stack>
              <Typography
                variant="h3"
                component="h1"
                fontWeight={800}
                sx={{
                  fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.75rem' },
                  color: (t) => (t.palette.mode === 'dark' ? '#fff' : 'primary.main'),
                  mb: 1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {data.name}
              </Typography>
              <Typography variant="h6" color="primary.light" sx={{ mb: 2, fontWeight: 600, textAlign: { xs: 'center', md: 'left' } }}>
                {data.role}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                  fontWeight: 600,
                  mb: 1.5,
                  textAlign: { xs: 'center', md: 'left' },
                  color: 'text.primary',
                }}
              >
                {data.headline}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 640, textAlign: { xs: 'center', md: 'left' }, mx: { xs: 'auto', md: 0 } }}>
                {data.summary}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {data.highlights.map((h) => (
                  <Chip key={h} label={h} size="small" color={isMarketing ? 'secondary' : 'primary'} variant={isMarketing ? 'filled' : 'outlined'} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: (t) => (t.palette.mode === 'dark' ? t.palette.background.paper : '#ffffff'),
          py: { xs: 5, md: 7 },
          mt: { xs: 3, md: 4 },
          boxShadow: (t) =>
            t.palette.mode === 'dark' ? 'inset 0 1px 0 rgba(255,255,255,0.06)' : '0 8px 32px rgba(35, 95, 69, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: (t) => (t.palette.mode === 'dark' ? '#fff' : 'primary.main'), mb: 3 }}>
            {isMarketing ? 'Destaques de marketing' : 'Destaques técnicos'}
          </Typography>
          <Grid container spacing={3}>
            {data.projects.map((p) => (
              <Grid item xs={12} md={4} key={p.title}>
                <Card sx={{ height: '100%', borderTop: 4, borderColor: accent }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: { md: 72 } }}>
                      {p.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.75}>
                      {p.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {Array.isArray(data.workItems) && data.workItems.length > 0 && (
            <>
              <Divider sx={{ my: { xs: 4, md: 5 } }} />
              <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: (t) => (t.palette.mode === 'dark' ? '#fff' : 'primary.main'), mb: 3 }}>
                Projetos realizados
              </Typography>
              <Grid container spacing={2}>
                {data.workItems.map((item) => {
                  const rawLinks =
                    Array.isArray(item.links) && item.links.length > 0
                      ? item.links
                      : item.href
                        ? [{ label: item.linkLabel || 'Abrir', href: item.href }]
                        : []
                  const itemLinks = rawLinks.filter((l) => l && l.href && String(l.href).trim())
                  return (
                  <Grid item xs={12} sm={6} md={6} key={item.title}>
                    <Card sx={{ height: '100%', borderLeft: 4, borderColor: accent }}>
                      <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 1 }}>
                          <PortfolioWorkItemLogo item={item} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                        </Stack>
                        <Box sx={{ flexGrow: 1 }} />
                        <Stack direction="column" alignItems="stretch" spacing={1} sx={{ mt: 2 }}>
                          {itemLinks.map((link) => (
                            <Button
                              key={`${link.href}-${link.label}`}
                              variant="outlined"
                              color="primary"
                              size="small"
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              endIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                              sx={{ alignSelf: 'stretch', textTransform: 'none' }}
                            >
                              {link.label}
                            </Button>
                          ))}
                          {itemLinks.length === 0 && (
                            <Chip label="Link em breve" size="small" variant="outlined" color="default" sx={{ alignSelf: 'flex-start' }} />
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                  )
                })}
              </Grid>
            </>
          )}
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href={data.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            sx={{
              ...actionBtnSx,
              borderColor: 'primary.main',
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={rootHref}
            startIcon={<ArrowBackIcon />}
            sx={{
              ...actionBtnSx,
              borderColor: 'primary.dark',
              fontWeight: 700,
              boxShadow: (t) => (t.palette.mode === 'dark' ? 4 : '0 6px 20px rgba(35, 95, 69, 0.35)'),
              '&:hover': {
                boxShadow: (t) => (t.palette.mode === 'dark' ? 6 : '0 8px 28px rgba(35, 95, 69, 0.45)'),
              },
            }}
          >
            Voltar ao site
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
