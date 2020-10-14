import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardDetailResolver } from './card-detail-resolver.service';
import { CardDetailRoutingModule } from './card-detail-routing.module';
import { CardDetailComponent } from './card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CardDetailRoutingModule,
  ],
  declarations:  [
    CardDetailComponent,
  ],
  exports: [
    CardDetailComponent,
  ],
  providers:[
    CardDetailResolver
  ]
})
export class CardDetailModule { }
