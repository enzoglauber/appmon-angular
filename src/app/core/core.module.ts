import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from './directives';
import { FooterComponent, HeaderComponent } from './layout';

import { ApiService, PokemonService } from './services';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ApiService,
    PokemonService
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,

    LazyImgDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
    FooterComponent,
    HeaderComponent,
    LazyImgDirective,
  ]
})

export class CoreModule { }
