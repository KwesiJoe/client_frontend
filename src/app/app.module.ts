import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { TradesComponent } from './dashboard/trades/trades.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FormsModule } from '@angular/forms';
import { AddNewPortfolioModule } from './dashboard/portfolio/add-new-portfolio/add-new-portfolio.module';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PortfolioComponent,
    TradesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    AddNewPortfolioModule,
    ToastModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
