import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { projectDataService } from "../../../project-manager/components/projectManager.service";
import { getprojectData } from "../dev-projectData.model";
import {MatDialog} from '@angular/material/dialog';
import { DevProjectDetailsComponent } from '../dev-project-details/dev-project-details.component';
@Component({
  selector: 'app-dev-home',
  templateUrl: './dev-home.component.html',
  styleUrls: ['./dev-home.component.scss']
})
export class DevHomeComponent implements OnInit {
  displayedColumns: string[] = ['projectTitle', 'projectName', 'projectType', 'created', 'Details'];
  project: getprojectData[]=[]
  dataSource: any

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;


  constructor(public projectService:projectDataService, private dialog : MatDialog ) { }

  ngOnInit(): void {
    this.GetProject();
  }
  GetProject(){
    this.projectService.getProject().subscribe(result =>{
      this.project = result;

      this.dataSource = new MatTableDataSource<getprojectData>(this.project)
      this.dataSource.paginator = this.paginator;
      this.dataSource.Sort = this.Sort;
    })
  }
  ProjectDetails(element: any){
    const dialog = this.dialog.open(DevProjectDetailsComponent,{
      width: '40%',
     data: element
    })
  }

}
