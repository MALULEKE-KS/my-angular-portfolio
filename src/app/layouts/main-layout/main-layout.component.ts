import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, Menu } from 'lucide-angular';
import navConfig from '../../config/navigation.json';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen flex flex-col bg-paper text-ink">

      <!-- HEADER -->
      <header class="sticky top-0 z-50 bg-paper border-b border-ink/10">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <!-- Brand -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-lg bg-ink flex items-center justify-center text-paper font-bold text-base tracking-tight group-hover:bg-gold transition-colors">
              K
            </div>
            <div>
              <div class="text-sm font-semibold text-ink group-hover:text-gold transition-colors leading-tight">Maluleke Kurhula</div>
              <div class="text-xs text-muted leading-tight">North-West University · BSc CS & Maths</div>
            </div>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            @for (item of navConfig.mainNav; track item.href) {
              <a [routerLink]="item.href" routerLinkActive="text-gold"
                 
                 class="px-4 py-2 text-sm font-medium text-ink hover:text-gold transition-colors rounded-md hover:bg-ink/5">
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- CTA + Mobile Toggle -->
          <div class="flex items-center gap-3">
            <!-- Social icons desktop -->
            <div class="hidden md:flex items-center gap-1">
              <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener"
                 class="p-2 text-ink/60 hover:text-ink transition-colors rounded-md hover:bg-ink/5"
                 aria-label="GitHub">
                <lucide-icon [img]="Github" class="w-4 h-4"></lucide-icon>
              </a>
              <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener"
                 class="p-2 text-ink/60 hover:text-ink transition-colors rounded-md hover:bg-ink/5"
                 aria-label="LinkedIn">
                <lucide-icon [img]="Linkedin" class="w-4 h-4"></lucide-icon>
              </a>
              <a href="mailto:kurhula04s@gmail.com"
                 class="p-2 text-ink/60 hover:text-ink transition-colors rounded-md hover:bg-ink/5"
                 aria-label="Email">
                <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
              </a>
            </div>

            <a routerLink="/contact"
               class="hidden sm:inline-flex items-center justify-center px-5 py-2 bg-ink text-paper text-xs font-semibold rounded-lg hover:bg-gold transition-colors min-h-[36px] tracking-wide">
              Let's Work Together
            </a>

            <!-- Mobile hamburger -->
            <button (click)="toggleMobileNav()"
                    class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-ink/5 transition-colors"
                    [attr.aria-label]="mobileNavOpen ? 'Close menu' : 'Open menu'">
              <lucide-icon [img]="Menu" class="w-5 h-5 text-ink"></lucide-icon>
            </button>
          </div>
        </div>

        <!-- Mobile Nav -->
        @if (mobileNavOpen) {
          <div class="lg:hidden border-t border-ink/10 bg-paper">
            <div class="max-w-6xl mx-auto px-6 py-3 space-y-1">
              @for (item of navConfig.mainNav; track item.href) {
                <a [routerLink]="item.href" routerLinkActive="text-gold"
                   
                   class="block py-2.5 px-4 text-sm font-medium text-ink hover:text-gold hover:bg-ink/5 rounded-md transition-colors"
                   (click)="mobileNavOpen = false">
                  {{ item.label }}
                </a>
              }
              <div class="flex items-center gap-2 pt-3 border-t border-ink/10 mt-3">
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener"
                   class="flex-1 py-2.5 px-4 text-center text-xs font-semibold text-ink bg-ink/5 rounded-md">GitHub</a>
                <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener"
                   class="flex-1 py-2.5 px-4 text-center text-xs font-semibold text-ink bg-ink/5 rounded-md">LinkedIn</a>
                <a routerLink="/contact"
                   class="flex-1 py-2.5 px-4 text-center text-xs font-semibold text-paper bg-ink rounded-md">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        }
      </header>

      <!-- MAIN CONTENT -->
      <main class="flex-1">
        <router-outlet />
      </main>

      <!-- FOOTER -->
      <footer class="bg-ink text-paper/70 py-12">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

            <!-- Brand -->
            <div class="max-w-xs">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-lg bg-gold flex items-center justify-center text-paper font-bold text-sm">K</div>
                <div>
                  <div class="text-sm font-semibold text-paper">Maluleke Kurhula</div>
                  <div class="text-xs text-paper/50">North-West University · BSc CS & Maths</div>
                </div>
              </div>
              <p class="text-xs text-paper/50 leading-relaxed">
                Building practical digital systems that solve real-world challenges.
              </p>
            </div>

            <!-- Navigation -->
            <div>
              <h4 class="text-xs font-semibold text-paper/40 uppercase tracking-wider mb-3">Navigation</h4>
              <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                @for (item of navConfig.mainNav; track item.href) {
                  <a [routerLink]="item.href" class="text-xs text-paper/50 hover:text-paper transition-colors">
                    {{ item.label }}
                  </a>
                }
              </div>
            </div>

            <!-- Connect -->
            <div>
              <h4 class="text-xs font-semibold text-paper/40 uppercase tracking-wider mb-3">Connect</h4>
              <div class="space-y-2">
                <a href="mailto:kurhula04s@gmail.com" class="block text-xs text-paper/50 hover:text-paper transition-colors">Email</a>
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener" class="block text-xs text-paper/50 hover:text-paper transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener" class="block text-xs text-paper/50 hover:text-paper transition-colors">LinkedIn</a>
                <a href="https://wa.me/27640708649" target="_blank" rel="noopener" class="block text-xs text-paper/50 hover:text-paper transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>

          <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p class="text-xs text-paper/30">
              &copy; {{ currentYear }} Maluleke Kurhula Success. All rights reserved.
            </p>
            <p class="text-xs text-paper/30">
              Built with Angular · Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class MainLayoutComponent {
  readonly navConfig = navConfig;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Menu = Menu;
  mobileNavOpen = false;
  readonly currentYear = new Date().getFullYear();

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
