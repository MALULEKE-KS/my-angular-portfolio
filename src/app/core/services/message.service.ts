import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, SendMessageRequest } from '../models/api.generated';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private readonly apiBase = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  sendMessage(request: SendMessageRequest): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiBase}/messages`, request);
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiBase}/messages`);
  }
}
