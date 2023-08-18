import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent implements OnInit {
  // name!: string;
  // login!: string;
  // email!: string;
  // password!: string;

  constructor(private authServise: AuthService, private router: Router) {}

  declare registForm: FormGroup;

  ngOnInit(): void {
    this.registForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        ),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  signUp(form: FormGroup) {
    // const user = {
    //   name: this.name,
    //   login: this.login,
    //   email: this.email,
    //   password: this.password,
    // };

    // if (!user.name) {
    //   alert('Enter your name');
    //   return false;
    // } else if (!user.login) {
    //   alert('Enter you login');
    //   return false;
    // } else if (!user.email) {
    //   alert('Enter your email');
    //   return false;
    // } else if (!user.password) {
    //   alert('Enter your password');
    //   return false;
    // }

    // console.log(user);

    console.log(form.value);

    //   this.authServise.registerUser(user).subscribe((data) => {
    //     if (!data) {
    //       alert('This user already exists!');
    //       this.router.navigate(['/reg']);
    //     } else {
    //       this.router.navigate(['/auth']);
    //     }
    //   });
    //   return false;
  }
}
