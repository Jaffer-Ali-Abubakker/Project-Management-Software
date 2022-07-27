import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from '../auth.service';
import { faGoogle, faFacebook  } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faGoogle =faGoogle;
  faFacebook = faFacebook;

public loginForm! : FormGroup
isLoading = false;

  constructor(private formBuilder: FormBuilder, public authService: AuthService) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
     }) 
  }

  UserSubmit(){
    if(this.loginForm.invalid){
      return
    }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
