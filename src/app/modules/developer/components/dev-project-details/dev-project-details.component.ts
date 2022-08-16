import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dev-project-details',
  templateUrl: './dev-project-details.component.html',
  styleUrls: ['./dev-project-details.component.scss']
})
export class DevProjectDetailsComponent implements OnInit {
  project: any = []

  constructor( @Inject(MAT_DIALOG_DATA) public ProjectData: any) { }

  ngOnInit(): void {
    let result = this.ProjectData
    this.project.push(result)
    console.log(this.project);  
  }
}
