import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, Subject } from "rxjs";
import { HotToastService } from '@ngneat/hot-toast';
import { updateprojectface } from "../components/dev-projectData.model";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private update_project_status: string = 'http://localhost:3000/api/developer/updateProjectStatus';

  constructor(private http: HttpClient, private toast: HotToastService) { }

  Updateproject(projectTitle: string,projectName: string,ProjectStatus: string){
     const updateprojects: updateprojectface ={
      projectTitle: projectTitle,
      projectName: projectName,
      ProjectStatus: ProjectStatus}
     console.log(updateprojects);
     this.http.post("http://localhost:3000/api/developer/updateProjectStatus", updateprojects)
     .subscribe(res =>{
        console.log(res);
        
     })
  }
}
