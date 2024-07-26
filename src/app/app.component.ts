import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { GreetingComponent } from "./components/greeting/greeting.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { EducationComponent } from "./components/education/education.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, GreetingComponent, SkillsComponent, EducationComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maroti_portfolio';
}
