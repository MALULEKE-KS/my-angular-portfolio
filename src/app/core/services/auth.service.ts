import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/api.generated';

interface User {
  id: string;
  email: string;
  name?: string;
}

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiBase = '/api/v1';
  private readonly _user = signal<User | null>(this.loadUser());
  readonly user = this._user.asReadonly();

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private loadUser(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }

  private saveUser(user: User | null): void {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiBase}/auth/login`, { email, password } as LoginRequest).pipe(
      tap((response) => {
        if (response.success && response.data?.user) {
          this._user.set(response.data.user);
          this.saveUser(response.data.user);
        }
      })
    );
  }

  logout(): void {
    const token = this.getToken();
    if (token) {
      this.http.post(`${this.apiBase}/auth/logout`, {}).subscribe({
        next: () => this.clearSession(),
        error: () => this.clearSession(),
      });
    } else {
      this.clearSession();
    }
  }

  private clearSession(): void {
    this._user.set(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.router.navigate(['/login']);
  }
}
