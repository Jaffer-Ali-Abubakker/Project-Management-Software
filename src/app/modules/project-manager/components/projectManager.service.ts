import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, Observable, Subject } from "rxjs";
import { HotToastService } from '@ngneat/hot-toast';

import { getprojectData, projectData} from "./project-data.model";
import { AuthData } from "../../../auth/auth-data.model";


@Injectable({
  providedIn: 'root'
})
export class projectDataService {
  private _url:string = 'http://localhost:3000/api/project-Manager/home';
  private user_url: string = 'http://localhost:3000/api/project-Manager/alluser';



  constructor(private http: HttpClient, private router: Router, private toast: HotToastService) { }

  createProject(projectTitle: string,
    projectName: string,
    projectType: string,
    created: string,
    deadLine: string,
    features: string,
    Developer: string,
    submitter: string,){
    const ProjectData: projectData ={
      projectTitle: projectTitle,
      projectName:projectName,
      projectType:projectType,
      created:created,
      deadLine:deadLine,
      features:features,
      Developer: Developer,
      submitter: submitter}
      this.http.post('http://localhost:3000/api/project-Manager/create-project',ProjectData)
      .pipe(this.toast.observe({
        success:'Project Created',
        loading: 'Logging in....',
        error: 'There was an error'
      }))
      .subscribe(response =>{
        console.log(response);
      })
  }
  getProject(): Observable<getprojectData[]>{
     return this.http.get<getprojectData[]>(this._url)
     .pipe(map(response => response))
  }
  getUser(): Observable<AuthData[]>{
     return this.http.get<AuthData[]>(this.user_url)
     .pipe(map(response => response))
  }
}



