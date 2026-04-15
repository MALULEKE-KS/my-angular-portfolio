import { Component, Input } from '@angular/core';

import { LucideAngularModule, AlertCircle } from 'lucide-angular';
import { ApiError } from '../../../core/models/api.generated';

@Component({
    selector: 'app-error-message',
    imports: [LucideAngularModule],
    template: `
    <div class="flex flex-col items-center gap-4 py-8 text-center">
      <lucide-icon [img]="AlertCircle" class="w-10 h-10 text-red"></lucide-icon>
      <p class="text-lg text-ink font-medium">{{ error?.message || 'Something went wrong.' }}</p>
      @if (error?.requestId) {
        <p class="text-sm text-muted font-mono">Error ID: {{ error!.requestId }}</p>
      }
      <p class="text-base text-muted">Please try again.</p>
    </div>
  `
})
export class ErrorMessageComponent {
  @Input() error: ApiError | null = null;
  readonly AlertCircle = AlertCircle;
}
