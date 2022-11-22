import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router  } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: any;
  login: any;

  constructor(
    private authServise: AuthService,
    private router: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit() {
    if(this.authServise.isAuthenticated()) {
      this.login = JSON.parse(localStorage.getItem('user') || '{}').login
    }

    this.post$ = this.router.params
      .pipe(switchMap( (params : Params) => {
        return this.authServise.getPostById(params['id'])
      } ))
  }

  deletePost(id: any) {
    this.authServise.deletePost(id).subscribe(data => {
      if(!data.success) {
        alert("Post not deleted!");
       } else {
        alert("Post deleted!");
        this.rout.navigate(['/'])
      }
    })
  }

}
