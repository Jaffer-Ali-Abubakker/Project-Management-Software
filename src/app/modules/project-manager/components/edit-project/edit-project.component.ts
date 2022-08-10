
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { projectDataService } from '../projectManager.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  public projectForm!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public UpdateData: any,
    public ProjectService: projectDataService,
    public DialogRef: MatDialogRef<EditProjectComponent>,
    public toast:HotToastService
  ) {}

  ngOnInit(): void {
    this.projectForm = this.FormBuilder.group({
      projectTitle: ['', Validators.required],
      projectName: ['', Validators.required],
      projectType: ['', Validators.required],
      created: ['', Validators.required],
      deadLine: ['', Validators.required],
      features: ['', Validators.required],
      Developer: ['', Validators.required],
      submitter: ['', Validators.required],
    });
    if (this.UpdateData) {
      this.projectForm.controls['projectTitle'].setValue(this.UpdateData.projectTitle);
      this.projectForm.controls['projectName'].setValue(this.UpdateData.projectName);
      this.projectForm.controls['projectType'].setValue(this.UpdateData.projectType);
      this.projectForm.controls['created'].setValue(this.UpdateData.created);
      this.projectForm.controls['deadLine'].setValue(this.UpdateData.deadLine);
      this.projectForm.controls['features'].setValue(this.UpdateData.features);
      this.projectForm.controls['Developer'].setValue(this.UpdateData.Developer);
      this.projectForm.controls['submitter'].setValue(this.UpdateData.submitter);
    }
  }
  UpdateProject() {
    this.ProjectService.getprojectupdate(
      this.projectForm.value,
      this.UpdateData._id
    ).pipe(this.toast.observe({
      success:'Project Updated',
      loading: 'Logging in....',
      error: 'There was an error'
    }))
    .subscribe({
      next: (res) => {
        this.projectForm.reset();
        this.DialogRef.close('update')
      },
    });
  }
}
