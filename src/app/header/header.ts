import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnDestroy {
  private sectionObserver?: IntersectionObserver;

  protected readonly activeSection = signal("inicio");
  protected readonly links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre mim" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#projetos", label: "Projetos" },
    { href: "#experiencia", label: "Experiência e formação" },
    { href: "#contato", label: "Contato" },
  ];
  protected readonly mobileLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#projetos", label: "Projetos" },
    { href: "#experiencia", label: "Trajetória" },
    { href: "#contato", label: "Contato" },
  ];

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  protected selectSection(href: string): void {
    this.activeSection.set(href.slice(1));
  }

  protected isActive(href: string): boolean {
    return this.activeSection() === href.slice(1);
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  private observeSections(): void {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    const sectionFromHash = window.location.hash.slice(1);

    if (sectionFromHash) {
      this.activeSection.set(sectionFromHash);
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          this.activeSection.set(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -62% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => this.sectionObserver?.observe(section));
  }
}
