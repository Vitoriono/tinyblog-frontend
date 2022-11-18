import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// import { DbResponse } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;


  constructor(
    private http: HttpClient,

    ) { }

    registerUser(user: any) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/reg', user,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    authUser(user: any ) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/auth', user,
      {headers: headers}).pipe(map((res: any)  => res) )
    }

    storeUser(token: any, user: any){
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      this.token = token
      this.user = user
    }

    logout() {
      this.token = null;
      this.user = null
      localStorage.clear()

    }
}
