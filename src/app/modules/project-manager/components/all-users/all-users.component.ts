import { Component, OnInit, ViewChild } from '@angular/core';
import { projectDataService } from "../projectManager.service";
import { AuthData } from "../../../../auth/auth-data.model";
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  displayedColumns: string[] = ['UserName', 'Email','Add'];
  dataSource : any;
  User: AuthData[] = []
  parentPost: any[] = []
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;


  constructor(public projectService: projectDataService) { }

  ngOnInit(): void {
    this.GetUser();
  }

  GetUser(){
    this.projectService.getUser()
    .subscribe(result =>{
      this.User = result;
      console.log(result);

      this.dataSource = new MatTableDataSource<AuthData>(this.User);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.Sort;
    })
  }

   AssignPosition(data: any){
      this.parentPost.push(data)
      
   }
}
