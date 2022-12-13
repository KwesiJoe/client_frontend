import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from '../interface/trade.interface';

@Injectable({
  providedIn: 'root'
})
export class TradesService {
  private readonly API_URL: string = `${process.env.OPS_API_URL}/api/order`;

  constructor(private http: HttpClient) { }

  //Fetch trades

  getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.API_URL}/portfolios/${localStorage.getItem('user_id')}`);
  }
}

