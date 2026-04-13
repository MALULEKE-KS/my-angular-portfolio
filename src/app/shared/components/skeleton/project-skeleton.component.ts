import { Component } from '@angular/core';

@Component({
  selector: 'app-project-skeleton',
  standalone: true,
  template: `
    <div class="space-y-4 p-6 rounded-xl border border-ink/10 bg-paper animate-pulse">
      <div class="aspect-video bg-ink/5 rounded-lg"></div>
      <div class="h-6 bg-ink/5 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-ink/5 rounded w-full"></div>
        <div class="h-4 bg-ink/5 rounded w-5/6"></div>
      </div>
      <div class="flex gap-2">
        <div class="h-6 w-20 bg-ink/5 rounded-full"></div>
        <div class="h-6 w-16 bg-ink/5 rounded-full"></div>
      </div>
    </div>
  `,
})
export class ProjectSkeletonComponent {}
