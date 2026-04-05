import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; icon?: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      icon: '🖥️',
      skills: [
        { name: 'HTML5',             icon: 'devicon-html5-plain colored' },
        { name: 'CSS3',              icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript',        icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript',        icon: 'devicon-typescript-plain colored' },
        { name: 'Angular',           icon: 'devicon-angularjs-plain colored' },
        { name: 'Ionic',             icon: 'devicon-ionic-original colored' },
        { name: 'Design Responsivo', icon: '' },
        { name: 'Figma',             icon: 'devicon-figma-plain colored' },
        { name: 'Web Design',        icon: '' },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python',  icon: 'devicon-python-plain colored' },
        { name: 'Django',  icon: 'devicon-django-plain colored' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      ]
    },
    {
      category: 'Testes',
      icon: '🧪',
      skills: [
        { name: 'Jasmine',    icon: 'devicon-jasmine-plain colored' },
        { name: 'Karma',      icon: '' },
        { name: 'Jest',       icon: 'devicon-jest-plain colored' },
        { name: 'Playwright', icon: '' },
      ]
    },
    {
      category: 'Ferramentas',
      icon: '🛠️',
      skills: [
        { name: 'Git',         icon: 'devicon-git-plain colored' },
        { name: 'GitHub',      icon: 'devicon-github-original' },
        { name: 'Docker',      icon: 'devicon-docker-plain colored' },
        { name: 'Angular CLI', icon: 'devicon-angularjs-plain colored' },
        { name: 'Postman',     icon: 'devicon-postman-plain colored' },
        { name: 'PostgreSQL',  icon: 'devicon-postgresql-plain colored' },
        { name: 'VS Code',     icon: 'devicon-vscode-plain colored' },
        { name: 'SourceTree',  icon: '' },
      ]
    },
    {
      category: 'Sistemas',
      icon: '💻',
      skills: [
        { name: 'Linux Ubuntu', icon: 'devicon-ubuntu-plain colored' },
        { name: 'Linux Debian', icon: 'devicon-debian-plain colored' },
        { name: 'Windows',      icon: 'devicon-windows8-original colored' },
      ]
    },
    {
      category: 'Soft Skills',
      icon: '🧠',
      skills: [
        { name: 'Pensamento Analítico' },
        { name: 'Trabalho em Equipe' },
        { name: 'Solução de Problemas' },
        { name: 'Aprendizado Rápido' },
      ]
    },
  ];
}
