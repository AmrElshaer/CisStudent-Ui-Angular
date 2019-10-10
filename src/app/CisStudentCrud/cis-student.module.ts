import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCisStudentComponent } from './create-cis-student/create-cis-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { StudentSercies } from '../Student.Services';
import { Customemailvalidators } from './CustomEmailValidation';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { RegisterationComponent } from './registeration/registeration.component';


@NgModule({
  declarations: [CreateCisStudentComponent, EditAccountComponent, RegisterationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,


  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentSercies,Customemailvalidators]
})
export class CisStudentModule { }
