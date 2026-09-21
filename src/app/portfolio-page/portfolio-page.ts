import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ProjectCard } from "../project-card/project-card";
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
  imports: [ProjectCard],
  templateUrl: "./portfolio-page.html",
  styleUrl: "./portfolio-page.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {
  protected readonly profile = profile;
  protected readonly education = education;
  protected readonly technologyGroups = technologyGroups;
  protected readonly projects = projects;
  protected readonly experiences = experiences;
  protected readonly certifications = certifications;
  protected readonly socialLinks = socialLinks;
  protected readonly emailUrl = `mailto:${profile.email}`;
}
