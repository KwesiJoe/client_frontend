import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  signUp(postData: any){
    return this.http.post(`${this.API_URL}/signup`, postData)
  }
}
