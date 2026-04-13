import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { LucideAngularModule, Mail } from 'lucide-angular';
import { MessageService } from '../../../core/services/message.service';
import { Message } from '../../../core/models/api.generated';

@Component({
  selector: 'app-messages-viewer',
  standalone: true,
  imports: [CommonModule, DatePipe, LucideAngularModule],
  template: `
    <div class="max-w-4xl mx-auto p-8">
      <h2 class="text-2xl font-bold font-serif mb-2">Messages</h2>
      <p class="text-muted text-base mb-8">View messages from your portfolio visitors</p>
      @if (isLoading()) {
        <div class="space-y-4">
          @for (i of [1,2,3]; track i) {
            <div class="card p-6 animate-pulse"><div class="h-4 bg-ink/5 rounded w-1/4 mb-2"></div><div class="h-4 bg-ink/5 rounded w-full"></div></div>
          }
        </div>
      }
      @if (messages().length > 0) {
        <div class="space-y-4">
          @for (msg of messages(); track msg.id) {
            <div class="card p-6">
              <div class="flex items-start justify-between mb-3">
                <div>
                  <h3 class="font-semibold text-lg">{{ msg.name }}</h3>
                  <p class="text-muted text-sm">{{ msg.email }}</p>
                </div>
                <span class="text-xs text-muted">{{ msg.createdAt | date:'medium' }}</span>
              </div>
              <p class="text-base">{{ msg.content }}</p>
            </div>
          }
        </div>
      }
      @if (!isLoading() && messages().length === 0) {
        <div class="card p-12 text-center">
          <lucide-icon [img]="Mail" class="w-12 h-12 text-muted mx-auto mb-4"></lucide-icon>
          <p class="text-muted text-lg">No messages yet</p>
        </div>
      }
    </div>
  `
})
export class MessagesViewerComponent implements OnInit {
  private svc = inject(MessageService);
  messages = signal<Message[]>([]);
  isLoading = signal(true);
  readonly Mail = Mail;
  
  ngOnInit() {
    this.svc.getMessages().subscribe({
      next: (data) => { this.messages.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }
}
