import { Component } from '@angular/core';

import { Banner } from '../../shared/banner/banner';
import { Card } from '../../shared/card/card';
import { CardBusca } from '../../shared/card-busca/card-busca';

@Component({
  selector: 'app-home',
  imports: [Banner, Card, CardBusca],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
