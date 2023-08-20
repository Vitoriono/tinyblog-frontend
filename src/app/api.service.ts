import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { IPayload, IPost, IUserAuth, IUserRegist } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  declare errorMessage: string;
  declare token: string | null;
  declare payload: IUserRegist | null;

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(userRegist: IUserRegist): Observable<IUserRegist> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post<IUserRegist>('http://localhost:3000/account/reg', userRegist, {
        headers: headers,
      })
      .pipe(
        map((res) => res),

        catchError((err) => {
          alert(err.error.message);
          this.errorMessage = err.message;
          return [];
        })
      );
  }

  authUser(userAuth: IUserAuth): Observable<IPayload> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post<IPayload>('http://localhost:3000/account/login', userAuth, {
        headers: headers,
      })
      .pipe(
        map((res) => res),

        catchError((err) => {
          alert(err.error.message);
          this.errorMessage = err.message;
          return [];
        })
      );
  }

  storeUser(token: string, payload: IUserRegist) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(payload));

    this.token = token;
    this.payload = payload;
  }

  logout() {
    this.token = null;
    this.payload = null;
    localStorage.clear();
  }

  isAuthenticated() {
    return !!this.token;
  }

  registerPost(post: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post<any>('http://localhost:3000/account/dashboard', post, {
        headers: headers,
      })
      .pipe(map((res: any) => res));
  }

  getAllPost(): Observable<Array<IPost>> {
    return this.http
      .get<Array<IPost>>('http://localhost:3000/account')
      .pipe(map((res) => res));
  }

  getPostById(id: number): Observable<IPost> {
    return this.http
      .get<IPost>(`http://localhost:3000/account/${id}`)
      .pipe(map((res: any) => res));
  }

  deletePost(id: number): Observable<boolean> {
    return this.http
      .delete<boolean>(`http://localhost:3000/account/${id}`)
      .pipe(map((res: any) => res));
  }
}
