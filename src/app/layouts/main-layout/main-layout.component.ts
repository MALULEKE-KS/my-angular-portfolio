import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import navConfig from '../../config/navigation.json';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col bg-paper text-ink">
      <header class="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/10">
        <div class="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a routerLink="/" class="text-xl sm:text-2xl font-bold font-serif text-ink hover:text-gold transition-colors">
            KSDrill
          </a>
          <nav class="hidden lg:flex gap-6" aria-label="Main navigation">
            <a *ngFor="let item of navConfig.mainNav" [routerLink]="item.href"
               routerLinkActive="text-gold"
               class="text-base font-medium text-ink hover:text-gold transition-colors py-2">
              {{ item.label }}
            </a>
          </nav>
          <button class="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-ink/5 transition-colors"
                  (click)="mobileNavOpen = !mobileNavOpen" [attr.aria-expanded]="mobileNavOpen">
            <svg *ngIf="!mobileNavOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg *ngIf="mobileNavOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div *ngIf="mobileNavOpen" class="lg:hidden border-t border-ink/10 overflow-x-auto">
          <div class="flex gap-4 px-4 py-3 min-w-max">
            <a *ngFor="let item of navConfig.mainNav" [routerLink]="item.href"
               routerLinkActive="text-gold"
               class="text-base font-medium text-ink hover:text-gold transition-colors whitespace-nowrap py-2"
               (click)="mobileNavOpen = false">
              {{ item.label }}
            </a>
          </div>
        </div>
      </header>
      <main class="flex-1"><router-outlet /></main>
      <footer class="border-t border-ink/10 bg-paper py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="text-muted text-base">&copy; {{ currentYear }} KSDrill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
})
export class MainLayoutComponent {
  navConfig = navConfig;
  mobileNavOpen = false;
  currentYear = new Date().getFullYear();
}
