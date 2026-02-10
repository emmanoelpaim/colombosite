# Colombo Growth Lab - Site de Marketing Digital

Site institucional da Colombo Growth Lab em React + Material UI.

## Seções

- Banner rotatório
- Nossos Serviços
- Nossos Clientes
- Quem Somos
- Nossa Equipe
- Fale Conosco

## Logo

Coloque o arquivo do logo em `public/logo.png` para exibição no cabeçalho e no favicon. Se o logo não estiver em `public/logo.png`, o cabeçalho exibirá o texto "Colombo Growth Lab".

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Hospedagem no GitHub

Para publicar no GitHub Pages:

1. Crie um repositório no GitHub.
2. Instale: `npm install --save-dev gh-pages`
3. No `package.json`, adicione: `"homepage": "https://SEU-USUARIO.github.io/colombo-growth-lab"`
4. Em `scripts`: `"deploy": "vite build && gh-pages -d dist"`
5. Em `vite.config.js`, adicione `base: '/colombo-growth-lab/'` (ou o nome do repo).
6. Rode: `npm run deploy`

Acesse o repositório → Settings → Pages → Source: branch `gh-pages`, pasta `/ (root)`.
