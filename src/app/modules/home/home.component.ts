import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private homeService: HomeService) {
    this.initData();
  }

  private initData() {
    this.homeService.getPosts().subscribe((data) => {
      console.log(data);
    });
  }
}
