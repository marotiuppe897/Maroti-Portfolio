import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports:[ BrowserModule, FormsModule, ReactiveFormsModule,AppComponent],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
