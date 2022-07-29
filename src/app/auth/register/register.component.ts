import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Validation  from "src/app/auth/utils/validation";

export function passwordsMatchValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordsDontMatch: true
      }
      
    }

    return null;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  RegisterForm = new FormGroup({
    FullName: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.maxLength(4)]),
    confirmPassword:new FormControl('',Validators.required)

  },
  {validators: passwordsMatchValidator()}
  );


  constructor( public authService: AuthService) { }

  ngOnInit(): void {}

get FullName(){
  return this.RegisterForm.get('FullName')
}
get email(){
  return this.RegisterForm.get('email')
}
get mobile(){
  return this.RegisterForm.get('mobile')
}
get password(){
  return this.RegisterForm.get('password')
}
get confirmPassword(){
  return this.RegisterForm.get('confirmPassword')
}

onRegister(){
   if(this.RegisterForm.invalid){
    return;
   }
   const {FullName, email, mobile, password}: any = this.RegisterForm.value;
   this.authService.createUser(FullName, email, mobile, password);
   
   }
}