import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevHomeComponent } from './components/dev-home/dev-home.component';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';

const routes: Routes = [
  {path: '', component: DeveloperDashboardComponent,
  
  children:[

    {path:'home', component: DevHomeComponent},
    {path:'',redirectTo:'/developer/home', pathMatch:'full'},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],   
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
