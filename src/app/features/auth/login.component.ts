import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LucideAngularModule, LogIn } from 'lucide-angular';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <div class="min-h-screen flex items-center justify-center px-4 bg-paper">
      <div class="w-full max-w-md">
        <div class="card p-8">
          <div class="text-center mb-8">
            <lucide-icon [img]="LogIn" class="w-12 h-12 text-gold mx-auto mb-4"></lucide-icon>
            <h1 class="text-2xl font-bold font-serif">Welcome Back</h1>
            <p class="text-muted text-base mt-2">Sign in to your dashboard</p>
          </div>
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Email</label>
              <input type="email" formControlName="email" 
                     class="w-full px-4 py-3 border border-ink/20 rounded-lg bg-paper text-base"
                     placeholder="you@example.com">
            </div>
            <div class="mb-6">
              <label class="block text-sm font-medium mb-2">Password</label>
              <input type="password" formControlName="password"
                     class="w-full px-4 py-3 border border-ink/20 rounded-lg bg-paper text-base"
                     placeholder="Enter your password">
            </div>
            <button type="submit" [disabled]="form.invalid || isSubmitting()"
                    class="w-full py-3 bg-gold text-paper font-medium rounded-lg hover:bg-gold2 transition-colors min-h-[44px] disabled:opacity-50">
              {{ isSubmitting() ? 'Signing in...' : 'Sign In' }}
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
  readonly LogIn = LogIn;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.isSubmitting.set(true);
      this.auth.login(email!, password!).subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';
          this.router.navigateByUrl(returnUrl);
        },
        error: () => this.isSubmitting.set(false)
      });
    }
  }
}
