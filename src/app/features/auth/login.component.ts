import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center px-4 bg-paper">
      <div class="w-full max-w-md">
        <h1 class="text-2xl font-bold font-serif text-ink mb-2 text-center">Sign In</h1>
        <p class="text-base text-muted mb-8 text-center">Access your dashboard.</p>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-6">
          <div>
            <label for="email" class="block text-base font-medium text-ink mb-2">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                   placeholder="you@example.com">
          </div>
          <div>
            <label for="password" class="block text-base font-medium text-ink mb-2">Password</label>
            <input id="password" type="password" formControlName="password" autocomplete="current-password"
                   class="w-full px-4 py-3 border border-ink/20 rounded-lg text-base text-ink bg-paper focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                   placeholder="Min. 8 characters">
          </div>
          <button type="submit" [disabled]="isSubmitting()"
                  class="w-full py-3 px-4 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]">
            {{ isSubmitting() ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>
      </div>
    </div>
  `,
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isSubmitting = signal(false);

  onSubmit(): void {
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    const { email, password } = this.form.value as { email: string; password: string };
    this.auth.login(email, password).subscribe({
      next: () => { this.isSubmitting.set(false); this.router.navigate(['/dashboard']); },
      error: (err: HttpErrorResponse) => { this.isSubmitting.set(false); console.error(err); }
    });
  }
}
