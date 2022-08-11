import { Component, Inject, OnInit } from '@angular/core';
import { projectDataService } from "../projectManager.service";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: any = []
 
  constructor(private ProjectService: projectDataService,
    @Inject(MAT_DIALOG_DATA) public ProjectData: any) { }

  ngOnInit(): void {
     let result = this.ProjectData
     console.log(result);
     
  }

}

