import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Portfolio } from 'src/app/interface/portfolio.interface';
import { PortfolioService } from 'src/app/service/portfolios.service'
import { OrderService } from 'src/app/service/order.service'
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent {

  products = ["AAPL", "IBM", "NFLX", "GOOGL", "MSFT", "TSLA", "ORCL", "AMZN"];

  username = localStorage.getItem('firstName');

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
    price: [0],
    side: ["", Validators.required],
    type: ["", Validators.required],
    portfolioId: [0, Validators.required],
    userId: [0]

  })

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService, private orderService: OrderService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getPortfolioList();
    console.log(this.portfolios)
  }

  createOrder(){
    this.orderForm.value.userId = Number(localStorage.getItem('user_id'))
    this.orderForm.value.portfolioId = Number(this.orderForm.value.portfolioId)
    console.log(this.orderForm.value);
    this.orderService.createOrder(this.orderForm.value).subscribe(response => {
      console.log(response)
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Trade executed!'})
      this.orderForm.reset();
    },
    error => {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Could not execute trade. Try again'});
    })
  }
}

