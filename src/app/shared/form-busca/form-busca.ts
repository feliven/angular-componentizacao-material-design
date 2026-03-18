import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { Card } from '../card/card';

@Component({
  selector: 'app-form-busca',
  imports: [
    Card,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
  providers: [provideNativeDateAdapter()],
})
export class FormBusca {
  private readonly fb = inject(NonNullableFormBuilder);

  tipoPassagem = this.fb.group({ somenteIdaControl: 'idaVolta' });
}
