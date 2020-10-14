import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  card: Card;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { card: Card }) => {
      this.card = data.card
      console.log('card', this.card)
    });
  }
}
