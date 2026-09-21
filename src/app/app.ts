import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Header } from "./header/header";
import { PortfolioPage } from "./portfolio-page/portfolio-page";
import { profile, socialLinks } from "./portfolio.data";

@Component({
  selector: "app-root",
  imports: [Header, PortfolioPage],
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <app-header />
    <main id="conteudo" tabindex="-1"><app-portfolio-page /></main>
    <footer class="site-footer container">
      <p>© {{ year }} {{ profile.name }}.</p>
      <div class="footer-links">
        @for (link of socialLinks; track link.label) {
          <a
            [href]="link.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="link.label + ' (abre em nova aba)'"
            >{{ link.label }}</a
          >
        }
        <span>Desenvolvido com Angular.</span>
        <a href="#inicio" aria-label="Voltar ao início"
          >Voltar ao início <span aria-hidden="true">↑</span></a
        >
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly profile = profile;
  protected readonly socialLinks = socialLinks;
  protected readonly year = new Date().getFullYear();
}
