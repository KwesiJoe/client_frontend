import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Portfolio } from 'src/app/interface/portfolio.interface';
import { PortfolioService } from 'src/app/service/portfolios.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  portfolios: Portfolio[] = [];
  displayAddModal: boolean = false;
  
  constructor(private portfolioService: PortfolioService, private confirmationService: ConfirmationService, private messageService: MessageService) {}
  
  ngOnInit(){
    this.getPortfolioList();
  }

  getPortfolioList(){
    this.portfolioService.getPortfolios().subscribe(data => {
      console.log(data)
      this.portfolios = data
    })
  }
  
  showAddModal() {
    this.displayAddModal = true;
  }
  
  hideAddModal(isClosed: boolean){
    this.displayAddModal = !isClosed; 
  }

  savePortfolioToList(newData: any) {
  this.portfolios.unshift(newData);
  this.getPortfolioList();
  }

  deletePortfolio(portfolio: Portfolio){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this portfolio?',
      accept: () => {
          this.portfolioService.deletePortfolio(portfolio.id).subscribe(response => {
            this.getPortfolioList();
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Portfolio deleted successfully.'})
          },
          error => {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong.'});
            console.log("An error occured")
          })
      }
  });
  }
}
