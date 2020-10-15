import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonService } from 'src/app/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string = '';
  search$ = new Subject<string>();

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemonService.search(this.search$).subscribe();
  }

  ngOnInit(): void {
  }
  
  onClickSearch (): void {
    if (this.search) {
      // console.log(this.search, 'this.search')
      // this.search$.next(this.search)
    }
  }
}
