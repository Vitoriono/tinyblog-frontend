import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post$: any;
  login: any;

  constructor(
    private apiServise: ApiService,
    private router: ActivatedRoute,
    private rout: Router
  ) {}

  ngOnInit() {
    if (this.apiServise.isAuthenticated()) {
      this.login = JSON.parse(localStorage.getItem('user') || '{}').login;
    }

    this.post$ = this.router.params.pipe(
      switchMap((params: Params) => {
        return this.apiServise.getPostById(params['id']);
      })
    );
  }

  deletePost(id: number) {
    this.apiServise.deletePost(id).subscribe((data) => {
      if (!data) {
        alert('Post not deleted!');
      } else {
        alert('Post deleted!');
        this.rout.navigate(['/']);
      }
    });
  }
}
