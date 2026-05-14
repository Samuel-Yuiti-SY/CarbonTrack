# CarbonTrack - Demo (flask - python)

CarbonTrack e uma demo simples feita em Flask para simular um painel de acompanhamento ambiental. A ideia do projeto e mostrar, de forma visual, como uma empresa poderia acompanhar emissoes, frota, relatorios e configuracoes em um sistema web.

Este projeto nasceu como estudo pratico de Python, Flask, HTML, CSS e organizacao de telas. Ele nao usa banco de dados real nem autenticacao de producao; tudo foi montado para demonstracao e aprendizado.

## Na demo possuímos:

- Tela de login demonstrativa
- Dashboard com indicadores
- Pagina de emissoes
- Pagina de relatorios
- Pagina de caminhoes
- Pagina de configuracoes
- Chat visual simples
- Layout com navbar e identidade visual propria

## Como rodar

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

Rode o projeto:

```bash
python app.py
```

Acesse no navegador:

```txt
http://localhost:5000
```

Login da demo:

```txt
usuario: teste
senha: 1234
```

## Estrutura principal

```txt
app.py
templates/
static/
```

## Observacao

Esta versao em Flask foi mantida como demo original do projeto. Dentro da pasta `carbontrack-v2` existe uma versao mais nova feita em Next.js, preparada para deploy na Vercel.
