import CloseIcon from '@mui/icons-material/Close'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const base = import.meta.env.BASE_URL

function portfolioHref(slug) {
  const root = base.endsWith('/') ? base.slice(0, -1) : base
  return `${root || ''}/portifolio/${slug}`
}

const team = [
  {
    name: 'Luana Colombo',
    role: 'Gestão & Atendimento ao Cliente',
    initials: 'LC',
    avatar: 'img/lu.jpeg',
    linkedIn: 'https://www.linkedin.com/in/luana-colombo-53a21617b/',
    portfolioSlug: 'luana',
    bio: 'Responsável pela gestão operacional e pelo relacionamento com clientes, garantindo que cada projeto seja entregue com excelência e transparência.',
    skills: 'Gestão de projetos · Atendimento · Comunicação',
  },
  {
    name: 'Larissa Mença',
    role: 'Criativo & Conteúdo',
    initials: 'LM',
    avatar: 'img/lari.jpeg',
    linkedIn: 'https://www.linkedin.com/in/larissa-mariah-men%C3%A7a-4aa8b86b/',
    portfolioSlug: 'larissa',
    bio: 'Cuida da identidade visual e da produção de conteúdo que conecta marcas ao público, com foco em criatividade e consistência.',
    skills: 'Design · Redação · Estratégia de conteúdo',
  },
  {
    name: 'Emmanoel Paim',
    role: 'Desenvolvimento e publicação de Aplicações',
    initials: 'EP',
    avatar: 'img/manu.jpg',
    linkedIn: 'https://www.linkedin.com/in/emmanoel-da-silva-soares-paim/',
    portfolioSlug: 'emmanoel',
    bio: 'Desenvolve soluções digitais e aplicações que tornam os processos das marcas mais eficientes e escaláveis.',
    skills: 'Desenvolvimento · Tecnologia · Inovação',
  },
  {
    name: 'Douglas Colombo',
    role: 'Desenvolvimento de Aplicações',
    initials: 'DC',
    avatar: 'img/douglas.jpeg',
    linkedIn: 'https://www.linkedin.com/in/douglas-colombo-51a75416a/',
    portfolioSlug: 'douglas',
    bio: 'Desenvolve soluções digitais e aplicações que tornam os processos das marcas mais eficientes e escaláveis.',
    skills: 'Desenvolvimento · Tecnologia · Inovação',
  },
]

export default function NossaEquipe() {
  const [selected, setSelected] = useState(null)

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
          Nossa Equipe
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Pessoas que fazem a FlowUp entregar resultados.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {team.map((p, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: 3,
                  borderColor: 'secondary.main',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, boxShadow 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                }}
                onClick={() => setSelected(p)}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <Avatar
                    src={p.avatar}
                    alt={p.name}
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
                  <Typography variant="body2" color="primary.light" sx={{ mb: 2 }}>
                    {p.role}
                  </Typography>
                  <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelected(p)
                      }}
                    >
                      Saiba mais
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      component="a"
                      href={portfolioHref(p.portfolioSlug)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Portfólio
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
            outline: 'none',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', right: 8, top: 8 }}
            onClick={() => setSelected(null)}
            aria-label="fechar"
          >
            <CloseIcon />
          </IconButton>
          {selected && (
            <Box sx={{ textAlign: 'center', pt: 1 }}>
              <Avatar
                src={selected.avatar}
                alt={selected.name}
                sx={{
                  width: 100,
                  height: 100,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'secondary.main',
                  fontSize: '1.75rem',
                }}
              >
                {selected.initials}
              </Avatar>
              <Typography variant="h6">{selected.name}</Typography>
              <Typography variant="body2" color="primary.main" sx={{ mb: 2 }}>
                {selected.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mb: 1.5 }}>
                {selected.bio}
              </Typography>
              <Typography variant="caption" fontWeight={600} display="block" sx={{ textAlign: 'justify', color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main' }}>
                {selected.skills}
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                justifyContent="center"
                alignItems="stretch"
                sx={{ mt: 2 }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  component="a"
                  href={selected.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver perfil no LinkedIn
                </Button>
                <Button variant="outlined" color="primary" size="small" component="a" href={portfolioHref(selected.portfolioSlug)}>
                  Portfólio
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  )
}
