import { Component, DOCUMENT, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-componentizacao-material-design');

  private readonly document = inject(DOCUMENT);

  ativarModoClaro = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.document.body.style.colorScheme = this.ativarModoClaro() ? 'light' : 'dark';
    });
  }
}
