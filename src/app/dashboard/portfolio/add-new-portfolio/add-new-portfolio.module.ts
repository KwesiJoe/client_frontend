import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewPortfolioComponent } from './add-new-portfolio.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    AddNewPortfolioComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ToastModule
  ],
  exports: [AddNewPortfolioComponent]
})
export class AddNewPortfolioModule { }
