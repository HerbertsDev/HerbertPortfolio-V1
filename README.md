# Portfólio — Herbert da Silva da Cruz

Portfólio profissional em português brasileiro, desenvolvido com Angular, TypeScript e SCSS. O site apresenta projetos, tecnologias, experiência, formação e formas de contato em uma interface responsiva inspirada no macOS e no iOS.

![Prévia do portfólio de Herbert da Silva da Cruz](.github/assets/portfolio-preview.png)

## Versão publicada

[Acessar o portfólio](https://herbertsdev.github.io/HerbertPortfolio-V1/)

## Tecnologias

- Angular 22.2
- TypeScript 6
- SCSS
- GitHub Actions e GitHub Pages

O projeto não possui backend, banco de dados ou autenticação. Os dados profissionais ficam centralizados em `src/app/portfolio.data.ts` e os recursos públicos ficam em `public/`.

## Executar localmente

Pré-requisitos: Node.js 24 e npm 11 ou versão compatível.

```bash
git clone https://github.com/HerbertsDev/HerbertPortfolio-V1.git
cd HerbertPortfolio-V1
npm ci
npm start
```

O site ficará disponível em `http://127.0.0.1:4200/`.

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos finais são gerados em `dist/`.

## Estrutura

```text
.github/
├── assets/       # Imagem de apresentação do repositório
└── workflows/    # Publicação automática no GitHub Pages
public/           # Imagens, currículo, certificados e favicon
src/
├── app/          # Componentes e dados do portfólio
├── index.html    # Metadados e estrutura inicial
├── main.ts       # Inicialização do Angular
└── styles.scss   # Estilos globais
```

Os componentes foram separados apenas por responsabilidade: navegação, página principal, cards de projetos e terminal da apresentação. A publicação usa somente o GitHub Pages.

## Atualizar conteúdo

Edite `src/app/portfolio.data.ts` para alterar informações pessoais, tecnologias, projetos, experiências e certificados. Imagens e documentos devem ser salvos em `public/` e referenciados com caminhos relativos para continuarem funcionando no GitHub Pages.

Cada envio para a branch `main` executa `.github/workflows/deploy-pages.yml` e publica o conteúdo em `/HerbertPortfolio-V1/`.

## Autor

**Herbert da Silva da Cruz**

- [GitHub](https://github.com/HerbertsDev)
- [LinkedIn](https://www.linkedin.com/in/herbert-da-silva-da-cruz-b001942b0/)
- [Portfólio](https://herbertsdev.github.io/HerbertPortfolio-V1/)
