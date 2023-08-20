import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public apiServise: ApiService, private router: Router) {}

  ngOnInit(): void {}

  LogoutUser() {
    this.apiServise.logout();
    alert('You are logged out!');
    this.router.navigate(['/auth']);
  }

  logout(event: Event) {
    event.preventDefault();
    this.apiServise.logout();
    this.router.navigate(['auth']);
  }
}
