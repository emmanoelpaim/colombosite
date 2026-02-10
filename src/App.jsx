import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import Banner from './components/Banner'
import Servicos from './components/Servicos'
import Clientes from './components/Clientes'
import QuemSomos from './components/QuemSomos'
import NossaEquipe from './components/NossaEquipe'
import FaleConosco from './components/FaleConosco'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = [
  { id: 'banner', label: 'Início' },
  { id: 'servicos', label: 'Nossos Serviços' },
  { id: 'clientes', label: 'Nossos Clientes' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'equipe', label: 'Nossa Equipe' },
  { id: 'contato', label: 'Fale Conosco' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'primary.main', boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
          <Box component="a" href="#" onClick={(e) => { e.preventDefault(); scrollTo('banner') }} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            {!logoError ? (
              <img src="/logo.png" alt="Colombo Growth Lab" height={48} style={{ marginRight: 8 }} onError={() => setLogoError(true)} />
            ) : (
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>Colombo Growth Lab</Typography>
            )}
          </Box>
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {navItems.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => scrollTo(item.id)}>
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 260, pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => { scrollTo(item.id); setDrawerOpen(false) }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <section id="banner">
          <Banner />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="clientes">
          <Clientes />
        </section>
        <section id="quem-somos">
          <QuemSomos />
        </section>
        <section id="equipe">
          <NossaEquipe />
        </section>
        <section id="contato">
          <FaleConosco />
        </section>
      </main>
    </>
  )
}
