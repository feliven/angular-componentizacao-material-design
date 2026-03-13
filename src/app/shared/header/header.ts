import { Component, signal, DOCUMENT, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatIconModule, MatButtonModule, MatRippleModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  modoClaro = signal<boolean>(false);
  private readonly document = inject(DOCUMENT);

  emitirModoClaroEscuro() {
    this.modoClaro.set(!this.modoClaro());
  }

  constructor() {
    effect(() => {
      this.document.body.style.colorScheme = this.modoClaro() ? 'light' : 'dark';
    });
  }
}
