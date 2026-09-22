# Verificação da entrega

Verificações executadas em 21 de setembro de 2026.

| Verificação | Resultado |
| --- | --- |
| Compilação de produção com `npm run build` | Aprovada, sem erros ou alertas de tamanho |
| Testes com Playwright e Microsoft Edge | 14 aprovados, 0 falhas |
| Tamanhos de tela | 320, 390, 768, 1024 e 1440 pixels, sem rolagem horizontal |
| Texto ampliado | 200% em tela de 390 pixels, sem transbordamento horizontal |
| Navegação | Âncoras válidas, menu móvel, Escape, foco e atalho para o conteúdo aprovados |
| Links | GitHub, LinkedIn, e-mail, currículo, certificados e repositórios conferidos; endereços antigos com erro 404 foram omitidos |
| Imagens | Foto corporativa fornecida, StockFlow obtida no LinkedIn, Simulador obtido no GitHub, protótipo extraído do Figma e imagem social própria |
| Certificado da Zetheta | Página normalizada para 840 × 510 pontos e renderização visual conferida |
| Movimento reduzido | Rolagem suave desativada quando solicitada pelo sistema |
| Erros de execução | Nenhum erro de página ou de console detectado nos testes |
| Idioma e metadados | `pt-BR`, título, descrição, URL canônica e Open Graph conferidos |
| Análise automatizada de acessibilidade | Axe-core 4.13.0, regras WCAG A/AA selecionadas: 0 violações detectadas em computador e celular |
| Revisão visual | Capturas completas conferidas em 1440 e 390 pixels |
| Dependências | Apenas Angular e suas dependências em execução; ferramentas de compilação e Playwright em desenvolvimento |
| Publicação | Site público no endereço indicado no README |

A análise automatizada deixou o contraste das setas decorativas para conferência manual. As setas usam a cor `#b0b3bb` sobre `#151719`, com contraste calculado de **8,57:1**.

Os testes de celular usam o Microsoft Edge com emulação de tamanho de tela, densidade e interação por toque. Eles não substituem a conferência final em um aparelho físico, que depende de acesso a esse aparelho.

A compilação final gerou **164,48 kB** de JavaScript e CSS, com transferência estimada pelo Angular em **47,46 kB**.

## Conteúdo conferido

- As seis seções solicitadas estão presentes.
- A busca por estágio aparece no início e permanece visível na composição para celular.
- A apresentação, a instituição, o curso, a previsão de conclusão, as empresas, os cargos, os períodos, as responsabilidades, os idiomas e o contato correspondem ao currículo e aos documentos fornecidos.
- Os três projetos selecionados têm escopos identificados como desenvolvimento, banco de dados ou prototipação, conforme as fontes disponíveis.
- StockFlow e Simulador da Copa 2026 apontam para repositórios públicos válidos.
- O Sistema de Chamados e o InfraControl API foram removidos porque não possuem repositórios públicos disponíveis.
- O currículo, a foto corporativa e os seis certificados possuem arquivos reais publicados no próprio site.
- Nenhum resultado, métrica ou link foi inventado.
- A atualização de conteúdo está concentrada em `src/app/portfolio.data.ts`; SEO e contato sem JavaScript ficam em `src/index.html`.

## Observação do ambiente de execução

O isolamento de arquivos desta sessão impediu o resolvedor do Angular de ler uma pasta ancestral do projeto. A compilação e a prévia foram executadas usando um mapeamento temporário do próprio diretório do projeto, sem alterar a aplicação ou suas dependências. Esse recurso não é necessário em uma instalação local comum nem no serviço de hospedagem.

Os testes foram executados com `PLAYWRIGHT_CHANNEL=msedge`, usando o navegador já instalado. O README documenta também a instalação do Chromium de testes para outros ambientes. A ferramenta de análise de acessibilidade foi instalada separadamente da aplicação e não integra o pacote entregue.
