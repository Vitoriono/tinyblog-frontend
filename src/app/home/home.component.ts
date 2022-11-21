import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts = []


  constructor(
    private authServise: AuthService
  ) { }

  ngOnInit(): void {
    this.authServise.getAllPost().subscribe( (posts: any ) =>
      this.posts = posts,

      (err: Error) => {},

      () => {
        for (let i = 0; i < this.posts.length; i++) {

          this.posts[i].text  = this.posts[i].text.substring(0, 250)
        }
      }
    )
  }

}
