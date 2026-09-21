import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
  host: { "(document:keydown.escape)": "closeWithEscape()" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly menuButton =
    viewChild<ElementRef<HTMLButtonElement>>("menuButton");
  protected readonly links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre mim" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#projetos", label: "Projetos" },
    { href: "#experiencia", label: "Experiência e formação" },
    { href: "#contato", label: "Contato" },
  ];

  protected closeWithEscape(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.menuButton()?.nativeElement.focus();
    }
  }
}
