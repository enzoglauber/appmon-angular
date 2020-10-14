import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards, PokemonService } from 'src/app/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards$: Observable<Array<Cards>>;

  constructor(
    private pokemonService: PokemonService
  ){
    this.pokemonService.getCards()
  }

  ngOnInit() {
    this.cards$ = this.pokemonService.cards$
  }
}
