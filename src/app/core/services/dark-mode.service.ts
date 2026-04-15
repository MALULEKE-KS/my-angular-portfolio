import { Injectable, signal, effect, inject, DestroyRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private readonly STORAGE_KEY = 'theme';
  private destroyRef = inject(DestroyRef);
  isDark = signal(false);

  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === 'dark') {
      this.isDark.set(true);
      this.applyDark(true);
    } else if (stored === 'light') {
      this.isDark.set(false);
      this.applyDark(false);
    } else {
      // Respect OS preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(prefersDark);
      this.applyDark(prefersDark);
    }

    // Listen for OS theme changes with proper cleanup
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.isDark.set(e.matches);
        this.applyDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    this.destroyRef.onDestroy(() => {
      mediaQuery.removeEventListener('change', handleChange);
    });
  }

  toggle(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    this.applyDark(next);
    localStorage.setItem(this.STORAGE_KEY, next ? 'dark' : 'light');
  }

  private applyDark(dark: boolean): void {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}