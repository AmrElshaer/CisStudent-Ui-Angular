import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCisStudentComponent } from './create-cis-student/create-cis-student.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AuthoGurd } from '../AuthoGurd';


const routes: Routes = [{path:'Create',component:CreateCisStudentComponent},{path:'Edit/:Id',component:EditAccountComponent,canActivate:[AuthoGurd]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[AuthoGurd]
 
})
export class CisStudentRoutingModule { }