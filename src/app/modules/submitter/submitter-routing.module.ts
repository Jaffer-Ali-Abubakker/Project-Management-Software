import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubHomeComponent } from './components/sub-home/sub-home.component';
import { SubmitterDashboardComponent } from './components/submitter-dashboard/submitter-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SubmitterDashboardComponent,
    children: [
      { path: 'home', component: SubHomeComponent },
      { path: '', redirectTo: '/submitter/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitterRoutingModule {}
