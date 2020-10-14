import { Component, Input, OnInit } from '@angular/core';
import { RorW } from 'src/app/core';

@Component({
  selector: 'app-card-details-r-or-w',
  templateUrl: './card-details-r-or-w.component.html',
  styleUrls: ['./card-details-r-or-w.component.scss']
})
export class CardDetailsROrWComponent implements OnInit {
  
  @Input() rw: Array<RorW>;

  constructor() { }

  ngOnInit(): void {
    console.log('rw: ', this.rw)
  }

}
