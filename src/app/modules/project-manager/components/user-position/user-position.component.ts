import { Component, OnInit, Input  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { projectDataService } from "../projectManager.service";
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  selector: 'app-user-position',
  templateUrl: './user-position.component.html',
  styleUrls: ['./user-position.component.scss']
})
export class UserPositionComponent implements OnInit {
  public Userassignform! : FormGroup
  public UserData: any[] = []
  @Input() childPost: any[] = []

  constructor(
    private formBuilder: FormBuilder, 
    private ProjectService: projectDataService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.Userassignform = this.formBuilder.group({
      position:['',[Validators.required]],
      userId:['']
    })

  }
  assignUser(){
    console.log(this.Userassignform.value);
    if(this.Userassignform.invalid){
      return
    }
    this.ProjectService.updateUserPosition(this.Userassignform.value.position, this.Userassignform.value.userId)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'; 
    this.router.navigate(['./'], {
      relativeTo: this.route
    })

    
  }


}