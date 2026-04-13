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
      
      <!-- HEADER -->
      <header class="sticky top-0 z-50 bg-paper/95 backdrop-blur-lg border-b border-ink/10">
        <div class="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
          
          <!-- Brand -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-paper font-bold text-xl group-hover:bg-gold2 transition-colors">
              M
            </div>
            <div class="hidden sm:block">
              <div class="font-bold font-serif text-ink text-lg group-hover:text-gold transition-colors">Maluleke Kurhula</div>
              <div class="text-xs text-muted">Software Engineer & AI Architect</div>
            </div>
          </a>
          
          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            @for (item of navConfig.mainNav; track item.href) {
              <a [routerLink]="item.href" routerLinkActive="text-gold" 
                 class="text-base font-medium text-ink hover:text-gold transition-colors relative group">
                {{ item.label }}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            }
          </nav>
          
          <!-- CTA + Mobile Toggle -->
          <div class="flex items-center gap-4">
            <a routerLink="/contact" 
               class="hidden sm:inline-flex items-center justify-center px-5 py-2 bg-gold text-paper text-sm font-bold rounded-lg hover:bg-gold2 transition-colors min-h-[44px]">
              Let's Talk
            </a>
            
            <!-- Mobile hamburger -->
            <button (click)="toggleMobileNav()"
                    class="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-ink/5 transition-colors">
              <svg *ngIf="!mobileNavOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="mobileNavOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Nav -->
        @if (mobileNavOpen) {
          <div class="lg:hidden border-t border-ink/10 bg-paper">
            <div class="container mx-auto px-4 py-4 space-y-2">
              @for (item of navConfig.mainNav; track item.href) {
                <a [routerLink]="item.href" routerLinkActive="text-gold"
                   class="block py-3 px-4 text-base font-medium text-ink hover:text-gold hover:bg-ink/5 rounded-lg transition-colors"
                   (click)="mobileNavOpen = false">
                  {{ item.label }}
                </a>
              }
              <a routerLink="/contact" 
                 class="block py-3 px-4 text-base font-bold text-paper bg-gold rounded-lg text-center mt-4">
                Let's Talk
              </a>
            </div>
          </div>
        }
      </header>
      
      <!-- MAIN CONTENT -->
      <main class="flex-1">
        <router-outlet />
      </main>
      
      <!-- FOOTER -->
      <footer class="bg-ink text-paper py-16">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-12 mb-12">
            
            <!-- Brand -->
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-paper font-bold text-xl">M</div>
                <div>
                  <div class="font-bold font-serif text-lg">Maluleke Kurhula Success</div>
                  <div class="text-xs text-muted">African Roots | Global Impact</div>
                </div>
              </div>
              <p class="text-muted max-w-md">
                Software Engineer and AI Systems Architect building practical digital systems that solve real-world challenges.
              </p>
            </div>
            
            <!-- Quick Links -->
            <div>
              <h4 class="font-bold mb-4">Navigation</h4>
              <div class="space-y-2">
                @for (item of navConfig.mainNav; track item.href) {
                  <a [routerLink]="item.href" class="block text-muted hover:text-gold transition-colors">{{ item.label }}</a>
                }
              </div>
            </div>
            
            <!-- Contact -->
            <div>
              <h4 class="font-bold mb-4">Connect</h4>
              <div class="space-y-2">
                <a [href]="'mailto:' + contact.email" class="block text-muted hover:text-gold transition-colors">Email</a>
                <a [href]="contact.whatsapp" target="_blank" class="block text-muted hover:text-gold transition-colors">WhatsApp</a>
                <a [href]="contact.linkedin" target="_blank" class="block text-muted hover:text-gold transition-colors">LinkedIn</a>
                <a [href]="contact.github" target="_blank" class="block text-muted hover:text-gold transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-muted text-sm">
              © {{ currentYear }} Maluleke Kurhula Success. All rights reserved.
            </p>
            <p class="text-muted text-sm">
              Built with Angular + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class MainLayoutComponent {
  readonly navConfig = navConfig;
  mobileNavOpen = false;
  readonly currentYear = new Date().getFullYear();
  
  contact = {
    email: 'kurhula04s@gmail.com',
    whatsapp: 'https://wa.me/27640708649',
    linkedin: 'https://za.linkedin.com/in/kurhula-success-maluleke-32153231a',
    github: 'https://github.com/MALULEKE-KS'
  };
  
  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
