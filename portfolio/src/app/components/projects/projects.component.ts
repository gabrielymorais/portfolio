import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured: boolean;
  githubUrl?: string;
  accentColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'SIGEA',
      subtitle: 'Sistema de Gerenciamento de Arquivos',
      description:
        'Sistema web desenvolvido para centralizar, organizar e acompanhar documentos institucionais. O projeto envolve gerenciamento de arquivos, organização administrativa, interface moderna e integração entre frontend e backend via API REST.',
      stack: ['Angular', 'Django', 'PostgreSQL', 'API REST'],
      highlights: [
        'Integração frontend & backend',
        'Organização de documentos',
        'Filtros e consultas avançadas',
        'Arquitetura cliente-servidor',
        'Foco em usabilidade',
        'Interface administrativa',
      ],
      featured: true,
      accentColor: '#38BDF8',
    },
    {
      name: 'Sistema Hospitalar',
      subtitle: 'Alerta de Alergias',
      description:
        'Projeto com foco em desenvolvimento frontend utilizando Angular, voltado para visualização e apoio na gestão de alertas de alergias em ambiente hospitalar institucional.',
      stack: ['Angular', 'TypeScript', 'SCSS'],
      highlights: [
        'Experiência como bolsista frontend',
        'Interface institucional',
        'Contexto hospitalar',
        'Componentes reutilizáveis',
      ],
      featured: false,
      accentColor: '#8B5CF6',
    },
    {
      name: 'Estação Meteorológica',
      subtitle: 'Interface Web',
      description:
        'Projeto voluntário com atuação em desenvolvimento frontend, contribuindo para a interface e organização visual de sistema de monitoramento meteorológico acadêmico.',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Experiência voluntária',
        'Colaboração acadêmica',
        'Interface de dados',
        'Visualização de informações',
      ],
      featured: false,
      accentColor: '#38BDF8',
    },
  ];
}
