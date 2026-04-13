import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../../core/services/message.service';
import { SendMessageRequest } from '../../core/models/api.generated';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="min-h-[500px] flex flex-col justify-center px-4 py-16 bg-paper">
      <div class="max-w-xl mx-auto w-full">
        <h1 class="text-4xl font-bold font-serif text-ink mb-4 text-center">Contact</h1>
        <p class="text-lg text-muted mb-12 text-center">Send me a message.</p>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-6">
          <div>
            <label for="name" class="block text-base font-medium text-ink mb-2">Name</label>
            <input id="name" type="text" formControlName="name" autocomplete="name"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                   placeholder="Your name">
          </div>
          <div>
            <label for="email" class="block text-base font-medium text-ink mb-2">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                   placeholder="you@example.com">
          </div>
          <div>
            <label for="message" class="block text-base font-medium text-ink mb-2">Message</label>
            <textarea id="message" formControlName="message" rows="5"
                      class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                      placeholder="Your message..."></textarea>
          </div>
          <div *ngIf="isSuccess()" class="p-4 rounded-lg bg-green-500/10 text-green text-center">
            <p class="text-lg font-medium">Message sent successfully!</p>
          </div>
          <button type="submit" [disabled]="isSubmitting()"
                  class="w-full py-3 px-4 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]">
            {{ isSubmitting() ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent implements OnInit {
  private svc = inject(MessageService);
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  isSubmitting = signal(false);
  isSuccess = signal(false);

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    const req = this.form.value as SendMessageRequest;
    this.svc.sendMessage(req).subscribe({
      next: () => { this.isSubmitting.set(false); this.isSuccess.set(true); this.form.reset(); },
      error: () => { this.isSubmitting.set(false); }
    });
  }
}
