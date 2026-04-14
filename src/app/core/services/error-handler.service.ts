import { Injectable } from '@angular/core';
import { ApiError } from '../models/api.generated';

export interface ErrorConfig {
  message: string;
  action: 'clear-password-focus' | 'redirect-login' | 'redirect-home' | 'highlight-field' | 'show-404' | 'disable-button-countdown' | 'show-fallback' | 'continue-waiting' | 'show-support-code';
}

/** R62 — Maps backend error codes to user-facing messages and UI actions. */
export const ERROR_CODE_MAP: Record<string, ErrorConfig> = {
  AUTH_INVALID_CREDENTIALS: {
    message: 'Wrong email or password.',
    action: 'clear-password-focus',
  },
  AUTH_UNAUTHORIZED: {
    message: 'Your session expired. Please log in again.',
    action: 'redirect-login',
  },
  AUTH_FORBIDDEN: {
    message: "You don't have permission to do this.",
    action: 'redirect-home',
  },
  VALIDATION_ERROR: {
    message: '',
    action: 'highlight-field',
  },
  NOT_FOUND: {
    message: 'The requested item was not found.',
    action: 'show-404',
  },
  RATE_LIMITED: {
    message: 'Too many requests. Try again in {retryAfter} seconds.',
    action: 'disable-button-countdown',
  },
  AI_SERVICE_UNAVAILABLE: {
    message: 'AI service temporarily unavailable.',
    action: 'show-fallback',
  },
  AI_SERVICE_SLOW: {
    message: '',
    action: 'continue-waiting',
  },
  INTERNAL_SERVER_ERROR: {
    message: 'Something went wrong. Error ID: {requestId}',
    action: 'show-support-code',
  },
};

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  resolve(error: ApiError): ErrorConfig {
    return ERROR_CODE_MAP[error.code] ?? {
      message: error.message || 'An unexpected error occurred.',
      action: 'show-support-code',
    };
  }

  formatMessage(template: string, params: Record<string, string | number>): string {
    return Object.entries(params).reduce(
      (msg, [key, value]) => msg.replace(`{${key}}`, String(value)),
      template
    );
  }
}
