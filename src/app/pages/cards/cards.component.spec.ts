import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ApiService, PokemonService } from 'src/app/core';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PokemonService, ApiService, HttpClient, HttpHandler],
      declarations: [ CardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should list pokemon cards', inject([PokemonService], (pokemonService: PokemonService) => {
    // component.cards$
    component.cards$.subscribe((cards) => {
      expect(cards.length).toBeGreaterThan(1);
    })
  }));

});
