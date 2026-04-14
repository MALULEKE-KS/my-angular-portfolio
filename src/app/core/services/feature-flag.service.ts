import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
  private readonly apiBase = '/api/v1';
  private readonly CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

  private flags = new Map<string, boolean>();
  private lastFetch = 0;

  private _loaded$ = new BehaviorSubject<boolean>(false);
  readonly loaded$ = this._loaded$.asObservable();

  constructor(private http: HttpClient) {
    this.loadFlags();
  }

  private loadFlags(): void {
    this.http
      .get<Record<string, boolean>>(`${this.apiBase}/features`)
      .subscribe({
        next: (data) => {
          Object.entries(data).forEach(([key, value]) => this.flags.set(key, value));
          this.lastFetch = Date.now();
          this._loaded$.next(true);
        },
        error: () => {
          this._loaded$.next(true);
        },
      });
  }

  isEnabled(flagName: string): boolean {
    if (Date.now() - this.lastFetch > this.CACHE_TTL_MS) {
      this.loadFlags();
    }
    return this.flags.get(flagName) ?? false;
  }
}
