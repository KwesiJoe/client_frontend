import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly API_URL: string = "http://localhost:8081/api/order";

  constructor(private http: HttpClient) { }

  //Create order
  createOrder(postData: any){
    return this.http.post(`${this.API_URL}/create`, postData)
  }
}

