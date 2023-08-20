import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private apiServise: ApiService, private router: Router) {}
  declare loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  signIn(form: FormGroup) {
    this.apiServise.authUser(form.value).subscribe((data) => {
      if (!data) {
        alert('Data not exist');
      } else {
        alert('You have successfully logged in!');
        this.router.navigate(['/dashboard']);
        this.apiServise.storeUser(data.token, data.payload);
      }
    });
    return false;
  }
}
