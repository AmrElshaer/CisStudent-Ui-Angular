import { AdminLayoutComponent } from './../Layouts/admin-layout/admin-layout.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTrainingComponent } from './all-training/all-training.component';
import { CreateTrainingComponent } from './create-training/create-training.component';
const routes: Routes = [
  {path:'',component:AdminLayoutComponent,children:[
    {path: 'Training/Create', component: CreateTrainingComponent},
{path: 'Training/All', component: AllTrainingComponent},
{path: 'Training/Edit/:id', component: CreateTrainingComponent},
{path: 'Training/Delete/:id', component: TrainingDetailsComponent}
  ]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
