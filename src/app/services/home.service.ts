import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService: ApiService) {}

  public getPosts(): Observable<Post[]> {
    return this.apiService.get('posts');
  }
}
