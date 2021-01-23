import { AllFollowersComponent } from './../all-followers/all-followers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';

const routes: Routes = [
  {path: 'Followers', component: AllFollowersComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowerRoutingModule { }
