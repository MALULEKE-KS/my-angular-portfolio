import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-pulse space-y-3">
      <div class="h-48 bg-ink/5 rounded-xl"></div>
      <div class="h-6 bg-ink/5 rounded w-3/4"></div>
      <div class="h-4 bg-ink/5 rounded w-full"></div>
      <div class="h-4 bg-ink/5 rounded w-5/6"></div>
    </div>
  `,
})
export class CardSkeletonComponent {}
