import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactItems = [
    {
      icon: 'phone',
      label: 'Telefone',
      value: '+55 (88) 98809-3961',
      href: 'tel:+5588988093961',
    },
    {
      icon: 'email',
      label: 'E-mail',
      value: 'gabrielymoraisn.1@gmail.com',
      href: 'mailto:gabrielymoraisn.1@gmail.com',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: '/in/gabriely-morais',
      href: 'https://www.linkedin.com/in/gabriely-morais',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github.com/gabrielymorais',
      href: 'https://github.com/gabrielymorais',
    },
  ];
}
