import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreatedUserData, Post, User, UserData } from '../models/user.model';
@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private apiService: ApiService) {}

	public getPosts(): Observable<Post[]> {
		return this.apiService.get('posts');
	}

	public async getUsers(parameters?: object): Promise<User[]> {
		return firstValueFrom(this.apiService.get('users', parameters));
	}

	public async createUser(userData: UserData): Promise<CreatedUserData> {
		return firstValueFrom(this.apiService.post('users', userData));
	}
}
