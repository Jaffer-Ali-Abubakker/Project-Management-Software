import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { SubmitterService } from "../submitter.service";
@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.component.html',
  styleUrls: ['./report-bug.component.scss']
})
export class ReportBugComponent implements OnInit {
 public BugSubmitForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private submitterService: SubmitterService ) { }

  ngOnInit(): void {
    this.BugSubmitForm = this.formBuilder.group({
      projectTitle:[''],
      projectName:[''],
      projectType:[''],
      noOfBugs:['']
    })
  }
  BugSubmit(){
     if(this.BugSubmitForm.invalid){
      return
     }
     this.submitterService.ReportBug(this.BugSubmitForm.value.projectTitle,
      this.BugSubmitForm.value.projectName,
      this.BugSubmitForm.value.projectType,
      this.BugSubmitForm.value.noOfBugs
      )
  }
}
