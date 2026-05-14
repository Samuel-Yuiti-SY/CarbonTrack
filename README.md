# CarbonTrack - Demo (flask - python)

Demo web para simular um painel de acompanhamento ambiental, com foco em emissoes de CO2, indicadores, relatorios e gestao de frota.

O projeto foi criado como estudo pratico de Python, Flask, HTML, CSS e organizacao de telas. A proposta e mostrar, de forma simples e visual, como uma empresa poderia acompanhar dados ambientais em um sistema interno.

A demo original esta em Flask. Dentro da pasta `carbontrack-v2` existe uma versao mais nova feita em Next.js, publicada na Vercel com visual atualizado e identidade visual baseada na logo do projeto.

## Acesse o site

Producao na Vercel:

https://carbontrack-v2-theta.vercel.app

## Versao

Versao atual: 1.0.0

## Funcionalidades

- Tela de login demonstrativa
- Dashboard com indicadores ambientais
- Pagina de emissoes
- Pagina de relatorios
- Pagina de caminhoes
- Pagina de configuracoes
- Chat visual simples
- Layout com navbar
- Logo e identidade visual propria
- Dados ficticios para demonstracao

## Tecnologias

- Python
- Flask
- HTML
- CSS
- JavaScript
- Next.js na versao `carbontrack-v2`
- React
- TypeScript
- Tailwind CSS
- Deploy na Vercel

## Como usar

Na versao publicada na Vercel:

1. Acesse o site.
2. Clique em Acessar demo.
3. Navegue pelas paginas de dashboard, emissoes, frota, relatorios, configuracoes e sobre o projeto.

Na versao Flask local:

1. Rode o projeto localmente.
2. Acesse `http://localhost:5000`.
3. Use o login demonstrativo.

Login da demo:

```txt
usuario: teste
senha: 1234
```

## Como rodar localmente

Requisitos:

- Python 3
- pip

Crie e ative um ambiente virtual:

```bash
python -m venv .venv
```

No Windows:

```bash
.venv\Scripts\activate
```

No macOS ou Linux:

```bash
source .venv/bin/activate
```

Instale o Flask:

```bash
pip install flask
```

Inicie o projeto:

```bash
python app.py
```

Acesse:

```txt
http://localhost:5000
```

## Estrutura principal

```txt
app.py
templates/
  login.html
  dashboard.html
  emissoes.html
  relatorios.html
  caminhoes.html
  config.html
  partials/
static/
  style.css
  chat.js
  logo.png
  caminhoneiro.png
  chat-icon.png
carbontrack-v2/
```

## Versao v2

A pasta `carbontrack-v2` contem uma versao mais moderna do CarbonTrack, criada com Next.js, React, TypeScript e Tailwind CSS.

Essa versao foi preparada para deploy na Vercel e usa dados ficticios para demonstrar um produto SaaS de monitoramento ambiental.

## Deploy

O projeto `carbontrack-v2` esta pronto para deploy na Vercel.

Configuracoes recomendadas:

```txt
Framework Preset: Next.js
Root Directory: carbontrack-v2
Build Command: npm run build
Output Directory: .next
```

## Observacao

Este projeto e demonstrativo. Nenhum dado real de empresa, frota, usuario ou emissao e utilizado.

## Creditos

Projeto criado por: Samuel Yuiti

E-mail: samuelyuit@gmail.com

LinkedIn: https://www.linkedin.com/in/samuelyuiti/
