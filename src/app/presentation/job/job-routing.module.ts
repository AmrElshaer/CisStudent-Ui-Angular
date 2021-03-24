import { AdminLayoutComponent } from './../Layouts/admin-layout/admin-layout.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
const routes: Routes = [{path:'',component:AdminLayoutComponent,children:[
{path: 'Job/Create', component: CreateJobComponent},
{path: 'Job/All', component: AllJobsComponent},
{path: 'Job/Edit/:id', component: CreateJobComponent},
{path: 'Job/Delete/:id', component: JobDetailsComponent}
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
