import { Component, OnInit } from '@angular/core';
import { projectDataService } from "../projectManager.service";
import { getprojectData } from "../project-data.model";
import { map } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: any = []
 
  constructor(private ProjectService: projectDataService) { }

  ngOnInit(): void {
    this.ProjectService.projectDetails$
    .subscribe(data  => {this.project = data,
      console.log(data);
    })
  }

}

