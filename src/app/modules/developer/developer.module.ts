import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';


@NgModule({
  declarations: [
    DeveloperDashboardComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
