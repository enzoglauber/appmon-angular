import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card, Cards } from '../models';
import { ApiService } from './api.service';


@Injectable()
export class PokemonService {
  private cards: BehaviorSubject<Array<Cards>> = new BehaviorSubject( [] );
  public cards$: Observable<Array<Cards>> = this.cards.asObservable();
  constructor(
    private apiService: ApiService
  ){}

  getCards(): Observable<Array<Card>> {
    let cards$ = this.apiService.get('/cards?supertype=Pokémon').pipe(pluck('cards'))
    cards$.subscribe((cards: Array<Cards>) => this.setCards(cards))
    return cards$
  }

  getCard(id: string): Observable<Array<Card>> {
    return this.apiService.get(`/cards/${id}`).pipe(pluck('card'))
  }

  setCards(values: Array<Cards>): void {
    this.nextCards(values);
  }

  private nextCards(values: Array<Cards>): void {
    this.cards.next(values)  
  }
}
