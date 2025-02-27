import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ApiResponse<T> {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: T;
}
@Injectable({
	providedIn: 'root',
})
export class ApiService {
	// Testing API, more info: https://reqres.in/
	private baseUrl = 'https://reqres.in/api';

	constructor(protected http: HttpClient) {}

	// GET request
	get<T>(endpoint: string, options?: object): Observable<T> {
		let response = this.http.get<ApiResponse<T>>(
			`${this.baseUrl}/${endpoint}`,
			options
		);
		return new Observable<T>((observer) => {
			response.subscribe((data: ApiResponse<T>) => {
				observer.next(data.data);
				observer.complete();
			});
		});
	}

	// POST request
	post<T>(endpoint: string, body: any, options?: any): Observable<any> {
		return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, options);
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
