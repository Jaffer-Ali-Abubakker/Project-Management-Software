import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";
import { AuthService } from '../auth.service';


export function passwordsMatchValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null =>{
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
  public RegisterForm! : FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {

    this.RegisterForm = this.formBuilder.group({
      FullName:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      mobile:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]

    });

}
onRegister(){
   if(this.RegisterForm.invalid){
    return;
   }
   this.authService.createUser(
    this.RegisterForm.value.FullName, 
    this.RegisterForm.value.email, 
    this.RegisterForm.value.mobile, 
    this.RegisterForm.value.password)
   }

}