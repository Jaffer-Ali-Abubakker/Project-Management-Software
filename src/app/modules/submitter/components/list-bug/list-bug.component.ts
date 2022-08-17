import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";



@Component({
  selector: 'app-list-bug',
  templateUrl: './list-bug.component.html',
  styleUrls: ['./list-bug.component.scss']
})
export class ListBugComponent implements OnInit {
  public BugListForm!: FormGroup
  BugList: any[] = []
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.BugListForm = this.formBuilder.group({
      BugTitle:[''],
      BugDetail:['']
    })
  }
  BulistSubmit(){
   this.BugList = this.BugListForm.value;
   
  }
}
