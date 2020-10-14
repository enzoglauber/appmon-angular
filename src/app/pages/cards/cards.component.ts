import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Array<Card>;

  constructor(
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this.route.data.subscribe((data: { cards: Array<Card> }) => {
      this.cards = data.cards
    });
  }
}
