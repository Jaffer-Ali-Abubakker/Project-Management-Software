import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator,FormBuilder, Validators } from "@angular/forms";
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.scss']
})
export class UploadProjectComponent implements OnInit {
  public UploadProject! : FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private DeveloperService: DeveloperService,

  ) { }

  ngOnInit(): void {
    this.UploadProject = this.formBuilder.group({
      projectTitle:['',[Validators.required]],
      projectName:['',[Validators.required]],
      comments:[''],
      GitRepo:['',[Validators.required]]


    })
  }
  uploadproject(){
     console.log(this.UploadProject.value);
     if(this.UploadProject.invalid){
      return
     }
     this.DeveloperService.uploadProject(
      this.UploadProject.value.projectTitle,
      this.UploadProject.value.projectName,
      this.UploadProject.value.comments,
      this.UploadProject.value.GitRepo,)
     
  }

}
