import { Component, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../../core/services/message.service';
import { SendMessageRequest } from '../../core/models/api.generated';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { LucideAngularModule, Send, CheckCircle, AlertCircle } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorMessageComponent, LucideAngularModule],
  template: `
    <section class="min-h-screen py-20 px-4 bg-paper">
      <div class="max-w-xl mx-auto w-full">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold font-serif text-ink mb-4">Contact</h1>
          <p class="text-lg text-muted">Send me a message</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-6">
          <div>
            <label for="name" class="block text-base font-medium text-ink mb-2">Name</label>
            <input id="name" type="text" formControlName="name" autocomplete="name"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper
                          focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                   placeholder="Your name">
            <p *ngIf="nameInvalid" class="text-red text-sm mt-2">Name is required.</p>
          </div>

          <div>
            <label for="email" class="block text-base font-medium text-ink mb-2">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper
                          focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                   placeholder="you@example.com">
            <p *ngIf="emailInvalid" class="text-red text-sm mt-2">
              <span *ngIf="email?.errors?.['required']">Email is required.</span>
              <span *ngIf="email?.errors?.['email']">Enter a valid email.</span>
            </p>
          </div>

          <div>
            <label for="message" class="block text-base font-medium text-ink mb-2">Message</label>
            <textarea id="message" formControlName="message" rows="5"
                      class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper
                             focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                      placeholder="Your message..."></textarea>
            <p *ngIf="messageInvalid" class="text-red text-sm mt-2">Message is required (min 10 characters).</p>
          </div>

          <app-error-message *ngIf="isError()" [error]="error()"></app-error-message>

          <div *ngIf="isSuccess()" class="p-4 rounded-lg bg-green-500/10 text-green text-center flex items-center justify-center gap-2">
            <lucide-icon [img]="CheckCircle" class="w-5 h-5"></lucide-icon>
            <span class="font-medium">Message sent successfully!</span>
          </div>

          <button type="submit" [disabled]="isSubmitting() || isRateLimited()"
                  class="w-full py-3 px-4 bg-gold text-paper font-medium rounded-lg
                         hover:bg-gold2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2">
            <lucide-icon *ngIf="!isSubmitting() && !isRateLimited()" [img]="Send" class="w-5 h-5"></lucide-icon>
            <span *ngIf="!isSubmitting() && !isRateLimited()">Send Message</span>
            <span *ngIf="isSubmitting()">Sending...</span>
            <span *ngIf="isRateLimited()">Try again in {{ countdownSeconds() }}s</span>
          </button>
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent implements OnInit {
  private svc = inject(MessageService);
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  
  isSubmitting = signal(false);
  isError = signal(false);
  isSuccess = signal(false);
  error = signal<any>(null);
  isRateLimited = signal(false);
  countdownSeconds = signal(0);
  
  readonly Send = Send;
  readonly CheckCircle = CheckCircle;
  readonly AlertCircle = AlertCircle;
  
  private countdownInterval: ReturnType<typeof setInterval> | null = null;

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }
  get nameInvalid() { return this.name?.invalid && this.name?.touched; }
  get emailInvalid() { return this.email?.invalid && this.email?.touched; }
  get messageInvalid() { return this.message?.invalid && this.message?.touched; }

  ngOnInit(): void {}

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    this.isError.set(false);
    this.isSuccess.set(false);
    
    const req: SendMessageRequest = this.form.value as SendMessageRequest;
    this.svc.sendMessage(req).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.form.reset();
      },
      error: (err: any) => {
        this.isSubmitting.set(false);
        this.isError.set(true);
        this.error.set(err);
      },
    });
  }
}
