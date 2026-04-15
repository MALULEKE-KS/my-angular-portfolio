import { Component, HostListener, signal } from '@angular/core';

import { LucideAngularModule, ChevronUp } from 'lucide-angular';

@Component({
    selector: 'app-back-to-top',
    imports: [LucideAngularModule],
    template: `
    @if (visible()) {
      <button
        (click)="scrollToTop()"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gold text-paper rounded-full shadow-xl flex items-center justify-center hover:bg-gold2 transition-all hover:scale-110 active:scale-95"
        aria-label="Back to top"
      >
        <lucide-icon [img]="ChevronUp" class="w-5 h-5"></lucide-icon>
      </button>
    }
  `
})
export class BackToTopComponent {
  visible = signal(false);
  readonly ChevronUp = ChevronUp;

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}