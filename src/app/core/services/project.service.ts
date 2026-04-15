import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/api.generated';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly apiBase = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiBase}/projects`);
  }
}
