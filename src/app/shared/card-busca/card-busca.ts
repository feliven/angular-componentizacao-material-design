import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Card } from '../card/card';

@Component({
  selector: 'app-card-busca',
  imports: [MatCardModule, MatButtonModule, Card],
  templateUrl: './card-busca.html',
  styleUrl: './card-busca.scss',
})
export class CardBusca {
  enderecoFoto = input<string>('');
  nomeLocal = input<string>('');
}
