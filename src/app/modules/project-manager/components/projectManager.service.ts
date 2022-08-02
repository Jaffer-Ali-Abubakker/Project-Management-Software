import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { HotToastService } from '@ngneat/hot-toast';

import { projectData,getprojectData } from "./project-data.model";

@Injectable({
  providedIn: 'root'
})
export class projectDataService {

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
     return this.http.get<getprojectData[]>('http://localhost:3000/api/home')
  }
}



