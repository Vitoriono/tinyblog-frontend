import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authServise: AuthService, private router: Router) {}
  declare loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl(null, [Validators.required]),
    });
  }

  signIn(form: FormGroup) {
    this.authServise.authUser(form.value).subscribe((data) => {
      if (!data) {
        alert('Data not exist');
      } else {
        alert('You have successfully logged in!');
        this.router.navigate(['/dashboard']);
        this.authServise.storeUser(data.token, data.payload);
      }
    });
    return false;
  }
}
