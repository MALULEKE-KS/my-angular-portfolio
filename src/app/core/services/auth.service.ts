import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/api.generated';

interface User {
  id: string;
  email: string;
  name?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiBase = '/api/v1';
  private _user: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return this._user !== null;
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiBase}/auth/login`, { email, password } as LoginRequest).pipe(
      tap((response) => {
        if (response.success && response.data?.user) {
          this._user = response.data.user;
        }
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiBase}/auth/logout`, {}).subscribe({
      next: () => {
        this._user = null;
        this.router.navigate(['/login']);
      },
    });
  }
}
