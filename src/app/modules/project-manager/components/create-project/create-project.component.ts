import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { projectDataService } from "../projectManager.service";


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectCreated = new FormGroup({
    projectTitle: new FormControl('',Validators.required),
    projectName: new FormControl('', Validators.required),
    projectType: new FormControl('',Validators.required),
    created: new FormControl('',Validators.required),
    deadLine:new FormControl('',Validators.required),
    features: new FormControl('',Validators.required),
    Developer: new FormControl('',Validators.required),
    submitter: new FormControl('',Validators.required)
  })

  constructor(public ProjectService: projectDataService) { }

  ngOnInit(): void {
  }

  get projectTitle(){
    return this.projectCreated.get('projectTitle')
  }
  get projectName(){
    return this.projectCreated.get('projectName')
  }
  get projectType(){
    return this.projectCreated.get('projectType')
  }
  get created(){
    return this.projectCreated.get('created')
  }
  get deadLine(){
    return this.projectCreated.get('deadLine')
  }
  get features(){
    return this.projectCreated.get('features')
  }
  get Developer(){
    return this.projectCreated.get('Developer')
  }
  get submitter(){
    return this.projectCreated.get('submitter')
  }

  createProject(){
    console.log(this.projectCreated.value);
   if(this.projectCreated.invalid){
     return;
   }
   const {projectTitle,projectName,projectType,created,deadLine,features,Developer,submitter}: any = this.projectCreated.value;
   this.ProjectService.createProject(projectTitle,projectName,projectType,created,deadLine,features,Developer,submitter);
  }

}
