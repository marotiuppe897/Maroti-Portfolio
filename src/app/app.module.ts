import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,FontAwesomeModule, AppComponent, HeaderComponent],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
