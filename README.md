# Portfólio de Herbert da Silva da Cruz

Portfólio profissional em português brasileiro, voltado à apresentação de projetos e à busca de estágio em desenvolvimento de software. Desenvolvido com Angular, TypeScript e SCSS, com tema automático claro ou escuro, azul discreto e seis seções: início, sobre mim, tecnologias, projetos, experiência e formação, e contato.

## Tecnologias e decisões

- Angular 22.1.7, com componentes standalone e verificação estrita de tipos e templates.
- TypeScript 6.0.3 e SCSS.
- HTML semântico, navegação por âncoras e fontes do sistema, sem requisições externas de fontes.
- Direção visual inspirada nos fundamentos de design para iOS: hierarquia tipográfica clara, superfícies agrupadas, espaçamento em múltiplos de oito, cabeçalho translúcido e controles com área de toque mínima de 44 pixels.
- Tema definido por `prefers-color-scheme`, barra de navegação inferior no celular, destaque automático da seção visível e suporte às áreas seguras de aparelhos com recorte de tela.
- Playwright apenas para testes de navegação e responsividade; não é incluído no site publicado.
- Sem backend, banco de dados, autenticação, biblioteca de ícones ou animações. O contato usa `mailto:` e abre o aplicativo de e-mail configurado pelo visitante.
- Sem roteador: todo o conteúdo está em uma única página.

As dependências de execução se limitam ao Angular e aos pacotes exigidos por ele. O arquivo `package-lock.json` fixa as versões instaladas.

## Pré-requisitos

- Node.js 24, a partir de 24.15.0, e npm. O arquivo `.nvmrc` indica a versão principal.
- Um navegador atualizado.

