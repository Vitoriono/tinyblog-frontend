import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {


  name!: string;
  login!: string;
  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    }

    if(!user.name ){
      alert('Enter your name');
      return false
    } else if (!user.login) {
      alert('Enter you login');
      return false
    } else if (!user.email) {
      alert('Enter your email')
    } else if (!user.password) {
      alert('Enter your password');
      return false
    }



    console.log(user);
    return false;
  }

}
