import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  socialMediaLinks = {
    github: "https://github.com/sarthakgoenka",
    linkedin: "https://www.linkedin.com/in/sarthak-agrawal-a41aa3153/",
    gmail: "sharthak31@gmail.com",
    instagram : "https://www.instagram.com/sarthak_goenka/?hl=en",
    facebook: "https://www.facebook.com/sharthak.agrawal"
  };
}
