import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { CardsResolver } from './cards-resolver.service';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule,
  ],
  declarations:  [
    CardsComponent,
    CardComponent,
    SearchComponent,
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
