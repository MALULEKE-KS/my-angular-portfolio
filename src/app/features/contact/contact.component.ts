import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { LucideAngularModule, Send, CheckCircle, AlertCircle, Loader, Mail, Linkedin, Github } from 'lucide-angular';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper py-20 px-4">

      <div class="max-w-2xl mx-auto">

        <!-- Page header -->
        <div class="text-center mb-14">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-3">Get in Touch</h1>
          <p class="text-lg text-muted">Have a project in mind? Let's build something together.</p>
        </div>

        <!-- Success -->
        @if (isSuccess()) {
          <div class="card p-8 text-center mb-8 animate-fade-in border-green/20">
            <div class="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
              <lucide-icon [img]="CheckCircle" class="w-7 h-7 text-green"></lucide-icon>
            </div>
            <h3 class="text-xl font-bold font-serif text-green mb-2">Message Sent!</h3>
            <p class="text-muted mb-4">I'll get back to you within 24–48 hours.</p>
            <button (click)="resetForm()" class="link-arrow text-sm">
              Send another message
            </button>
          </div>
        }

        <!-- Error -->
        @if (isError()) {
          <div class="card p-6 mb-8 border-red/20 animate-fade-in">
            <lucide-icon [img]="AlertCircle" class="w-8 h-8 text-red mx-auto mb-3"></lucide-icon>
            <p class="text-center text-red font-medium">{{ errorMessage() }}</p>
          </div>
        }

        <!-- Form -->
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="card p-8 space-y-6" novalidate>

          <div>
            <label for="name" class="form-label">Name</label>
            <input id="name" type="text" formControlName="name" autocomplete="name"
              class="form-input" placeholder="Your name">
            @if (nameInvalid) {
              <p class="form-error">Name is required (min 2 characters).</p>
            }
          </div>

          <div>
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email"
              class="form-input" placeholder="you@example.com">
            @if (emailInvalid) {
              <p class="form-error">
                @if (email?.errors?.['required']) { Email is required. }
                @if (email?.errors?.['email']) { Enter a valid email. }
              </p>
            }
          </div>

          <div>
            <label for="message" class="form-label">Message</label>
            <textarea id="message" formControlName="message" rows="5"
              class="form-input resize-none" placeholder="Tell me about your project..."></textarea>
            @if (messageInvalid) {
              <p class="form-error">Message is required (min 10 characters).</p>
            }
          </div>

          <button type="submit"
            class="btn-cta w-full min-h-[52px] text-base"
            [disabled]="isSubmitting() || isRateLimited()">
            @if (isSubmitting()) {
              <lucide-icon [img]="Loader" class="w-5 h-5 animate-spin"></lucide-icon>
              <span>Sending...</span>
            } @else if (isRateLimited()) {
              <span>Try again in {{ countdownSeconds() }}s</span>
            } @else {
              <lucide-icon [img]="Send" class="w-5 h-5"></lucide-icon>
              <span>Send Message</span>
            }
          </button>

        </form>

        <!-- Direct contact -->
        <div class="mt-12 pt-8 border-t border-ink/10 text-center">
          <p class="text-muted mb-5 text-sm">Or reach out directly:</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href="mailto:kurhula04s@gmail.com" class="btn-secondary text-sm min-h-[40px] px-5 py-2">
              <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
              Email
            </a>
            <a href="https://wa.me/27640708649" target="_blank" rel="noopener noreferrer"
               class="btn-secondary text-sm min-h-[40px] px-5 py-2">
              WhatsApp
            </a>
            <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank"
               rel="noopener noreferrer" class="btn-secondary text-sm min-h-[40px] px-5 py-2">
              <lucide-icon [img]="Linkedin" class="w-4 h-4"></lucide-icon>
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  `,
})
export class ContactComponent implements OnInit {
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

  ngOnInit(): void {}

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    this.isError.set(false);

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
      error: () => {
        this.isSubmitting.set(false);
        this.isError.set(true);
      },
    });
  }

  resetForm(): void {
    this.isSuccess.set(false);
    this.form.reset();
  }

  readonly Send = Send;
  readonly CheckCircle = CheckCircle;
  readonly AlertCircle = AlertCircle;
  readonly Loader = Loader;
  readonly Mail = Mail;
  readonly Linkedin = Linkedin;
  readonly Github = Github;
}
