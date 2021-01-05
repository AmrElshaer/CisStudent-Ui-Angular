import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { HomeRoutingModule } from './home/home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user/user.routing.module';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './common/components/error/error.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { ProfileDetailsComponent } from './common/components/profile/profile-details/profile-details.component';
import { HeaderComponent } from './common/components/header/header.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
@NgModule({
  declarations: [RegisterUserComponent, LoginUserComponent, HomeComponent, ErrorComponent, CreateProfileComponent, ProfileDetailsComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [UserRoutingModule, HomeRoutingModule, ProfileRoutingModule,HeaderComponent]
})
export class PresentationModule { }
