
# CarbonTrack • Demo Completa (Flask)

Demo com **Login**, **Navbar superior**, **Dashboard**, **Emissões**, **Relatórios**, **Caminhões**, **Configurações** e **Chat**.
Logo correta aplicada (anexo 2).

## Rodando
```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate
pip install flask
python app.py
```
Acesse http://localhost:5000  
Login: **teste / 1234**

## Estrutura
- app.py
- templates/
  - login.html
  - dashboard.html
  - emissoes.html
  - relatorios.html
  - caminhoes.html
  - config.html
  - partials/layout.html
- static/
  - style.css
  - chat.js
  - logo.png
  - caminhoneiro.png
  - chat-icon.png
