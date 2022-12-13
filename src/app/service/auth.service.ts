import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private readonly API_URL: string = `https://tarin-auth.azurewebsites.net/api/auth`;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('user_token');
    this._isLoggedIn$.next(!!token);
   }

  signUp(postData: any){
    return this.http.post(`${this.API_URL}/signup`, postData);
  }

  login(postData: any){
    return this.http.post(`${this.API_URL}/signin`, postData).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('user_token', response.token)
        localStorage.setItem('firstName', response.firstName)
        localStorage.setItem('lastName', response.lastName)
        localStorage.setItem('user_id', response.id)
        localStorage.setItem('role', response.roles[0])
      })
    );
  }
}