A escolha de versões segue a [compatibilidade oficial do Angular](https://angular.dev/reference/versions). A implementação foi compilada com Node.js 24.18.1 e npm 11.16.0.

## Instalar e executar

Abra um terminal nesta pasta e execute:

```sh
npm ci
npm start
```

Abra [a prévia local](http://127.0.0.1:4200). O Angular atualiza a página quando os arquivos são alterados. Use `Ctrl+C` para encerrar.

## Gerar os arquivos para publicação

```sh
npm run build
```

O resultado fica em `dist`. Publique o conteúdo dessa pasta, e não os arquivos de desenvolvimento. A compilação verifica TypeScript, templates Angular e limites de tamanho dos arquivos. Não há serviço de servidor para executar em produção.

## Organização

```text
src/
  app/
    app.ts                    Composição da página e rodapé
    portfolio.data.ts         Informações pessoais e dados editáveis
    header/                   Navegação e comportamento do menu
    portfolio-page/           Seis seções e estilos da página
    project-card/             Apresentação de cada projeto
  index.html                  Idioma e metadados de SEO
  main.ts                     Inicialização do Angular
  styles.scss                 Cores, tipografia e estilos compartilhados
public/
  certificados/              Certificados disponibilizados no site
  images/                    Foto, projetos e imagem de compartilhamento
  curriculo-*.pdf             Currículo para download
  favicon.svg                 Ícone do portfólio
tests/
  portfolio.spec.ts           Verificações no navegador
vercel.json                   Configuração de publicação
```

Cada componente tem uma responsabilidade: o cabeçalho controla o menu, a página organiza o conteúdo e o card apresenta um projeto. Não há serviços ou camadas de arquitetura sem necessidade.

## Atualizar informações

Edite `src/app/portfolio.data.ts`:

| Dado                                                | Configuração                                |
| --------------------------------------------------- | ------------------------------------------- |
| Nome, apresentação, localização, e-mail, idiomas e currículo | `profile`                          |
| GitHub e LinkedIn                                   | `profile.githubUrl` e `profile.linkedinUrl` |
| Curso, instituição, semestre e conclusão prevista   | `education`                                 |
| Categorias e tecnologias                            | `technologyGroups`                          |
| Projetos, escopo, tecnologias e links               | `projects`                                  |
| Empresas, períodos, cargos e descrições             | `experiences`                               |
| Certificações comprovadas                           | `certifications`                            |

O semestre e a previsão de conclusão são dados informados e não avançam automaticamente. Revise-os quando necessário. O ano do rodapé é calculado automaticamente.

Para adicionar um projeto, inclua um objeto em `projects`, com `id` único, nome, categoria, descrição, escopo e tecnologias confirmadas. As interfaces TypeScript no início do arquivo mostram os campos disponíveis.

Os campos `repositoryUrl`, `demoUrl` e `designUrl` são opcionais. Deixe-os ausentes quando não houver uma URL real; os respectivos botões só aparecem quando esses campos são preenchidos. Use endereços completos com `https://` e confirme que podem ser acessados pelo visitante.

Para usar imagens reais, salve os arquivos em `public/images/` e preencha `project.image` ou `profile.photo` com `src` e `alt`. Use um caminho como `/images/arquivo.webp`, forneça uma descrição em português e otimize o arquivo. Os cards reservam uma proporção de 16:9 para imagens; a foto pessoal usa formato quadrado. A imagem de compartilhamento combina a foto corporativa fornecida com a identidade visual do site.

O currículo fica em `public/curriculo-herbert-da-silva-da-cruz.pdf`. Os certificados ficam em `public/certificados/` e são referenciados pelo campo `url` de cada item em `certifications`.

Em `experiences`, os campos `role` e `description` só aparecem quando preenchidos. A seção de certificados só aparece quando `certifications` contém itens. Não inclua informações confidenciais das empresas.

Para mudar as cores, edite as variáveis em `src/styles.scss`. Os estilos específicos ficam ao lado de seus componentes.

Se alterar o nome, a apresentação ou o e-mail, atualize também `src/index.html`, incluindo título, descrição, Open Graph, URL canônica e contato alternativo de `noscript`.

## Executar as verificações

Na primeira execução dos testes, instale o navegador de testes:

```sh
npx playwright install chromium
npm test
```

Os testes iniciam o servidor local automaticamente quando necessário. Para executar com o navegador visível, use `npm run test:ui`. Para compilar e testar em sequência, use `npm run check`.

Também é possível usar o Microsoft Edge instalado, sem baixar outro navegador. No PowerShell:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm test
```

São verificados: carregamento sem erros no console, seis seções, metadados, barras de navegação responsivas, indicação da seção ativa, navegação por teclado, destinos das âncoras, contato por e-mail, tema escuro automático, ausência de links fictícios, movimento reduzido e ausência de rolagem horizontal entre 320 e 1440 pixels, incluindo texto ampliado a 200%.

Algumas verificações conferem o conteúdo inicial fornecido. Ao atualizar nome, e-mail, projetos ou links, atualize as expectativas correspondentes em `tests/portfolio.spec.ts`.

## Versão pública

O projeto está configurado no Sites e usa o endereço:

`https://herbert-desenvolvedor.eskeletog3.chatgpt.site`

A pasta publicada é `dist`, conforme `.openai/hosting.json`. Cada nova publicação deve ser gerada a partir de uma compilação aprovada e do mesmo commit enviado ao repositório de origem do serviço.

## Publicar também na Vercel

1. Crie um repositório com o conteúdo desta pasta, incluindo `package-lock.json`. O `.gitignore` exclui dependências, arquivos gerados e configurações locais.
2. Na Vercel, importe o repositório e selecione esta pasta como raiz do projeto.
3. Use Node.js **24.x** e a opção de framework **Angular**.
4. O `vercel.json` já define instalação com `npm ci`, compilação com `npm run build` e saída em `dist`.
5. Publique e verifique o endereço gerado pela Vercel.

Não são necessárias variáveis de ambiente, credenciais de banco de dados ou regras de reescrita: a navegação usa âncoras da mesma página. Veja a [documentação de configuração da Vercel](https://vercel.com/docs/project-configuration/vercel-json).

Essa configuração é uma opção adicional; ela não é necessária para a versão já hospedada no Sites.

## Informações e links utilizados

- Perfil público do GitHub: `https://github.com/HerbertsDev`.
- Perfil público do LinkedIn: `https://www.linkedin.com/in/herbert-da-silva-da-cruz-b001942b0/`.
- Repositórios públicos do StockFlow e do Simulador da Copa.
- Imagem do StockFlow publicada pelo autor no LinkedIn.
- Captura de execução publicada no README do Simulador da Copa.
- Visão geral exportada do arquivo Figma do protótipo de medicamentos.
- Link compartilhável do protótipo de medicamentos no Figma.
- Currículo, foto corporativa e certificados fornecidos pelo autor.
- Certificações e informações públicas apresentadas no LinkedIn.

O StockFlow é descrito como exercício acadêmico de banco de dados e o projeto de medicamentos é identificado como design e prototipação. O Sistema de Chamados e o InfraControl API foram retirados da seleção porque não possuem repositórios públicos disponíveis. O endereço do portfólio anterior também foi omitido porque retornava erro 404 durante a revisão.
