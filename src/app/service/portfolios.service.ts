import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../interface/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly API_URL: string = "http://localhost:8081/api/portfolio";

  constructor(private http: HttpClient) { }

  //Fetch portfolios

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${this.API_URL}/user/${localStorage.getItem('user_id')}`);
  }

  createPortfolio(postData: any){
    return this.http.post(`${this.API_URL}/create`, postData)
  }

  deletePortfolio(portfolioId: number){
    return this.http.delete(`${this.API_URL}/${portfolioId}`); 
  }
}
