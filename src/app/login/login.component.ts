import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();
  
  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private messageService: MessageService){}

  ngOnInit(): void {
    
  }

  onLogin() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response);
      this.router.navigateByUrl('/dashboard');
    },
    error => {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Bad credentials'});
    })
  }
  

}
