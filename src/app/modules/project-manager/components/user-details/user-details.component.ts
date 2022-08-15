import { Component, OnInit, ViewChild } from '@angular/core';
import { projectDataService } from "../projectManager.service";
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthDataTable } from "../../../../auth/auth-data.model";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  displayedColumns: string[] = ['UserName','Email', 'mobile','position'];
  User: any[] = []
  dataSource : any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;

  constructor(private UserData: projectDataService) { }

  ngOnInit(): void {
    this.GetUser();
  }
  GetUser(){
    this.UserData.getUser()
    .subscribe(result =>{
    this.User = result;
     console.log(result);

     this.dataSource = new MatTableDataSource<AuthDataTable>(this.User);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.Sort;
      
    })
  }

}
