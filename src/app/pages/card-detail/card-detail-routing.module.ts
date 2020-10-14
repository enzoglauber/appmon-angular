import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailResolver } from './card-detail-resolver.service';

import { CardDetailComponent } from './card-detail.component';

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: CardDetailComponent,
    resolve: {
      card: CardDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardDetailRoutingModule { }
