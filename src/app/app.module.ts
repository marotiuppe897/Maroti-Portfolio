import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgFor } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,AppComponent, HeaderComponent, NgFor,AppRoutingModule],

  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
