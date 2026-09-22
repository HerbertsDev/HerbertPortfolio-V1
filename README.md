# Portfólio — Herbert da Silva da Cruz

Portfólio profissional desenvolvido com Angular e TypeScript para apresentar minha trajetória, meus conhecimentos técnicos e projetos de software. A interface combina a organização visual do macOS e do iOS com um ambiente real de desenvolvimento, incluindo uma composição com MacBook e um terminal animado.

![Prévia do portfólio de Herbert da Silva da Cruz](.github/assets/portfolio-preview.png)

## Versão publicada

- [Acessar o portfólio](https://herbertsdev.github.io/herbert-portfolio/)

## Tecnologias utilizadas

- Angular 22
- TypeScript 6
- HTML semântico
- SCSS e CSS moderno
- RxJS
- Playwright para testes de interface
- GitHub Actions para publicação automática

## Principais funcionalidades

- Página única com navegação entre as seções.
- Hero com a imagem real do ambiente de desenvolvimento integrada à composição.
- Terminal inspirado no macOS, com comandos digitados progressivamente.
- Apresentação de tecnologias, projetos, experiências e formação acadêmica.
- Links reais para GitHub, LinkedIn, Figma, currículo e certificados.
- Layout responsivo para computadores, tablets e celulares.
- Navegação por teclado, foco visível e estrutura semântica.
- Suporte a `prefers-reduced-motion`, exibindo o terminal completo sem animação quando solicitado pelo sistema.

## Pré-requisitos

- Node.js 24
- npm 11 ou versão compatível

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/HerbertsDev/herbert-portfolio.git
cd herbert-portfolio
npm ci
```

## Executar localmente

```bash
npm start
```

O projeto ficará disponível em `http://127.0.0.1:4200/`.

## Testes

Na primeira execução, instale o navegador usado pelo Playwright:

```bash
npx playwright install chromium
```

Depois execute:

```bash
npm test
```

Os testes verificam conteúdo, navegação, links, acessibilidade básica, movimento reduzido e responsividade.

## Build de produção

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist/`.

## Estrutura resumida

```text
src/
├── app/
│   ├── header/           # Navegação principal e barra móvel
│   ├── portfolio-page/   # Seções e composição da página
│   ├── project-card/     # Cards dos projetos
│   ├── terminal/         # Terminal macOS e animação de digitação
│   └── portfolio.data.ts # Dados profissionais e projetos
├── index.html            # Metadados da página
└── styles.scss           # Estilos globais e tokens visuais
public/                   # Imagens, currículo, certificados e favicon
tests/                    # Testes de interface com Playwright
.github/workflows/        # Publicação automática no GitHub Pages
```

## Publicação no GitHub Pages

Cada atualização enviada à branch `main` executa o fluxo de publicação definido em `.github/workflows/deploy-pages.yml`. O build usa o caminho-base `/herbert-portfolio/`, necessário para carregar corretamente os recursos no GitHub Pages.

O GitHub Pages é a hospedagem oficial do portfólio. Cada envio para a branch `main` atualiza o site automaticamente.

## Autor

**Herbert da Silva da Cruz**

- [GitHub](https://github.com/HerbertsDev)
- [LinkedIn](https://www.linkedin.com/in/herbert-da-silva-da-cruz-b001942b0/)
- [Portfólio](https://herbertsdev.github.io/herbert-portfolio/)
