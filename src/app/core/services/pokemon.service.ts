import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, switchMap } from 'rxjs/operators';
import { Card, Cards } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class PokemonService {
  private cards: BehaviorSubject<Array<Cards>> = new BehaviorSubject( [] );
  public cards$: Observable<Array<Cards>> = this.cards.asObservable();

  constructor(
    private apiService: ApiService
  ){}
  
  sortByName(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  getCards(name?: string): Observable<Array<Card>> {
    const search = (name) ? `&name=${name}` : ''
    let cards$ = this.apiService.get(`/cards?supertype=Pokémon${search}`).pipe(
                    pluck('cards'),
                    map(items => items.sort(this.sortByName))
                  )
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

  search(terms: Subject<string>): Observable<any> {
    return terms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(name => this.searchBy(name))
    )
  }

  searchBy(name: string): Observable<Array<Card>> {
    return this.getCards(name)
  }
}
