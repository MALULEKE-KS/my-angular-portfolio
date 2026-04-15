import { Component, OnInit, OnDestroy, inject, signal, ChangeDetectionStrategy } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Send, CheckCircle, AlertCircle, Loader, Github, Linkedin, Mail, ArrowRight } from 'lucide-angular';
import { MessageService } from '../../core/services/message.service';

@Component({
    selector: 'app-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, RouterLink, LucideAngularModule],
    template: `
    <div class="min-h-screen bg-paper pt-20 pb-16">
      <div class="max-w-4xl mx-auto px-6">

        <!-- Page header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-3">Let's Work Together</h1>
          <p class="text-muted">Have a project in mind? Let's build something that actually ships.</p>
        </div>

        <!-- Success state -->
        @if (isSuccess()) {
          <div class="mb-8 p-8 rounded-2xl border-2 border-green-600/20 bg-green-50 text-center">
            <lucide-icon [img]="CheckCircle" class="w-12 h-12 text-green-600 mx-auto mb-4"></lucide-icon>
            <h3 class="text-xl font-bold text-ink mb-2">Message sent.</h3>
            <p class="text-muted text-sm mb-4">I'll get back to you within 48 hours.</p>
            <button (click)="resetForm()" class="text-gold font-semibold text-sm hover:text-ink transition-colors">
              Send another message
            </button>
          </div>
        }

        <!-- Error state -->
        @if (isError()) {
          <div class="mb-8 p-6 rounded-2xl border-2 border-red-600/20 bg-red-50">
            <lucide-icon [img]="AlertCircle" class="w-10 h-10 text-red-600 mx-auto mb-4"></lucide-icon>
            <p class="text-center text-red-600 font-medium text-sm">{{ errorMessage() }}</p>
          </div>
        }

        <!-- Contact form -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="rounded-2xl border-2 border-ink/10 bg-white p-8">
            <h2 class="font-bold text-ink text-lg mb-6">Send a message</h2>
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-5">
              <div>
                <label for="name" class="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Name</label>
                <input id="name" type="text" formControlName="name" autocomplete="name"
                  [class]="nameInputClasses"
                  placeholder="Your name" (blur)="onBlur('name')" />
                @if (nameInvalid) {
                  <p class="text-red-600 text-xs mt-1">Name is required (min 2 characters).</p>
                }
              </div>
              <div>
                <label for="email" class="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Email</label>
                <input id="email" type="email" formControlName="email" autocomplete="email"
                  class="w-full px-4 py-3 rounded-xl border-2 border-ink/10 bg-gray-50 text-ink text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="you@example.com" (blur)="onBlur('email')" />
                @if (emailInvalid) {
                  <p class="text-red-600 text-xs mt-1">
                    @if (email?.errors?.['required']) { Email is required. }
                    @if (email?.errors?.['email']) { Enter a valid email. }
                  </p>
                }
              </div>
              <div>
                <label for="message" class="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Message</label>
                <textarea id="message" formControlName="message" rows="5"
                  class="w-full px-4 py-3 rounded-xl border-2 border-ink/10 bg-gray-50 text-ink text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about your project..." (blur)="onBlur('message')"></textarea>
                <div class="flex justify-end mt-1">
                  <span class="text-xs" [class]="messageLengthColor">
                    {{ message?.value?.length || 0 }} / 2000
                  </span>
                </div>
                @if (messageInvalid) {
                  <p class="text-red-600 text-xs mt-1">Message is required (min 10 characters).</p>
                }
              </div>
              <button type="submit" [disabled]="form.invalid || isSubmitting() || isRateLimited()"
                class="w-full py-3.5 px-6 bg-ink text-white font-bold text-sm rounded-xl hover:bg-ink/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                @if (isSubmitting()) {
                  <lucide-icon [img]="Loader" class="w-4 h-4 animate-spin"></lucide-icon>
                  <span>Sending...</span>
                } @else if (isRateLimited()) {
                  <span>Try again in {{ countdownSeconds() }}s</span>
                } @else {
                  <lucide-icon [img]="Send" class="w-4 h-4"></lucide-icon>
                  <span>Send Message</span>
                }
              </button>
            </form>
          </div>

          <!-- Contact info -->
          <div class="space-y-6">
            <div class="rounded-2xl border-2 border-ink/10 bg-white p-8">
              <h2 class="font-bold text-ink text-lg mb-4">Direct contact</h2>
              <div class="space-y-3">
                <a href="mailto:kurhula04s@gmail.com" class="flex items-center gap-3 text-muted hover:text-gold transition-colors group">
                  <lucide-icon [img]="Mail" class="w-5 h-5 flex-shrink-0"></lucide-icon>
                  <span class="text-sm">kurhula04s&#64;gmail.com</span>
                </a>
                <a href="https://github.com/MALULEKE-KS" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted hover:text-gold transition-colors group">
                  <lucide-icon [img]="Github" class="w-5 h-5 flex-shrink-0"></lucide-icon>
                  <span class="text-sm">github.com/MALULEKE-KS</span>
                </a>
                <a href="https://linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-muted hover:text-gold transition-colors group">
                  <lucide-icon [img]="Linkedin" class="w-5 h-5 flex-shrink-0"></lucide-icon>
                  <span class="text-sm">linkedin.com/in/kurhula-success-maluleke</span>
                </a>
              </div>
            </div>

            <div class="rounded-2xl border-2 border-gold/20 bg-gold/5 p-8">
              <h2 class="font-bold text-ink text-lg mb-3">What happens next</h2>
              <div class="space-y-3 text-sm text-muted">
                <div class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center">1</span>
                  <p>I review your message and project details.</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center">2</span>
                  <p>We schedule a 30-minute call to discuss scope and feasibility.</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center">3</span>
                  <p>I send a detailed proposal with timeline and pricing.</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl bg-ink text-white p-8">
              <p class="text-white/80 text-sm leading-relaxed mb-4">Not sure if I am the right fit? Check out my work and decide for yourself.</p>
              <a routerLink="/projects" class="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-white transition-colors">
                View my projects <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent implements OnInit, OnDestroy {
  private messageService = inject(MessageService);

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  isSubmitting = signal(false);
  isError = signal(false);
  isSuccess = signal(false);
  isRateLimited = signal(false);
  countdownSeconds = signal(0);
  errorMessage = signal('Something went wrong. Please try again.');

  private countdownInterval: ReturnType<typeof setInterval> | null = null;

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }
  get nameInvalid() { return this.name?.invalid && this.name?.touched; }
  get emailInvalid() { return this.email?.invalid && this.email?.touched; }
  get messageInvalid() { return this.message?.invalid && this.message?.touched; }

  get nameInputClasses(): string {
    const base = 'w-full px-4 py-3 rounded-xl border-2 bg-gray-50 text-ink text-sm focus:outline-none transition-colors';
    return this.nameInvalid
      ? `${base} border-red-600 bg-red-50/5`
      : `${base} border-ink/10 focus:border-gold`;
  }

  get messageLengthColor(): string {
    return (this.message!.value?.length || 0) > 1800 ? 'text-red-600' : 'text-muted';
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.isSubmitting.set(true);
    this.isError.set(false);
    this.isSuccess.set(false);

    this.messageService.sendMessage({
      name: this.name!.value!,
      email: this.email!.value!,
      content: this.message!.value!,
    }).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.form.reset();
      },
      error: (err: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        if (err.status === 429) {
          this.handleRateLimit(60);
        } else {
          this.isError.set(true);
          this.errorMessage.set('Failed to send. Please try again or email directly.');
        }
      },
    });
  }

  resetForm(): void {
    this.isSuccess.set(false);
    this.form.reset();
  }

  private handleRateLimit(seconds: number): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.isError.set(true);
    this.isRateLimited.set(true);
    this.countdownSeconds.set(seconds);
    this.errorMessage.set(`Too many requests. Try again in ${seconds} seconds.`);
    this.countdownInterval = setInterval(() => {
      const s = this.countdownSeconds() - 1;
      this.countdownSeconds.set(s);
      if (s <= 0) {
        this.isRateLimited.set(false);
        if (this.countdownInterval) {
          clearInterval(this.countdownInterval);
          this.countdownInterval = null;
        }
      }
    }, 1000);
  }

  onBlur(field: 'name' | 'email' | 'message'): void {
    const ctrl = this.form.get(field);
    if (ctrl) ctrl.markAsTouched();
  }

  readonly Send = Send;
  readonly CheckCircle = CheckCircle;
  readonly AlertCircle = AlertCircle;
  readonly Loader = Loader;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly ArrowRight = ArrowRight;
}
