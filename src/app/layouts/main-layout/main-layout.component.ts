import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, Sun, Moon } from 'lucide-angular';
import navConfig from '../../config/navigation.json';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen flex flex-col"
         [class.dark-bg]="darkMode.isDark()"
         [class.light-bg]="!darkMode.isDark()">

      <!-- HEADER -->
      <header class="sticky top-0 z-50 backdrop-blur-lg border-b"
              [class.dark-header]="darkMode.isDark()"
              [class.light-header]="!darkMode.isDark()">
        <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-11 h-11 rounded-xl bg-gold flex items-center justify-center text-white font-bold text-lg group-hover:bg-gold2 transition-colors shadow-sm">K</div>
            <div class="hidden sm:block">
              <div class="font-bold font-serif text-base group-hover:text-gold transition-colors leading-tight" [class.dark-text]="darkMode.isDark()" [class.light-text]="!darkMode.isDark()">Maluleke Kurhula</div>
              <div class="text-xs" [class.dark-muted]="darkMode.isDark()" [class.light-muted]="!darkMode.isDark()">Software Engineer | AI Systems Architect</div>
            </div>
          </a>

          <nav class="hidden lg:flex items-center gap-7">
            @for (item of navConfig.mainNav; track item.href) {
              <a [routerLink]="item.href" routerLinkActive="text-gold"
                 class="text-sm font-medium hover:text-gold transition-colors relative group"
                 [class.dark-text]="darkMode.isDark()"
                 [class.light-text]="!darkMode.isDark()">
                {{ item.label }}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            }
          </nav>

          <div class="flex items-center gap-3">
            <button (click)="darkMode.toggle()"
                    class="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/10 transition-colors"
                    [attr.aria-label]="darkMode.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
              @if (darkMode.isDark()) {
                <lucide-icon [img]="Sun" class="w-5 h-5 text-amber-500"></lucide-icon>
              } @else {
                <lucide-icon [img]="Moon" class="w-5 h-5 text-gray-800"></lucide-icon>
              }
            </button>
            <a routerLink="/contact"
               class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-gold text-white text-sm font-bold rounded-lg hover:bg-gold2 transition-colors min-h-[44px] shadow-sm">
              Let's Talk
            </a>
            <button (click)="toggleMobileNav()"
                    class="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10 transition-colors">
              @if (mobileNavOpen) {
                <lucide-icon [img]="X" class="w-5 h-5" [class.text-white]="darkMode.isDark()" [class.text-gray-800]="!darkMode.isDark()"></lucide-icon>
              } @else {
                <lucide-icon [img]="Menu" class="w-5 h-5" [class.text-white]="darkMode.isDark()" [class.text-gray-800]="!darkMode.isDark()"></lucide-icon>
              }
            </button>
          </div>
        </div>
      </header>

      <!-- MOBILE NAV -->
      @if (mobileNavOpen) {
        <div class="lg:hidden border-b" [class.dark-border]="darkMode.isDark()" [class.light-border]="!darkMode.isDark()">
          <div class="max-w-6xl mx-auto px-4 py-4 space-y-1">
            @for (item of navConfig.mainNav; track item.href) {
              <a [routerLink]="item.href" routerLinkActive="text-gold"
                 class="block py-3 px-4 text-sm font-medium rounded-lg transition-colors"
                 [class.dark-mobile-link]="darkMode.isDark()"
                 [class.light-mobile-link]="!darkMode.isDark()"
                 (click)="mobileNavOpen = false">
                {{ item.label }}
              </a>
            }
            <a routerLink="/contact"
               class="block py-3 px-4 text-sm font-bold text-white bg-amber-600 rounded-lg text-center mt-3">
              Let's Talk
            </a>
          </div>
        </div>
      }

      <!-- MAIN -->
      <main class="flex-1">
        <router-outlet />
      </main>

      <!-- FOOTER -->
      <footer class="py-16" [class.dark-footer]="darkMode.isDark()">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-10 mb-12">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-11 h-11 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg">K</div>
                <div>
                  <div class="font-bold font-serif text-base">Maluleke Kurhula Success</div>
                  <div class="text-xs" [class.dark-muted]="darkMode.isDark()">African Roots | Global Impact</div>
                </div>
              </div>
              <p class="text-sm leading-relaxed max-w-sm" [class.dark-muted]="darkMode.isDark()">
                Software Engineer and AI Systems Architect building practical digital systems that solve real-world challenges.
              </p>
              <div class="flex items-center gap-3 mt-4">
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener noreferrer" class="text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">GitHub</a>
                <span class="text-white/20">·</span>
                <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener noreferrer" class="text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">LinkedIn</a>
                <span class="text-white/20">·</span>
                <a href="mailto:kurhula04s@gmail.com" class="text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">Email</a>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-sm mb-4 uppercase tracking-wider" [class.dark-muted]="darkMode.isDark()">Navigation</h4>
              <div class="space-y-2">
                @for (item of navConfig.mainNav; track item.href) {
                  <a [routerLink]="item.href" class="block text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">{{ item.label }}</a>
                }
              </div>
            </div>
            <div>
              <h4 class="font-bold text-sm mb-4 uppercase tracking-wider" [class.dark-muted]="darkMode.isDark()">Connect</h4>
              <div class="space-y-2">
                <a href="mailto:kurhula04s@gmail.com" class="block text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">Email</a>
                <a href="https://wa.me/27640708649" target="_blank" rel="noopener noreferrer" class="block text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">WhatsApp</a>
                <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener noreferrer" class="block text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">LinkedIn</a>
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener noreferrer" class="block text-sm transition-colors hover:text-amber-500" [class.dark-muted]="darkMode.isDark()">GitHub</a>
              </div>
            </div>
          </div>
          <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p class="text-xs" [class.dark-muted]="darkMode.isDark()">© {{ currentYear }} Maluleke Kurhula Success. All rights reserved.</p>
            <p class="text-xs" [class.dark-muted]="darkMode.isDark()">Built with Angular · Tailwind CSS · Custom CSS</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class MainLayoutComponent {
  readonly navConfig = navConfig;
  readonly Menu = Menu;
  readonly X = X;
  readonly Sun = Sun;
  readonly Moon = Moon;
  mobileNavOpen = false;
  readonly currentYear = new Date().getFullYear();
  darkMode = inject(DarkModeService);

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
