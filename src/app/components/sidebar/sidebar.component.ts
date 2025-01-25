import { Component, Renderer2 } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface NavItem {
  icon: string;
  label: string;
  link: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule,
    FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isDarkMode = false;

  navItems: NavItem[] = [
    { icon: 'fas fa-th-large', label: 'Dashboard', link: '/dashboard', isActive: true },
    { icon: 'fas fa-credit-card', label: 'Payment', link: '/payment' },
    { icon: 'fas fa-users', label: 'Customers', link: '/customers' },
    { icon: 'fas fa-comments', label: 'Messages', link: '/messages' },
    { icon: 'fas fa-box', label: 'Product', link: '/product' },
    { icon: 'fas fa-file-invoice', label: 'Invoice', link: '/invoice' },
    { icon: 'fas fa-chart-line', label: 'Analytics', link: '/analytics' },
    { icon: 'fas fa-cog', label: 'Settings', link: '/settings' },
    { icon: 'fas fa-shield-alt', label: 'Security', link: '/security' },
    { icon: 'fas fa-question-circle', label: 'Help', link: '/help' },
  ];

  constructor(public sidebarService: SidebarService,private renderer: Renderer2) {}
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
