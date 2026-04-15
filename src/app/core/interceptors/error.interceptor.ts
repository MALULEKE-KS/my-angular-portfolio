import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from '@env/environment';

/**
 * HTTP Error Interceptor
 * Handles HTTP errors globally, providing centralized error logging
 * and re-throwing errors for component-level handling.
 */
export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Log errors for debugging and monitoring (only in development)
      if (environment.enableDebugLogs) {
        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          console.error('HTTP Client Error:', {
            message: error.error.message,
            url: req.url
          });
        } else if (error.status === 0) {
          console.error('Network Error:', {
            message: 'Potential CORS issue or server unreachable',
            url: req.url
          });
        } else {
          // Server-side error
          console.error('HTTP Server Error:', {
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            message: error.message
          });
        }
      }

      // Re-throw the error so components can handle user-facing messages
      return throwError(() => error);
    })
  );
};