import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(protected http: HttpClient) { }

  // GET request
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  // POST request
  post<T>(endpoint: string, body: any, options?: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, options);
  }

  // PUT request
  put<T>(endpoint: string, body: any, options?: any) {
    return this.http.put(`${this.baseUrl}/${endpoint}`, body, options);
  }

  // DELETE request
  delete<T>(endpoint: string, options?: any) {
    return this.http.delete(`${this.baseUrl}/${endpoint}`, options);
  }

  // PATCH request
  patch<T>(endpoint: string, body: any, options?: any) {
    return this.http.patch(`${this.baseUrl}/${endpoint}`, body, options);
  }
}
