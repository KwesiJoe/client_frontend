import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent {

  signUpForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    password:  ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService){}

  ngOnInit(): void {
    
  }

  showT(){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'User registered successfully.'});
  }

  createUser(){
    console.log(this.signUpForm.value);
    this.authService.signUp(this.signUpForm.value).subscribe(response => {
      console.log(response)
      this.messageService.add({severity:'success', summary: 'Success', detail: 'User registered successfully. Proceed to login', sticky: true});
      this.signUpForm.reset();
    },
    error => {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong.'});
      console.log("An error occured")
    })
  }
}
