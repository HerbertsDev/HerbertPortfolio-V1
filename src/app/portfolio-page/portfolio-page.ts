import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from "@angular/core";
import { ProjectCard } from "../project-card/project-card";
import { Terminal } from "../terminal/terminal";
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  socialLinks,
  technologyGroups,
} from "../portfolio.data";

@Component({
  selector: "app-portfolio-page",
  imports: [ProjectCard, Terminal],
  templateUrl: "./portfolio-page.html",
  styleUrl: "./portfolio-page.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage implements OnDestroy {
  protected readonly profile = profile;
  protected readonly education = education;
  protected readonly technologyGroups = technologyGroups;
  protected readonly projects = projects;
  protected readonly experiences = experiences;
  protected readonly certifications = certifications;
  protected readonly socialLinks = socialLinks;
  protected readonly emailUrl = `mailto:${profile.email}`;
  private revealObserver?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.observeRevealElements());
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }

  private observeRevealElements(): void {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          this.revealObserver?.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    elements.forEach((element) => this.revealObserver?.observe(element));
  }
}
