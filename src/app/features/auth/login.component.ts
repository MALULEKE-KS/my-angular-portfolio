import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LucideAngularModule, LogIn, AlertCircle } from 'lucide-angular';
import { AuthService } from '../../core/services/auth.service';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, LucideAngularModule],
    template: `
    <div class="min-h-screen flex items-center justify-center px-4 bg-paper">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-2xl border-2 border-ink/10 p-8 shadow-sm">
          <div class="text-center mb-8">
            <div class="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
              <lucide-icon [img]="LogIn" class="w-7 h-7 text-white"></lucide-icon>
            </div>
            <h1 class="text-2xl font-bold font-serif text-ink">Welcome Back</h1>
            <p class="text-muted text-sm mt-2">Sign in to your dashboard</p>
          </div>
          @if (loginError()) {
            <div class="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <lucide-icon [img]="AlertCircle" class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"></lucide-icon>
              <p class="text-red-600 text-sm">{{ loginError() }}</p>
            </div>
          }
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="mb-4">
              <label class="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Email</label>
              <input type="email" formControlName="email" 
                     class="w-full px-4 py-3 rounded-xl border-2 border-ink/10 bg-gray-50 text-ink text-sm focus:outline-none focus:border-gold transition-colors"
                     placeholder="you@example.com">
            </div>
            <div class="mb-6">
              <label class="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Password</label>
              <input type="password" formControlName="password"
                     class="w-full px-4 py-3 rounded-xl border-2 border-ink/10 bg-gray-50 text-ink text-sm focus:outline-none focus:border-gold transition-colors"
                     placeholder="Enter your password">
            </div>
            <button type="submit" [disabled]="form.invalid || isSubmitting()"
                    class="w-full py-3.5 bg-gold text-white font-semibold text-sm rounded-xl hover:bg-gold/80 transition-colors min-h-[48px] disabled:opacity-50 flex items-center justify-center gap-2">
              @if (isSubmitting()) {
                <span>Signing in...</span>
              } @else {
                <span>Sign In</span>
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  isSubmitting = signal(false);
  loginError = signal('');
  readonly LogIn = LogIn;
  readonly AlertCircle = AlertCircle;

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.loginError.set('');

    const { email, password } = this.form.getRawValue();
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';

    this.auth.login(email, password).pipe(
      finalize(() => this.isSubmitting.set(false))
    ).subscribe({
      next: () => {
        void this.router.navigateByUrl(returnUrl);
      },
      error: () => {
        this.loginError.set('Invalid email or password. Please try again.');
      }
    });
  }
}
