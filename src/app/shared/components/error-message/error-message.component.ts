import { Component, Input } from '@angular/core';
import { LucideAngularModule, AlertCircle } from 'lucide-angular';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="flex flex-col items-center gap-4 py-8 text-center">
      <lucide-icon [img]="AlertCircle" class="w-10 h-10 text-red"></lucide-icon>
      <p class="text-lg text-ink font-medium">{{ error?.message || 'Something went wrong.' }}</p>
      <p *ngIf="error?.requestId" class="text-sm text-muted font-mono">Error ID: {{ error.requestId }}</p>
    </div>
  `,
})
export class ErrorMessageComponent {
  @Input() error: any = null;
  readonly AlertCircle = AlertCircle;
}
