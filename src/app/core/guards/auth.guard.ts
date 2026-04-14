import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  // Preserve the URL the user was trying to access so we can redirect after login
  const returnUrl = state.url;
  return router.createUrlTree(['/login'], { queryParams: { returnUrl } });
};
