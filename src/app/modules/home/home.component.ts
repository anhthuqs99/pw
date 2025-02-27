import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';
import { Post, User } from '../../models/post.model';
import { Paging } from '../../logic/paging.logic';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public posts: Post[] = [];
  public users: User[] = [];
  private paging = new Paging(1, 3);
  constructor(private homeService: HomeService) {
    this.initData();
  }

  private async initData() {
    // this.homeService.getPosts().subscribe((data) => {
    //   this.posts = data;
    //   console.log(data);
    // });
    // this.homeService.getUsers(this.paging.getPagingParameters()).subscribe((data) => {
    //   this.users = data;

    // });
      await this.getUsers();
  }

  private async getUsers() {
    if (this.paging.getCanLoadMore()) {
      try {
        const usersData = await this.homeService.getUsers(this.paging.getPagingParameters());
        this.users.push(...usersData);
        this.paging.nextPage(usersData.length);
        await this.getUsers();
      } catch (error) {

        console.error(error);
      }
    }
  }
}
