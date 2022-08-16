import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { projectDataService } from 'src/app/modules/project-manager/components/projectManager.service';
import { getprojectData } from 'src/app/modules/project-manager/components/project-data.model';
import { SubProjectDetailsComponent } from '../sub-project-details/sub-project-details.component';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.scss']
})
export class SubHomeComponent implements OnInit {
  displayedColumns: string[] = ['projectTitle', 'projectName', 'projectType', 'created', 'Details'];
  project: getprojectData[]=[]
  dataSource: any


  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;


  constructor(public projectService:projectDataService, private dialog : MatDialog) { }

  ngOnInit(): void {
   this.GetProject()

  }

  GetProject(){
    this.projectService.getProject().subscribe(result =>{
      this.project = result


      this.dataSource = new MatTableDataSource<getprojectData>(this.project)
      this.dataSource.paginator = this.paginator;
      this.dataSource.Sort = this.Sort;
    })
  }
  ProjectDetails(element: any){
     const dialog = this.dialog.open(SubProjectDetailsComponent,{
      width:'40%',
      data: element
     })
  }

}
