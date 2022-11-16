import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,

    ) { }

    registerUser(user: any) {
      const headers = new HttpHeaders()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/reg', user,
      {headers: headers}).pipe(map((res: any) => res.json()))
    }
}
