import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/iProjects.inteface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Full Stack',
      title: 'Vida Full Stack',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    }
  ])
}
