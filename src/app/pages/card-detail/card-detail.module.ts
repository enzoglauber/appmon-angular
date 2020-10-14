import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardDetailResolver } from './card-detail-resolver.service';
import { CardDetailRoutingModule } from './card-detail-routing.module';
import { CardDetailComponent } from './card-detail.component';
import { CardDetailAttacksComponent } from './card-detail-attacks/card-detail-attacks.component';
import { CardDetailsROrWComponent } from './card-details-r-or-w/card-details-r-or-w.component';

@NgModule({
  imports: [
    CommonModule,
    CardDetailRoutingModule,
  ],
  declarations:  [
    CardDetailComponent,
    CardDetailAttacksComponent,
    CardDetailsROrWComponent,
  ],
  exports: [
    CardDetailComponent,
  ],
  providers:[
    CardDetailResolver
  ]
})
export class CardDetailModule { }
