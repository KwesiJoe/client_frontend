import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupObj: any = {
    fullName: "",
    email: "",
    password:  "",
    rptPassword: ""
  };

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onSignup(){
    console.log(this.signupObj)

  }
}
