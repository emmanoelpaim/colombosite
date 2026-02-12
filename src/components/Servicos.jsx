import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import TrendingUp from '@mui/icons-material/TrendingUp'
import Search from '@mui/icons-material/Search'
import Campaign from '@mui/icons-material/Campaign'
import Analytics from '@mui/icons-material/Analytics'
import Create from '@mui/icons-material/Create'
import Groups from '@mui/icons-material/Groups'
import { Laptop } from '@mui/icons-material'

const services = [
  /*{
    icon: <TrendingUp />,
    title: 'Gestão de Tráfego Pago',
    desc: 'Google e Meta Ads.',
    detail: 'Tráfego pago é a geração de visitas por anúncios em plataformas digitais, com visibilidade imediata e controle sobre público, orçamento e monitoramento em tempo real. No Google Ads trabalhamos com intenção de busca (pesquisa, YouTube e rede de display) para capturar quem já busca seu produto ou serviço. No Meta Ads (Facebook e Instagram) usamos interesses e comportamentos para engajamento, reconhecimento de marca e criação de demanda. Nossa abordagem inclui definição de objetivos (leads, conversões, branding), segmentação precisa, criativos atrativos, testes A/B e acompanhamento de CPC, CTR, conversão e ROI. A combinação das duas plataformas forma um funil eficaz: Meta gera tráfego e leads; Google converte quem está pronto para comprar.'
  },*/
  /*{
    icon: <Search />,
    title: 'SEO',
    desc: 'Otimização para mecanismos de busca e crescimento orgânico.',
    detail: 'SEO melhora o posicionamento do seu site nos resultados orgânicos dos buscadores, atraindo tráfego qualificado e sustentável. Trabalhamos SEO on-page (títulos, meta descrições, cabeçalhos, imagens e conteúdo), off-page (link building e autoridade de domínio) e técnico (velocidade, responsividade, URLs e segurança). Usamos pesquisa de palavras-chave em camadas, termos de cauda longa e análise de intenção de busca. Acompanhamos com Google Analytics 4 e Search Console. Empresas na primeira página do Google capturam a maior parte do tráfego de pesquisa; nosso foco é levar sua marca para lá com resultados de longo prazo.'
  },*/
  {
    icon: <Campaign />,
    title: 'Mídias Sociais',
    desc: 'Estratégia, conteúdo e gestão de redes para sua marca.',
    detail: 'Gestão de redes sociais é planejar, executar e avaliar a presença da sua marca nas plataformas digitais. Definimos objetivos SMART, identidade da marca e personas para escolher os canais certos. Montamos calendário de conteúdo alinhado à sua voz e valores. O conteúdo é informativo, atraente e consistente entre as redes. Monitoramos publicações, interações e métricas para ajustar a estratégia com base em dados. O resultado é maior reconhecimento, engajamento e uma presença digital que reflete sua empresa.'
  },
  /*{
    icon: <Analytics />,
    title: 'Analytics & BI',
    desc: 'Métricas, dashboards e relatórios para decisões baseadas em dados.',
    detail: 'Analytics e BI vão além de relatórios: integramos dados de várias fontes para explicar o "por que" e indicar o "o que fazer". Construímos dashboards interativos e atualizados que funcionam como painel de controle: KPIs críticos, filtros por canal e período, visualizações claras e alertas quando os números saem da faixa. Oferecemos visão executiva (receita e crescimento), operacional (campanhas e canais) e analítica (diagnóstico de causas). A partir do seu objetivo estratégico definimos KPIs, indicadores de apoio e métricas operacionais. Com isso você toma decisões com base em dados, aloca orçamento nos canais certos e acompanha ROI, CAC e conversão.'
  },*/
  {
    icon: <Create />,
    title: 'Content Marketing',
    desc: 'Produção de conteúdo que engaja e converte.',
    detail: 'Content marketing é a criação e distribuição de materiais relevantes para atrair, engajar e converter seu público. A estratégia se baseia em educação e confiança, não só em propaganda. Conhecemos a fundo o público: desejos, dores e comportamentos. Produzimos com base em dados e em formatos que performam: vídeos curtos, podcasts, conteúdos interativos e infográficos. Alinhamos o conteúdo à jornada de compra (atração, leads ou conversão) e distribuímos de forma estratégica com redes sociais. Conteúdo de qualidade gera mais leads a um custo menor e constrói relacionamento de longo prazo.'
  },
  {
    icon: <Groups />,
    title: 'Consultoria',
    desc: 'Diagnóstico e planejamento de marketing digital sob medida.',
    detail: 'A consultoria é para empresas que querem clareza sobre onde estão e para onde ir no digital. Fazemos reunião inicial para entender problemas e contexto; em seguida, análise técnica de posicionamento. O diagnóstico identifica pontos fortes, fracos e oportunidades. Entregamos plano de ação priorizado, cronograma, linha editorial e acompanhamento. Tudo adaptado ao estágio, orçamento e objetivos da sua empresa, sem fórmulas prontas.'
  },
  {
    icon: <Laptop />,
    title: 'Desenvolvimento de aplicações',
    desc: 'Desenvolvimento de aplicativos, sistemas web e soluções digitais sob medida.',
    detail: 'Desenvolvemos aplicativos e aplicações digitais focadas em resolver problemas reais do seu negócio. Atuamos desde a definição do escopo e das funcionalidades até o design das telas e a implementação técnica, sempre priorizando usabilidade, performance e segurança. Criamos painéis, sistemas internos, automações e integrações com outras ferramentas, além de aplicativos que funcionam bem em qualquer dispositivo. Nosso objetivo é transformar processos manuais em fluxos digitais simples, reduzir retrabalho e gerar mais eficiência para sua operação.'
  }
]

export default function Servicos() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleOpen = (s) => {
    setSelected(s)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setSelected(null)
  }

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
          Nossos Serviços
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', mb: 4 }}>
          Soluções integradas para escalar sua presença digital e seus resultados.
        </Typography>
        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                onClick={() => handleOpen(s)}
                sx={{
                  height: '100%',
                  borderTop: 3,
                  borderColor: 'secondary.main',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, boxShadow 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 }
                }}
              >
                <CardContent sx={{ '& .MuiSvgIcon-root': { fontSize: 40, color: 'secondary.main', mb: 1 } }}>
                  {s.icon}
                  <Typography variant="h6" gutterBottom>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 1 }}>
          {selected && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, '& .MuiSvgIcon-root': { color: 'secondary.main' } }}>
                {selected.icon}
                <span>{selected.title}</span>
              </Box>
              <IconButton onClick={handleClose} size="small" aria-label="fechar">
                <Close />
              </IconButton>
            </>
          )}
        </DialogTitle>
        <DialogContent dividers>
          {selected && (
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {selected.detail}
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
}
