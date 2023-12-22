import { Component, signal } from '@angular/core';
import { IExperiencies } from '../../interface/iExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiencies[]>([
    {
      summary: {
        strong: "Cargo",
        p: "Tempo de trabalho A | mes ano - mes ano"
      },
      text: "tagsHTML xxxxx"
    }
  ])
}
