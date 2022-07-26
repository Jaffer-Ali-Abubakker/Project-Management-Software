import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData,AuthDataLogin } from './auth-data.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: unknown;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router:Router) { }
  

  getToken(){
    return this.token
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  createUser(FullName: string,email: string, mobile: number, password: string ){
    const authData: AuthData = {FullName: FullName, email: email, mobile: mobile, password: password}
     this.http.post("http://localhost:3000/api/user/register", authData)
     .subscribe(response =>{
      console.log(response);
      this.router.navigate(['/'])
      
     })
  }
  login(email: string, password: string){
    const authDataLogin: AuthDataLogin = {email: email,  password: password}
    this.http.post<{token: string}>("http://localhost:3000/api/user/login", authDataLogin)
    .subscribe(response =>{
      console.log(response);
      const token = response.token
      this.token = token;
      if(token){
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(['/landing-page'])
      }

    })
  }
}
