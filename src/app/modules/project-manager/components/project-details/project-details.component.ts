import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
   projectData: any
   reciveData($event: any){
    this.projectData = ($event)
    console.log(this.projectData);
    
   }

  constructor() { }

  ngOnInit(): void {
  }

}
