import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/iProjects.inteface';
import { MatDialog, MatDialogModule} from '@angular/material/dialog'
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private dialog = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/portfolio.png',
      alt: 'Projeto portfolio',
      title: 'Portfolio',
      width: '100px',
      height: '51px',
      description: 'Portifólio é um aplicativo Frontend que exibe algumas das principais informações sobre minha carreira profissional com tecnólogia. <br><br> <b>Desenvolvido em NodeJS, Angular e Typescript.</b>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/hc-pedrosouza/portifolio'
        }
      ]
    },
    {
      src: 'assets/img/projects/poke.png',
      alt: 'Projeto Pokedex',
      title: 'Pokedex',
      width: '100px',
      height: '51px',
      description: 'PokedexApp é um aplicativo Frontend que lista informações dos principais Pokemons. <br><br><b>Desenvolvido em NodeJS e Angular</b>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/hc-pedrosouza/pokedex-app'
        }
      ]
    },
    {
      src: 'assets/img/projects/csv.jpg',
      alt: 'Projeto Move Be Name In CSV',
      title: 'Move Be Name In CSV',
      width: '100px',
      height: '51px',
      description: 'Mova uma lista de arquivos forma simples e rápida.<br><br><b>Desenvolvido em Python 3.x</b>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/hc-pedrosouza/move-be-name-in-csv'
        }
      ]
    },
    {
      src: 'assets/img/projects/resize.jpg',
      alt: 'Projeto Resize',
      title: 'Resize',
      width: '100px',
      height: '51px',
      description: 'Modifique e otimize o tamanho da suas imagens rapidamente.<br><br><b>Desenvolvido em Python 3.x</b>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/hc-pedrosouza/resize-png'
        }
      ]
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Another TODO APP',
      title: 'Another TODO APP',
      width: '100px',
      height: '51px',
      description: 'Another TODO APP é um aplicativo Frontend que permite voce criar listas de tarefas. <br><br><b>Desenvolvido em NodeJS e Angular</b>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/hc-pedrosouza/another-todo-app'
        }
      ]
    }
  ])

  public openDialog(data: IProjects) {
    this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
