import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card, Cards, PokemonService } from 'src/app/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards$: Observable<Array<Cards>>;

  constructor(
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit() {
    this.cards$ = this.pokemonService.cards$
  }
}
