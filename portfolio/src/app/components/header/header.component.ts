import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'Início',      href: 'hero' },
    { label: 'Sobre',       href: 'about' },
    { label: 'Habilidades', href: 'skills' },
    { label: 'Projetos',    href: 'projects' },
    { label: 'Formação',    href: 'timeline' },
    { label: 'Contato',     href: 'contact' },
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  scrollTo(id: string): void {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
