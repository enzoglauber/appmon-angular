import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { CardsModule, CardDetailModule } from './pages';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    // CoreModule
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardsModule,
    CardDetailModule,
    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule,
  ],
  exports: [
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
