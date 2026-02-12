import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Planos() {
  const plans = [
    {
      title: 'Starter Content',
      price: 'R$ 900/mês',
      description: 'Ideal para negócios locais que precisam começar a se posicionar.',
      includes: [
        'Planejamento estratégico mensal',
        '8 posts feed (arte ou carrossel)',
        '8 legendas estratégicas',
        '4 roteiros de stories',
        'Calendário editorial',
        '1 reunião mensal'
      ],
      frequency: 'Frequência média: 2 posts por semana'
    },
    {
      title: 'Growth Content',
      price: 'R$ 1.500/mês',
      description: 'Ideal para quem quer gerar autoridade e atrair clientes constantemente.',
      includes: [
        'Planejamento estratégico mensal',
        '12 posts feed (carrossel, imagem ou misto)',
        '12 legendas estratégicas',
        '8 roteiros de stories',
        'Estratégia de posicionamento',
        'Análise de perfil',
        '1 reunião mensal'
      ],
      frequency: 'Frequência: 3 posts por semana',
      highlight: true,
      tag: 'Melhor custo benefício'
    },
    {
      title: 'Authority Content',
      price: 'R$ 2.200/mês',
      description: 'Ideal para profissionais liberais, clínicas e negócios online.',
      includes: [
        'Planejamento estratégico completo',
        '16 posts feed',
        '12 roteiros de stories',
        '4 roteiros de vídeo (Reels)',
        'Estratégia de autoridade',
        'Estudo de concorrência',
        'Relatório mensal simples',
        '2 reuniões mensais'
      ],
      frequency: 'Foco em construção de marca e percepção premium.'
    },
    {
      title: 'Content + Reels Performance',
      price: 'R$ 2.800/mês',
      description: 'Perfeito para quem quer crescer rápido no Instagram.',
      includes: [
        '12 posts feed',
        '8 roteiros de Reels',
        'Estratégia de conteúdo voltada à conversão',
        'Análise de métricas',
        'Planejamento quinzenal'
      ]
    }
  ]

  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
      <Container>
        <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
          Planos
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Planos e investimentos sob medida para o seu negócio. Entre em contato que vamos te ajudar a escolher o melhor plano.
        </Typography>
        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderTop: 3,
                  borderColor: plan.highlight ? 'secondary.main' : 'divider',
                  boxShadow: plan.highlight ? 4 : 1,
                  transform: plan.highlight ? 'translateY(-4px)' : 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <CardContent>
                  {plan.tag && (
                    <Typography variant="overline" color="secondary.main">
                      {plan.tag}
                    </Typography>
                  )}
                  <Typography variant="h6" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A partir de
                  </Typography>
                  <Typography variant="h5" color="primary" fontWeight={700} gutterBottom>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {plan.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, my: 2 }}>
                    {plan.includes.map((item, i) => (
                      <Typography key={i} component="li" variant="body2">
                        {item}
                      </Typography>
                    ))}
                  </Box>
                  {plan.frequency && (
                    <Typography variant="body2" color="text.secondary">
                      {plan.frequency}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
