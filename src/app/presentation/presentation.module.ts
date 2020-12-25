import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user/user.routing.module';
import { HomeComponent } from './home/home/home.component';



@NgModule({
  declarations: [RegisterUserComponent, LoginUserComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [UserRoutingModule]
})
export class PresentationModule { }
