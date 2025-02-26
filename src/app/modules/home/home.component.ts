import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public posts: Post[] = [];
  constructor(private homeService: HomeService) {
    this.initData();
  }

  private initData() {
    this.homeService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }
}
