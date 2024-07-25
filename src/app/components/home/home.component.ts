import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  about: any = aboutDetails;
}
const aboutDetails: any = {
  "name": "Maroti Uppe",
  "role": "Java Software Developer",
  "address": "Hyderabad, INDIA",
  "email": "marotiuppe891@gmail.com",
  "contact": "(+91) 9867205329"
}
