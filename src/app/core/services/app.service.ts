import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Cards } from '../models';
import { ApiService } from './api.service';


@Injectable()
export class PokemonService {
  private cards: BehaviorSubject<Array<Cards>> = new BehaviorSubject( [] );
  public cards$: Observable<Array<Cards>> = this.cards.asObservable();
  constructor(
    private apiService: ApiService
  ){}
  
  getCards(): void {
    this.apiService.get('/cards?supertype=Pokémon')
      .pipe(pluck('cards'))
      .subscribe((cards: Array<Cards>) => this.setCards(cards) )
  }

  setCards(values: Array<Cards>): void {
    this.nextCards(values);
  }

  private nextCards(values: Array<Cards>): void {
    this.cards.next(values)  
  }
}
