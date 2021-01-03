import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/guard/auth.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard]

})
export class HomeRoutingModule { }
