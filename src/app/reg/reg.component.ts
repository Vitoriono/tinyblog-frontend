import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

document.getElementById;

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent implements OnInit {
  constructor(private apiServise: ApiService, private router: Router) {}

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
    this.apiServise.registerUser(form.value).subscribe((data) => {
      console.log(form);
      if (!data) {
        alert('This user already exists!');
        this.router.navigate(['/reg']);
      } else {
        this.router.navigate(['/auth']);
      }
    });
    return false;
  }
}
