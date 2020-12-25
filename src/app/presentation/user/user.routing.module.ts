import { LoginUserComponent } from './login-user/login-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/guard/auth.guard';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: 'signUp', component: RegisterUserComponent}
, {path: 'signIn', component: LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard]

})
export class UserRoutingModule { }
