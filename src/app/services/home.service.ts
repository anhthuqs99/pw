import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Post, User } from '../models/post.model';
@Injectable({
	providedIn: 'root',
})
export class HomeService {
	constructor(private apiService: ApiService) {}

	public getPosts(): Observable<Post[]> {
		return this.apiService.get('posts');
	}

	public async getUsers(parameters?: string): Promise<User[]> {
		return firstValueFrom(this.apiService.get('users', parameters));
	}
}
