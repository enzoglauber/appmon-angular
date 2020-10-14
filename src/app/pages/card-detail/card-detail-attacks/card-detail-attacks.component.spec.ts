import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailAttacksComponent } from './card-detail-attacks.component';

describe('CardDetailAttacksComponent', () => {
  let component: CardDetailAttacksComponent;
  let fixture: ComponentFixture<CardDetailAttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailAttacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
