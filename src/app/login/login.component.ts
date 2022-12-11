import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginObj: any = {
    email: "",
    password: ""
  };

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onLogin() {
    console.log(this.loginObj.email)
    console.log(this.loginObj.password)
  }
  

}
