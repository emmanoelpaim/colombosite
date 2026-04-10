# FlowUp - Site de Marketing Digital

Site institucional da FlowUp em React + Material UI.

## Seções

- Banner rotatório
- Nossos Serviços
- Nossos Clientes
- Quem Somos
- Nossa Equipe
- Fale Conosco

## Logo

Coloque o arquivo do logo em `public/img/logo.png` para exibição no cabeçalho e no favicon. Se o logo não estiver disponível, o cabeçalho exibirá o texto "FlowUp".

## Desenvolvimento

```bash
npm install
npm run dev
```

Crie um **`.env`** na raiz (não versionado), copiando de `.env.example`:

- `VITE_RECAPTCHA_SITE_KEY` — chave **site** do reCAPTCHA v3 (Google).
- `VITE_API_BASE_URL` — opcional; o padrão no código é `https://inglesback.squareweb.app`.

**Não commite o `.env`.**

## Formulário de contato (API externa)

O front envia **POST** para `{VITE_API_BASE_URL ou padrão}/api/contact/sendmail` com JSON:

`name`, `email`, `phone`, `message`, `recaptchaToken`.

A validação do reCAPTCHA e o envio de e-mail ficam no backend hospedado (ex.: Square Cloud).

## Build

```bash
npm run build
```

## Variáveis no GitHub (produção)

**Settings** → **Environments** → **github-pages** → secrets ou variables.

O workflow injeta no build: `VITE_RECAPTCHA_SITE_KEY` e opcionalmente `VITE_API_BASE_URL` (se omitir, usa o padrão `https://inglesback.squareweb.app`).

### reCAPTCHA v3

1. Chave criada no [admin do reCAPTCHA](https://www.google.com/recaptcha/admin) como **v3**, com os **domínios** do site (e `localhost` para testes).
2. `VITE_RECAPTCHA_SITE_KEY` = chave do site (pública). A chave secreta fica só no backend da API.

## Hospedagem no GitHub Pages (Actions)

1. Branch `main` ou `master`.
2. Workflow `.github/workflows/ci.yml` publica o `dist`.
3. **Settings** → **Pages** → origem **GitHub Actions**.
