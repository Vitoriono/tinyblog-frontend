import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiServise: ApiService) {}
  declare posts: Array<IPost>;
  declare category: string;

  ngOnInit() {
    this.apiServise.getAllPost().subscribe(
      (posts) => ((this.posts = posts), console.log(posts)),
      (err: Error) => {},
      () => {
        for (let i = 0; i < this.posts.length; i++) {
          this.posts[i].text = this.posts[i].text.substring(0, 200);
        }
      }
    );
  }

  setCategory(category: string) {
    this.category = category;
  }
}
