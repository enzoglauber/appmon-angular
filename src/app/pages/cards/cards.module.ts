import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule,
  ],
  declarations:  [
    CardsComponent,
    CardComponent,
  ],
  exports: [
    CardsComponent,
    CardComponent,
  ]
})
export class CardsModule { }
