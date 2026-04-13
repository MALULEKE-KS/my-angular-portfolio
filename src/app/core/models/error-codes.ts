export const ERROR_CODE_MAP: Record<string, { message: string; action: string }> = {
  AUTH_INVALID_CREDENTIALS: { message: 'Wrong email or password', action: 'clear-password-focus' },
  AUTH_UNAUTHORIZED: { message: 'Your session expired. Please log in again.', action: 'redirect-login' },
  AUTH_FORBIDDEN: { message: "You don't have permission to do this.", action: 'redirect-home' },
  VALIDATION_ERROR: { message: '', action: 'highlight-field' },
  NOT_FOUND: { message: 'The requested item was not found.', action: 'show-404' },
  RATE_LIMITED: { message: 'Too many requests. Try again in {retryAfter} seconds.', action: 'disable-button-countdown' },
  AI_SERVICE_UNAVAILABLE: { message: 'AI service temporarily unavailable.', action: 'show-fallback' },
  AI_SERVICE_SLOW: { message: '', action: 'continue-waiting' },
  INTERNAL_SERVER_ERROR: { message: 'Something went wrong. Error ID: {requestId}', action: 'show-support-code' },
};
