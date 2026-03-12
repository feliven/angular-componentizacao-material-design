import { Component, DOCUMENT, effect, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('angular-componentizacao-material-design');

  private readonly document = inject(DOCUMENT);
  ativarModoClaro = signal<boolean>(false);

  matIconReg = inject(MatIconRegistry);

  constructor() {
    effect(() => {
      this.document.body.style.colorScheme = this.ativarModoClaro() ? 'light' : 'dark';
    });
  }

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
