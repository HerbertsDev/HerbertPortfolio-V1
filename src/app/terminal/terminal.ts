import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from "@angular/core";

interface TerminalStep {
  command: string;
  output: readonly string[];
}

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.html",
  styleUrl: "./terminal.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Terminal implements OnDestroy {
  private readonly steps: readonly TerminalStep[] = [
    {
      command: "whoami",
      output: [
        "Herbert da Silva da Cruz",
        "Desenvolvedor de Software | Full Stack",
      ],
    },
    {
      command: "cat stack.txt",
      output: [
        "Python · Java · JavaScript · Dart",
        "Angular · FastAPI · Spring Boot · Flutter",
        "PostgreSQL · Docker",
      ],
    },
    {
      command: "ls projects/",
      output: [
        "stockflow-database/",
        "simulador-copa-2026/",
        "medicamentos-ios/",
      ],
    },
    {
      command: 'echo "Bem-vindo ao meu portfólio!"',
      output: ["Bem-vindo ao meu portfólio!"],
    },
  ];

  protected readonly completedSteps = signal<readonly TerminalStep[]>([]);
  protected readonly activeCommand = signal("");
  protected readonly finished = signal(false);
  protected readonly transcript = this.steps
    .map(
      (step) =>
        `herbert@macbook ~ % ${step.command}\n${step.output.join("\n")}`,
    )
    .join("\n\n");

  private readonly timers = new Set<ReturnType<typeof setTimeout>>();
  private destroyed = false;

  constructor() {
    afterNextRender(() => this.start());
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers.clear();
  }

  private start(): void {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.completedSteps.set(this.steps);
      this.finished.set(true);
      return;
    }

    this.schedule(() => this.typeStep(0, 0), 500);
  }

  private typeStep(stepIndex: number, characterIndex: number): void {
    if (this.destroyed) return;

    const step = this.steps[stepIndex];
    if (!step) {
      this.finished.set(true);
      return;
    }

    if (characterIndex < step.command.length) {
      this.activeCommand.set(step.command.slice(0, characterIndex + 1));
      this.schedule(
        () => this.typeStep(stepIndex, characterIndex + 1),
        this.characterDelay(step.command[characterIndex]),
      );
      return;
    }

    this.schedule(() => {
      this.completedSteps.update((steps) => [...steps, step]);
      this.activeCommand.set("");
      this.schedule(() => this.typeStep(stepIndex + 1, 0), 520);
    }, 320);
  }

  private schedule(callback: () => void, delay: number): void {
    const timer = setTimeout(() => {
      this.timers.delete(timer);
      callback();
    }, delay);
    this.timers.add(timer);
  }

  private characterDelay(character: string): number {
    return character === " " ? 42 : 27 + Math.floor(Math.random() * 22);
  }
}
