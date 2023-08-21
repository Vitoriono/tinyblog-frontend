import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private apiServise: ApiService, private router: Router) {}
  declare postForm: FormGroup;

  ngOnInit(): void {
    this.postForm = new FormGroup({
      category: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
    });
  }

  createPost(post: FormGroup) {
    const author = JSON.parse(localStorage.getItem('user') || '{}').login;

    this.apiServise
      .registerPost({ ...post.value, author: author })
      .subscribe((data) => {
        if (!data) {
          alert('Post creating fail!');
        } else {
          alert('You have successfully created post!');
          this.router.navigate(['/']);
        }
      });

    return false;
  }
}
