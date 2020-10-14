import { Component, Input, OnInit } from '@angular/core';
import { Attack } from 'src/app/core';

@Component({
  selector: 'app-card-detail-attacks',
  templateUrl: './card-detail-attacks.component.html',
  styleUrls: ['./card-detail-attacks.component.scss']
})
export class CardDetailAttacksComponent implements OnInit {
  @Input() attacks: Array<Attack>;

  constructor() { }

  ngOnInit(): void {
    console.log('attacks: ', this.attacks)
  }
}
