import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { CardsResolver } from './cards-resolver.service';
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
  ],
  providers:[
    CardsResolver
  ]
})
export class CardsModule { }
