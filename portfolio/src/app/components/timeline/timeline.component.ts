import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'experience';
  tags?: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  education: TimelineItem[] = [
    {
      period: '2019 — 2022',
      title: 'Técnico em Redes de Computadores',
      institution: 'Escola Técnica',
      description:
        'Formação técnica com foco em infraestrutura de redes, cabeamento estruturado, protocolos de comunicação e fundamentos de TI.',
      type: 'education',
      tags: ['Redes', 'TI', 'Infraestrutura'],
    },
    {
      period: 'Set 2023 — Mar 2026',
      title: 'Tecnóloga em Análise e Desenvolvimento de Sistemas',
      institution: 'Instituto Federal do Ceará — IFCE',
      description:
        'Curso superior tecnológico com foco em desenvolvimento de software, engenharia de sistemas, algoritmos, banco de dados e desenvolvimento web.',
      type: 'education',
      tags: ['ADS', 'IFCE', 'Desenvolvimento', 'Sistemas'],
    },
  ];

  experiences: TimelineItem[] = [
    {
      period: '2023',
      title: 'Minicurso de Desenvolvimento Web',
      institution: 'Introdução a HTML5 e CSS3',
      description:
        'Participação em minicurso de introdução ao desenvolvimento web, com foco nos fundamentos de HTML5 e CSS3 para construção de páginas modernas.',
      type: 'experience',
      tags: ['HTML5', 'CSS3', 'Web'],
    },
    {
      period: '2024',
      title: 'Voluntária — Desenvolvimento Frontend',
      institution: 'Estação Meteorológica',
      description:
        'Atuação voluntária no desenvolvimento frontend de sistema de monitoramento meteorológico, contribuindo com interface e organização visual.',
      type: 'experience',
      tags: ['Frontend', 'Voluntária', 'JavaScript'],
    },
    {
      period: '2024 — 2025',
      title: 'Bolsista Programadora Frontend Angular',
      institution: 'Sistema Hospitalar de Alerta de Alergias',
      description:
        'Atuação como bolsista no desenvolvimento de sistema hospitalar, responsável pelo frontend em Angular com foco em usabilidade e interface institucional.',
      type: 'experience',
      tags: ['Angular', 'Bolsista', 'Frontend', 'IFCE'],
    },
  ];

  languages = [
    { name: 'Português', level: 'Nativo',       percent: 100 },
    { name: 'Inglês',    level: 'Intermediário', percent: 60 },
    { name: 'Espanhol',  level: 'Médio',         percent: 45 },
  ];
}
