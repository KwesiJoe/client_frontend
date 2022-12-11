import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Portfolio } from 'src/app/interface/portfolio.interface';
import { PortfolioService } from 'src/app/service/portfolios.service'
import { OrderService } from 'src/app/service/order.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  portfolios: Portfolio[] = [];

  getPortfolioList(){
    this.portfolioService.getPortfolios().subscribe(data => {
      console.log(data)
      this.portfolios = data
    })
  }

  orderForm = this.fb.group({
    product: ["", Validators.required],
    quantity: [0, Validators.required],
    price: [50],
    side: ["", Validators.required],
    type: ["", Validators.required],
    pftId: [0, Validators.required]
  })

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService, private orderService: OrderService){}

  ngOnInit(): void {
    this.getPortfolioList();
    console.log(this.portfolios)
  }

  createOrder(){
    console.log(this.orderForm.value);
    this.orderService.createOrder(this.orderForm.value).subscribe(response => {
      console.log(response)
    })
  }
}
