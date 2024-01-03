import { Component, signal } from '@angular/core';
import { IExperiencies } from '../../interface/iExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiencies[]>([
    {
      summary: {
        strong: 'Desenvolvedor de Software',
        p: '12/2023 - Atualmente',
      },
      text: '<p> - Estive a frente de mudanças estruturais e processuais para implementações do DevOps (Pipeline, versionamento, dockerização e documentação)</p><p> - Desenvolvimento ERP web com Typescript, NodeJS, Angular e NestJS</p><p> - Gerenciamento de ambiente AWS (EC2, Lambdas, SQS, S3, IAM, etc)</p><p> - Manutenção em sistemas legado On Promise</p><p> - Desenvolvimento de scripts de instalação e logs em Shell Script</p>',
    },
    {
      summary: {
        strong: 'Analista de Testes',
        p: '10/2022 - 12/2023',
      },
      text: '<p> - Elaboração de testes automatizados em sistemas web</p><p> - Criação de ambiente CI/CD de testes automatizados com Gitlab</p><p> - Levantamento, criação e execução de cenários de teste</p><p> - Criação e execução de scripts SQL para identificar e corrigir problemas</p><p> - Auxilio no desenvolvimento de conhecimento dos analistas de qualidade</p><p> - Elaboração de documentação técnica</p><p> - Uso das metodologias ágeis (Scrum e Kanban) com ferramenta Jira/Kanbanize;</p>',
    },
    {
      summary: {
        strong: 'Scrum master',
        p: '11/2021 - 10/2022',
      },
      text: '<p> - Elaboração de testes automatizados em sistemas web</p><p> - Criação de ambiente CI/CD de testes automatizados com Gitlab</p><p> - Levantamento, criação e execução de cenários de teste</p><p> - Criação e execução de scripts SQL para identificar e corrigir problemas</p><p> - Auxilio no desenvolvimento de conhecimento dos analistas de qualidade</p><p> - Elaboração de documentação técnica</p><p> - Uso das metodologias ágeis (Scrum e Kanban) com ferramenta Jira/Kanbanize;</p>',
    },
  ]);
}
