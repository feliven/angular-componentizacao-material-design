import { Component } from '@angular/core';

import { Footer } from '../../shared/footer/footer';
import { Banner } from '../../shared/banner/banner';

@Component({
  selector: 'app-home',
  imports: [Footer, Banner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
