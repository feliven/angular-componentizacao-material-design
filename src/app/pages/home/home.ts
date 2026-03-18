import { Component } from '@angular/core';

import { Banner } from '../../shared/banner/banner';
import { CardBusca } from '../../shared/card-busca/card-busca';
import { CardDepoimento } from '../../shared/card-depoimento/card-depoimento';
import { FormBusca } from '../../shared/form-busca/form-busca';

@Component({
  selector: 'app-home',
  imports: [Banner, CardBusca, CardDepoimento, FormBusca],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
