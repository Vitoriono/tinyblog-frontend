import { HttpClient, HttpHeaders  } from '@angular/common/http';
import  {Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;


  constructor(
    // private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router
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

    // isAuthenticated(){
    //   const token = localStorage.getItem("jwt");
    //   if (token && !this.jwtHelper.isTokenExpired(token)) {
    //     return true;
    //   }
    //   return false;

    // }

    isAuthenticated(){
      return !!this.token;
    }

}
