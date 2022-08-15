import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator,FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from "../developer.service";

@Component({
  selector: 'app-project-works',
  templateUrl: './project-works.component.html',
  styleUrls: ['./project-works.component.scss']
})
export class ProjectWorksComponent implements OnInit {
 public UpdateProjectStatus! : FormGroup

  constructor(
    private FormBuilder: FormBuilder,
    private DeveloperService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.UpdateProjectStatus = this.FormBuilder.group({
      projectTitle:['',[Validators.required]],
      projectName:['',[Validators.required]],
      ProjectStatus:['',[Validators.required]]
    })
  }
  DeveloperSubmit(){
    console.log(this.UpdateProjectStatus.value);
     if(this.UpdateProjectStatus.invalid){
      return
     }
     this.DeveloperService.Updateproject(
      this.UpdateProjectStatus.value.projectTitle,
      this.UpdateProjectStatus.value.projectName,
      this.UpdateProjectStatus.value.ProjectStatus)
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload'; 
      this.router.navigate(['./'], {
        relativeTo: this.route
      })
  }

  
}
