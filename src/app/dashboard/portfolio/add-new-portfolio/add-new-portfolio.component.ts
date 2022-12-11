import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/service/portfolios.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-new-portfolio',
  templateUrl: './add-new-portfolio.component.html',
  styleUrls: ['./add-new-portfolio.component.css']
})
export class AddNewPortfolioComponent implements OnInit{
  
  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();

  portfolioForm = this.fb.group({
    name: ["", Validators.required],
    balance: [0, Validators.required],
    value: [50],
    profit: [0],
    userId: [2]
  })
  
  constructor(private fb: FormBuilder, private portfolioService: PortfolioService, private messageService: MessageService){}


  ngOnInit(): void {
    
  }
  
  closeModal() {
    this.portfolioForm.reset();
    this.clickClose.emit(true);
  }
  
  addPortfolio() {
    this.portfolioForm.value.userId = 2
    console.log(this.portfolioForm.value);
    this.portfolioService.createPortfolio(this.portfolioForm.value).subscribe(response => {
      this.clickAdd.emit(response);
      this.closeModal();
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Portfolio created'});
    },
    error => {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong.'});
      console.log("An error occured")
    })
  }
  
}
