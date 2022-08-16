import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-sub-project-details',
  templateUrl: './sub-project-details.component.html',
  styleUrls: ['./sub-project-details.component.scss']
})
export class SubProjectDetailsComponent implements OnInit {

  project: any[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public ProjectData: any) { }

  ngOnInit(): void {
  let result = this.ProjectData
  this.project.push(result)
  console.log(this.project);
  
  }

}
