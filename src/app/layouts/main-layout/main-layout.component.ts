import { Component, HostListener, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, ChevronUp, Sun, Moon } from 'lucide-angular';
import navConfig from '../../config/navigation.json';
import { BackToTopComponent } from '../../shared/components/back-to-top/back-to-top.component';
import { DarkModeService } from '../../core/services/dark-mode.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LucideAngularModule, BackToTopComponent],
  template: `
    <!-- Scroll Progress Bar -->
    <div class="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div class="h-full bg-gold transition-all duration-100 ease-out"
           [style.width.%]="scrollProgress()"></div>
    </div>

    <div class="min-h-screen flex flex-col bg-paper text-ink">

      <!-- ── HEADER ── -->
      <header class="sticky top-0 z-50 bg-paper/95 backdrop-blur-lg border-b border-ink/10">
        <div class="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">

          <!-- Brand -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-11 h-11 rounded-xl bg-gold flex items-center justify-center
                        text-paper font-bold text-lg group-hover:bg-gold2 transition-colors shadow-sm">
              K
            </div>
            <div class="hidden sm:block">
              <div class="font-bold font-serif text-ink text-base group-hover:text-gold transition-colors leading-tight">
                Maluleke Kurhula
              </div>
              <div class="text-xs text-muted">Software Engineer & AI Architect</div>
            </div>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            @for (item of navConfig.mainNav; track item.href) {
              <a [routerLink]="item.href" routerLinkActive="text-gold"
                 class="text-sm font-medium text-ink hover:text-gold transition-colors relative group">
                {{ item.label }}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            }
          </nav>

          <!-- CTA + Mobile Toggle -->
          <div class="flex items-center gap-3">
            <button (click)="darkMode.toggle()"
                    class="w-11 h-11 rounded-lg hover:bg-ink/5 transition-colors flex items-center justify-center"
                    [attr.aria-label]="darkMode.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
              @if (darkMode.isDark()) {
                <lucide-icon [img]="Sun" class="w-5 h-5 text-gold"></lucide-icon>
              } @else {
                <lucide-icon [img]="Moon" class="w-5 h-5 text-ink"></lucide-icon>
              }
            </button>
            <a routerLink="/contact"
               class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-gold text-paper text-sm font-bold rounded-lg
                      hover:bg-gold2 transition-colors min-h-[44px] shadow-sm">
              Let's Talk
            </a>
            <button (click)="toggleMobileNav()"
                    class="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg
                           hover:bg-ink/5 transition-colors"
                    [attr.aria-label]="mobileNavOpen ? 'Close menu' : 'Open menu'">
              @if (mobileNavOpen) {
                <lucide-icon [img]="X" class="w-5 h-5"></lucide-icon>
              } @else {
                <lucide-icon [img]="Menu" class="w-5 h-5"></lucide-icon>
              }
            </button>
          </div>
        </div>

        <!-- Mobile Nav -->
        @if (mobileNavOpen) {
          <div class="lg:hidden border-t border-ink/10 bg-paper">
            <div class="max-w-6xl mx-auto px-4 py-4 space-y-1">
              @for (item of navConfig.mainNav; track item.href) {
                <a [routerLink]="item.href" routerLinkActive="text-gold"
                   class="block py-3 px-4 text-sm font-medium text-ink hover:text-gold
                          hover:bg-ink/5 rounded-lg transition-colors"
                   (click)="mobileNavOpen = false">
                  {{ item.label }}
                </a>
              }
              <a routerLink="/contact"
                 class="block py-3 px-4 text-sm font-bold text-paper bg-gold rounded-lg text-center mt-3">
                Let's Talk
              </a>
            </div>
          </div>
        }
      </header>

      <!-- ── MAIN CONTENT ── -->
      <main class="flex-1">
        <router-outlet />
      </main>

      <!-- ── FOOTER ── -->
      <footer class="bg-ink text-paper py-16">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-10 mb-12">

            <!-- Brand -->
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-11 h-11 rounded-xl bg-gold flex items-center justify-center text-paper font-bold text-lg">
                  K
                </div>
                <div>
                  <div class="font-bold font-serif text-base">Maluleke Kurhula Success</div>
                  <div class="text-xs text-paper/50">African Roots | Global Impact</div>
                </div>
              </div>
              <p class="text-paper/60 text-sm leading-relaxed max-w-sm">
                Software Engineer and AI Systems Architect building practical digital systems that solve real-world challenges.
              </p>
              <div class="flex items-center gap-3 mt-4">
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener noreferrer"
                   class="text-paper/50 hover:text-gold transition-colors text-sm">GitHub</a>
                <span class="text-paper/20">·</span>
                <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener noreferrer"
                   class="text-paper/50 hover:text-gold transition-colors text-sm">LinkedIn</a>
                <span class="text-paper/20">·</span>
                <a href="mailto:kurhula04s@gmail.com"
                   class="text-paper/50 hover:text-gold transition-colors text-sm">Email</a>
              </div>
            </div>

            <!-- Navigation -->
            <div>
              <h4 class="font-bold text-sm mb-4 text-paper/80 uppercase tracking-wider">Navigation</h4>
              <div class="space-y-2">
                @for (item of navConfig.mainNav; track item.href) {
                  <a [routerLink]="item.href" class="block text-paper/50 hover:text-gold transition-colors text-sm">
                    {{ item.label }}
                  </a>
                }
              </div>
            </div>

            <!-- Connect -->
            <div>
              <h4 class="font-bold text-sm mb-4 text-paper/80 uppercase tracking-wider">Connect</h4>
              <div class="space-y-2">
                <a href="mailto:kurhula04s@gmail.com" class="block text-paper/50 hover:text-gold transition-colors text-sm">Email</a>
                <a href="https://wa.me/27640708649" target="_blank" rel="noopener noreferrer"
                   class="block text-paper/50 hover:text-gold transition-colors text-sm">WhatsApp</a>
                <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank"
                   rel="noopener noreferrer" class="block text-paper/50 hover:text-gold transition-colors text-sm">LinkedIn</a>
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener noreferrer"
                   class="block text-paper/50 hover:text-gold transition-colors text-sm">GitHub</a>
              </div>
            </div>
          </div>

          <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p class="text-paper/40 text-xs">
              © {{ currentYear }} Maluleke Kurhula Success. All rights reserved.
            </p>
            <p class="text-paper/40 text-xs">
              Built with Angular · Tailwind CSS · Custom CSS
            </p>
          </div>
        </div>
      </footer>

      <!-- Back to Top + Dark Mode -->
      <app-back-to-top />
    </div>
  `,
})
export class MainLayoutComponent implements OnInit {
  readonly navConfig = navConfig;
  readonly Menu = Menu;
  readonly X = X;
  readonly Sun = Sun;
  readonly Moon = Moon;
  mobileNavOpen = false;
  darkMode = inject(DarkModeService);  // Angular inject() in field (standalone)
  private readonly _darkModeSvc = inject(DarkModeService);
  readonly currentYear = new Date().getFullYear();
  scrollProgress = signal(0);

  ngOnInit(): void {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollProgress();
  }

  private updateScrollProgress(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.scrollProgress.set(Math.min(100, progress));
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
