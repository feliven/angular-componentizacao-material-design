import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  estiloCard = input<'primary' | 'secondary'>('primary');
}
