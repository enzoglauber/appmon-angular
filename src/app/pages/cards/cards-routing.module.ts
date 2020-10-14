import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsResolver } from './cards-resolver.service';

import { CardsComponent } from './cards.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: CardsComponent,
    resolve: {
      cards: CardsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
