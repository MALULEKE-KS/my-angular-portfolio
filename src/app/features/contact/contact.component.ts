import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Send, CheckCircle, AlertCircle, Loader } from 'lucide-angular';
import { MessageService } from '../../core/services/message.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-paper py-20 px-4">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold font-serif text-ink mb-4">Get in Touch</h1>
          <p class="text-lg text-muted">Have a project in mind? Let's build something together.</p>
        </div>

        @if (isSuccess()) {
          <div class="mb-8 p-6 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
            <lucide-icon [img]="CheckCircle" class="w-12 h-12 text-green mx-auto mb-4"></lucide-icon>
            <h3 class="text-xl font-bold text-green mb-2">Message Sent!</h3>
            <p class="text-muted">I'll get back to you within 24-48 hours.</p>
            <button (click)="resetForm()" class="mt-4 text-gold hover:text-gold2 font-medium">
              Send another message
            </button>
          </div>
        }

        @if (isError()) {
          <div class="mb-8 p-6 rounded-xl bg-red-500/10 border border-red-500/30">
            <lucide-icon [img]="AlertCircle" class="w-10 h-10 text-red mx-auto mb-4"></lucide-icon>
            <p class="text-center text-red font-medium">{{ errorMessage() }}</p>
          </div>
        }

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <label for="name" class="block text-base font-medium text-ink mb-2">Name</label>
            <input id="name" type="text" formControlName="name" autocomplete="name"
              class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper
                     focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
              placeholder="Your name" />
            @if (nameInvalid) {
              <p class="text-red text-sm mt-2">Name is required (min 2 characters).</p>
            }
          </div>

          <div>
            <label for="email" class="block text-base font-medium text-ink mb-2">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email"
              class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper
                     focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
              placeholder="you@example.com" />
            @if (emailInvalid) {
              <p class="text-red text-sm mt-2">
                @if (email?.errors?.['required']) { Email is required. }
                @if (email?.errors?.['email']) { Enter a valid email. }
              </p>
            }
          </div>

          <div>
            <label for="message" class="block text-base font-medium text-ink mb-2">Message</label>
            <textarea id="message" formControlName="message" rows="5"
              class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper
                     focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
              placeholder="Tell me about your project..."></textarea>
            @if (messageInvalid) {
              <p class="text-red text-sm mt-2">Message is required (min 10 characters).</p>
            }
          </div>

          <button type="submit" [disabled]="isSubmitting() || isRateLimited()"
            class="w-full py-4 px-6 bg-gold text-paper font-bold text-lg rounded-xl
                   hover:bg-gold2 transition-all disabled:opacity-50 disabled:cursor-not-allowed
                   min-h-[56px] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
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

        <div class="mt-12 pt-8 border-t border-ink/10 text-center">
          <p class="text-muted mb-4">Or reach out directly:</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="mailto:kurhula04s&#64;gmail.com" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition-colors">
              kurhula04s&#64;gmail.com
            </a>
            <a href="https://wa.me/27640708649" target="_blank" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition-colors">
              WhatsApp
            </a>
            <a href="https://za.linkedin.com/in/kurhula-success-maluleke-32153231a" target="_blank" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition-colors">
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
    
    // Simulate message sending since backend isn't connected
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSuccess.set(true);
      this.form.reset();
    }, 1500);
  }
  
  resetForm(): void {
    this.isSuccess.set(false);
    this.form.reset();
  }
  
  private handleRateLimit(seconds: number): void {
    this.isRateLimited.set(true);
    this.countdownSeconds.set(seconds);
    this.countdownInterval = setInterval(() => {
      const s = this.countdownSeconds() - 1;
      this.countdownSeconds.set(s);
      if (s <= 0) {
        this.isRateLimited.set(false);
        if (this.countdownInterval) clearInterval(this.countdownInterval);
      }
    }, 1000);
  }
  
  readonly Send = Send;
  readonly CheckCircle = CheckCircle;
  readonly AlertCircle = AlertCircle;
  readonly Loader = Loader;
}
