import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PortfolioDetailsComponent } from './dashboard/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { TradesComponent } from './dashboard/trades/trades.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, 
    canActivate: [IsAuthenticatedGuard], 
    children: [
      {path: 'portfolio', component: PortfolioComponent}, 
      {path: 'portfolio/:id', component: PortfolioDetailsComponent}, 
      {path: 'trades', component: TradesComponent}, 
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
