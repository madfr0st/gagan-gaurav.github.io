import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModule } from 'src/lib/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PortfolioModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
