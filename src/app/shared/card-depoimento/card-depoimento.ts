import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Card } from '../card/card';

@Component({
  selector: 'app-card-depoimento',
  imports: [MatCardModule, MatButtonModule, Card],
  templateUrl: './card-depoimento.html',
  styleUrl: './card-depoimento.scss',
})
export class CardDepoimento {
  enderecoFoto = input<string>('');
  textoDepoimento = input<string>('');
}
