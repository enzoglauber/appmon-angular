import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Card, PokemonService } from '../../core';

@Injectable()
export class CardDetailResolver implements Resolve<Card> {
  constructor(
    private pokemonService: PokemonService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    const id: string = route.params['id']
    return this.pokemonService.getCard(id);
  }
}
