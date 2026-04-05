import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = [
    { icon: '🎓', label: 'Formação',    value: 'ADS — IFCE' },
    { icon: '🌐', label: 'Foco',        value: 'Frontend & Web' },
    { icon: '📍', label: 'Localização', value: 'Ceará, Brasil' },
    { icon: '💬', label: 'Idiomas',     value: 'PT · EN · ES' },
  ];
}
