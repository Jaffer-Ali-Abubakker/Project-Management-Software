import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubmitterService {

  constructor(private http: HttpClient) { }

  ReportBug(projectTitle: string,projectName: string,projectType: string,noOfBugs:number){
   
  }

}
