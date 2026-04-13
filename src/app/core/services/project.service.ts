import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/api.generated';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly apiBase = '/api/v1';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiBase}/projects`);
  }
}
