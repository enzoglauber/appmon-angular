import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsROrWComponent } from './card-details-r-or-w.component';

describe('CardDetailsROrWComponent', () => {
  let component: CardDetailsROrWComponent;
  let fixture: ComponentFixture<CardDetailsROrWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsROrWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsROrWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
