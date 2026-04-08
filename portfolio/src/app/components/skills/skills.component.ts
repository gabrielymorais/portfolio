import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface SkillGroup {
  category: string;
  svg: string;
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
  constructor(private sanitizer: DomSanitizer) {}

  safe(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
      skills: [
        { name: 'HTML5',             icon: 'devicon-html5-plain colored' },
        { name: 'CSS3',              icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript',        icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript',        icon: 'devicon-typescript-plain colored' },
        { name: 'Angular',           icon: 'devicon-angular-plain colored' },
        { name: 'Ionic',             icon: 'devicon-ionic-original colored' },
        { name: 'Design Responsivo', icon: '' },
        { name: 'Figma',             icon: 'devicon-figma-plain colored' },
        { name: 'Web Design',        icon: '' },
      ]
    },
    {
      category: 'Backend',
      svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
      skills: [
        { name: 'Python',  icon: 'devicon-python-plain colored' },
        { name: 'Django',  icon: 'devicon-django-plain colored' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      ]
    },
    {
      category: 'Testes',
      svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v9l-5 9h16l-5-9V3"/><line x1="9" y1="3" x2="15" y2="3"/></svg>',
      skills: [
        { name: 'Jasmine',    icon: 'devicon-jasmine-plain colored' },
        { name: 'Karma',      icon: '' },
        { name: 'Jest',       icon: 'devicon-jest-plain colored' },
        { name: 'Playwright', icon: 'devicon-playwright-plain colored' },
      ]
    },
    {
      category: 'Ferramentas',
      svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      skills: [
        { name: 'Git',         icon: 'devicon-git-plain colored' },
        { name: 'GitHub',      icon: 'devicon-github-original' },
        { name: 'Docker',      icon: 'devicon-docker-plain colored' },
        { name: 'Angular CLI', icon: 'devicon-angular-plain colored' },
        { name: 'Postman',     icon: 'devicon-postman-plain colored' },
        { name: 'PostgreSQL',  icon: 'devicon-postgresql-plain colored' },
        { name: 'VS Code',     icon: 'devicon-vscode-plain colored' },
        { name: 'SourceTree',  icon: '' },
      ]
    },
    {
      category: 'Sistemas',
      svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
      skills: [
        { name: 'Linux Ubuntu', icon: 'devicon-ubuntu-plain colored' },
        { name: 'Linux Debian', icon: 'devicon-debian-plain colored' },
        { name: 'Windows',      icon: 'devicon-windows8-original colored' },
      ]
    },
    {
      category: 'Soft Skills',
      svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      skills: [
        { name: 'Pensamento Analítico' },
        { name: 'Trabalho em Equipe' },
        { name: 'Solução de Problemas' },
        { name: 'Aprendizado Rápido' },
      ]
    },
  ];
}
