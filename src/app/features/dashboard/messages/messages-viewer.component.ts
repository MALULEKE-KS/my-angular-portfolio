import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MessageService } from '../../../core/services/message.service';
import { Message } from '../../../core/models/api.generated';
import { TableSkeletonComponent } from '../../../shared/components/skeleton/table-skeleton.component';

@Component({
  selector: 'app-messages-viewer',
  standalone: true,
  imports: [CommonModule, DatePipe, TableSkeletonComponent],
  template: `
    <section class="px-4 py-16">
      <div class="max-w-4xl mx-auto w-full">
        <h2 class="text-3xl font-bold font-serif text-ink mb-2">Messages</h2>
        <p class="text-lg text-muted mb-8">View incoming messages.</p>
        <app-table-skeleton *ngIf="isLoading()" />
        <div *ngIf="isSuccess() && messages().length === 0" class="text-lg text-muted text-center py-12">No messages yet.</div>
        <div *ngIf="isSuccess() && messages().length > 0" class="space-y-4">
          <div *ngFor="let msg of messages()" class="p-6 rounded-xl border border-ink/10 bg-paper">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="text-lg font-semibold text-ink">{{ msg.name }}</h3>
                <p class="text-base text-muted">{{ msg.email }}</p>
              </div>
              <span class="text-sm text-muted">{{ msg.createdAt | date:'medium' }}</span>
            </div>
            <p class="text-base text-ink mt-2">{{ msg.content }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MessagesViewerComponent implements OnInit {
  private svc = inject(MessageService);
  messages = signal<Message[]>([]);
  isLoading = signal(true);
  isSuccess = signal(false);

  ngOnInit(): void {
    this.svc.getMessages().subscribe({
      next: (data) => { this.messages.set(data); this.isLoading.set(false); this.isSuccess.set(true); },
      error: () => { this.isLoading.set(false); }
    });
  }
}
