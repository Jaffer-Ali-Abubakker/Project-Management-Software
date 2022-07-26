import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitterRoutingModule } from './submitter-routing.module';
import { SubHomeComponent } from './components/sub-home/sub-home.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SubmitterDashboardComponent } from './components/submitter-dashboard/submitter-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SubProjectDetailsComponent } from './components/sub-project-details/sub-project-details.component';
import { ReportBugComponent } from './components/report-bug/report-bug.component';
import { ListBugComponent } from './components/list-bug/list-bug.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubHomeComponent,
    SubNavComponent,
    SubmitterDashboardComponent,
    SubProjectDetailsComponent,
    ReportBugComponent,
    ListBugComponent
  ],
  imports: [
    CommonModule,
    SubmitterRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class SubmitterModule { }
