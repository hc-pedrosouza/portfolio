import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de Typescript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de NodeJS',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de Angular',
    },
    {
      src: 'assets/icons/knowledge/nestjs.svg',
      alt: 'Ícone de NestJS',
    },
    {
      src: 'assets/icons/knowledge/cypress.svg',
      alt: 'Ícone de Cypress',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone de Docker',
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de AWS',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de Python',
    },
    {
      src: 'assets/icons/knowledge/selenium.svg',
      alt: 'Ícone de Selenium',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de HTML5',
    },
  ]);
}
