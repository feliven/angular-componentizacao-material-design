import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [NgClass, MatCardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  estiloCard = input<'primary' | 'secondary' | 'tertiary'>('primary');
}
