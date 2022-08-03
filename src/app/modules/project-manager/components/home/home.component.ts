import { Component, OnInit, ViewChild} from '@angular/core';
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { catchError, map, throwError } from 'rxjs';
import { getprojectData } from "../project-data.model";
import { projectDataService } from "../projectManager.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  project: getprojectData[] = []

  faProjectDiagram = faProjectDiagram;
 

  constructor(public projectService: projectDataService) {}

  ngOnInit(): void {
    this.projectService.getProject()    
    .subscribe(data => this.project = data)
  }
  
}


