import { Component, DOCUMENT, effect, inject, signal } from '@angular/core';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly document = inject(DOCUMENT);

  ativarModoClaro = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.document.body.style.colorScheme = this.ativarModoClaro() ? 'light' : 'dark';
    });
  }
}
