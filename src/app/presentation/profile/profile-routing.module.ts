import { AdminLayoutComponent } from './../Layouts/admin-layout/admin-layout.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:AdminLayoutComponent,children:[
    {path: 'Profile', component: CreateProfileComponent},
    {path:'StudentProfile/:id',component:StudentProfileComponent}

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
