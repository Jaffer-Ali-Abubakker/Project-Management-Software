import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { ProjectManagerDashboardComponent } from './components/project-manager-dashboard/project-manager-dashboard.component';


@NgModule({
  declarations: [
    ProjectManagerDashboardComponent
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule
  ]
})
export class ProjectManagerModule { }
