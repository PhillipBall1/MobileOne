import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitApplication(email: string, application: any): Observable<any> {
    const body = {
        email: email,
        applicationDetails: application
    };
    return this.http.post(`${this.apiUrl}submit-application`, body);
  }

  getMapsApiKey(): Observable<{ apiKey: string }> {
    return this.http.get<{ apiKey: string }>(`${this.apiUrl}maps-key`);
  }


}
