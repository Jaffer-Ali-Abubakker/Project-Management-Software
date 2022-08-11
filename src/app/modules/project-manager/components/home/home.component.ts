import { Component, OnInit, ViewChild} from '@angular/core';
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { getprojectData } from "../project-data.model";
import { projectDataService } from "../projectManager.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { ProjectDetailsComponent } from "../project-details/project-details.component";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['projectTitle', 'projectName', 'projectType', 'created', 'Details','Edit'];
  dataSource : any
  project: getprojectData[] = [];


  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;


  faProjectDiagram = faProjectDiagram;
 

  constructor(public projectService: projectDataService, private dialog : MatDialog) {}


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

  UpdateProject(element: any) {
    console.log(element);
    const dialogRef = this.dialog.open(EditProjectComponent,{
      width: '50%',
      data:element
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.GetProject();
      }
    })

  }
  ProjectDetails(element: any){
    const dialogRef = this.dialog.open(ProjectDetailsComponent,{
      width: '40%',
      data:element
    })
  }
}


