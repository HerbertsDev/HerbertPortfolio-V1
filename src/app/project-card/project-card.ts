import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Project } from "../portfolio.data";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.html",
  styleUrl: "./project-card.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly number = input.required<string>();
}
