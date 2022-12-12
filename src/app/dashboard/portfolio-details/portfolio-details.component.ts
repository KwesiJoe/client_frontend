import { Component, OnInit } from '@angular/core';
import { PortfolioDetails } from 'src/app/interface/portfolio-details.interface';
import { PortfolioService } from 'src/app/service/portfolios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit{
  data = [1,4]
  portfolioOrders: PortfolioDetails[] = [];
  

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute){}

  ngOnInit(): void {
    let id = + this.route.snapshot.params['id']

    this.portfolioService.getOrdersByPortfoilio(id).subscribe(response => {
      console.log(response);
      console.log(id)
      this.portfolioOrders = response;
    })
  }

}
