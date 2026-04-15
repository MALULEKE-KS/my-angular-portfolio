import { Component } from '@angular/core';


@Component({
    selector: 'app-table-skeleton',
    imports: [],
    template: `
    <div class="space-y-3 animate-pulse">
      @for (row of rows; track row) {
        <div class="flex gap-4 p-4 rounded-lg border border-ink/10">
          <div class="h-4 bg-ink/5 rounded w-1/4"></div>
          <div class="h-4 bg-ink/5 rounded w-1/3"></div>
          <div class="h-4 bg-ink/5 rounded w-20 ml-auto"></div>
        </div>
      }
    </div>
    `
})
export class TableSkeletonComponent {
  rows = [1, 2, 3, 4, 5];
}
