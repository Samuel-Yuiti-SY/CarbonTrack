# Revisão de interface — CarbonTrack

Data: 25/11/2026. Branch: refactor/professional-ui-ux.

## Direção visual

Ambiental: tons vegetais e amarelo do logotipo, gráfico legível do conjunto demonstrativo existente, navegação orientada a dados.

Referência consultada: https://minimal.gallery/tag/environmental/. Uso como pesquisa de composição; sem cópia de componentes, marcas ou imagens. Logotipos e imagens existentes preservados. Sem dependências novas de interface.

## Alterações

Redução de decoração, superfícies consistentes, hierarquia e textos específicos do projeto; foco visível e respeito a movimento reduzido. Rotas, dados, APIs, autenticação e regras existentes preservados.

## Validação executada

Lint ESLint e build com TypeScript aprovados; nove larguras sem overflow; seis rotas internas, PT/EN, tema e menu móvel exercitados; erro de hidratação de preferências corrigido; sem erros JavaScript e sem violações axe A/AA na landing.

Larguras da página inicial: 360, 390, 430, 768, 1024, 1280, 1440, 1920 e 2560 px. Essas medições não equivalem a uma revisão manual completa de todas as telas.

Lighthouse móvel em build local, ordem performance/acessibilidade/boas práticas/SEO: 99/100/100/100. Execução de laboratório, sem dados de campo ou INP. Resultados variam com ambiente e carga; detalhes no relatório consolidado.

## Limitações e continuidade

Sem suíte unitária configurada. Dados continuam fictícios. Exportação e integrações reais não foram adicionadas. Commit do deployment anterior não disponível nos metadados.

axe e Lighthouse não certificam conformidade WCAG. Validação de preview e publicação estão registradas no controle consolidado. O commit inicial foi preservado para rollback.
