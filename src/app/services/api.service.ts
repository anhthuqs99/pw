import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(protected http: HttpClient) { }

  // GET request
  get(endpoint: string, options?: any) {
    return this.http.get(`${this.baseUrl}/${endpoint}`, options);
  }

  // POST request
  post(endpoint: string, body: any, options?: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, options);
  }

  // PUT request
  put(endpoint: string, body: any, options?: any) {
    return this.http.put(`${this.baseUrl}/${endpoint}`, body, options);
  }

  // DELETE request
  delete(endpoint: string, options?: any) {
    return this.http.delete(`${this.baseUrl}/${endpoint}`, options);
  }

  // PATCH request
  patch(endpoint: string, body: any, options?: any) {
    return this.http.patch(`${this.baseUrl}/${endpoint}`, body, options);
  }
}
