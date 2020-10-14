import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';


// import { FilterCardsComponent } from './filter-Cards/filter-Cards.component';
@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule,
  ],
  declarations:  [
    // FilterCardsComponent,
    CardsComponent,
  ],
  exports: [
    // FilterCardsComponent,
    CardsComponent,
  ]
})
export class CardsModule { }
