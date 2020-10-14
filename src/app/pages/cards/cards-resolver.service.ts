import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Cards, PokemonService } from '../../core';

@Injectable()
export class CardsResolver implements Resolve<Cards> {
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.pokemonService.getCards();
    // return this.pokemonService.cards$.pipe(take(2));
  }
}
