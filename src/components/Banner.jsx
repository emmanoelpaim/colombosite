import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'

const slides = [
  {
    title: 'Aceleramos o crescimento do seu negócio',
    subtitle: 'Estratégias de marketing digital com foco em resultados mensuráveis.',
    cta: 'Conheça nossos serviços',
    target: 'servicos',
  },
  {
    title: 'Tráfego pago e orgânico que converte',
    subtitle: 'Google Ads, Meta Ads e SEO para levar mais clientes até você.',
    cta: 'Fale com a gente',
    target: 'contato',
  },
  {
    title: 'Dados e criatividade trabalhando juntos',
    subtitle: 'Análise e conteúdo para decisões mais inteligentes.',
    cta: 'Saiba mais',
    target: 'servicos',
  },
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[index]

  return (
    <Box
      sx={{
        minHeight: { xs: 70, md: 85 },
        py: { xs: 8, md: 12 },
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${alpha('#1B3F63', 0.92)} 0%, ${alpha('#2EC4B6', 0.85)} 100%)`,
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
        <Typography variant="h3" component="h1" fontWeight={700} gutterBottom sx={{ typography: { xs: 'h4', md: 'h3' } }}>
          {slide.title}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.95, mb: 3, fontWeight: 400 }}>
          {slide.subtitle}
        </Typography>
        <Button
          variant="contained"
          size="large"
          href={`#${slide.target}`}
          onClick={(e) => { e.preventDefault(); document.getElementById(slide.target)?.scrollIntoView({ behavior: 'smooth' }) }}
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            '&:hover': { bgcolor: 'grey.100' },
          }}
        >
          {slide.cta}
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 0.75,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: index === i ? 'white' : alpha('#fff', 0.5),
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
