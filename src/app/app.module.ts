import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppComponent, HeaderComponent],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
