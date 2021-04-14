import { LoginUserComponent } from './login-user/login-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/guard/auth.guard';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path: 'signUp', component: RegisterUserComponent}
, {path: 'signIn', component: LoginUserComponent}
, {path: 'confirmEmail', component: EmailConfirmationComponent},
{path:'ResetPassword',component:ResetPasswordComponent},
{path:'ChangePassword',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard]

})
export class UserRoutingModule { }
