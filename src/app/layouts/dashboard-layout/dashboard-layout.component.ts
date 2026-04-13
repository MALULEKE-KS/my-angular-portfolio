import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col bg-paper text-ink">
      <header class="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/10">
        <div class="container mx-auto px-4 h-16 flex items-center justify-between">
          <a routerLink="/dashboard" class="text-xl font-bold font-serif text-ink hover:text-gold transition-colors">
            KSDrill<span class="text-muted font-sans text-sm ml-2">Dashboard</span>
          </a>
          <nav class="flex items-center gap-4" aria-label="Dashboard navigation">
            <a routerLink="/dashboard/projects" routerLinkActive="text-gold"
               class="text-base font-medium text-ink hover:text-gold transition-colors py-2">Projects</a>
            <a routerLink="/dashboard/messages" routerLinkActive="text-gold"
               class="text-base font-medium text-ink hover:text-gold transition-colors py-2">Messages</a>
            <a routerLink="/dashboard/profile" routerLinkActive="text-gold"
               class="text-base font-medium text-ink hover:text-gold transition-colors py-2">Profile</a>
            <button (click)="logout()"
                    class="text-base font-medium text-ink hover:text-red transition-colors py-2 pl-4 border-l border-ink/10">
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main class="flex-1"><router-outlet /></main>
    </div>
  `,
})
export class DashboardLayoutComponent {
  private auth = inject(AuthService);
  logout(): void { this.auth.logout(); }
}
