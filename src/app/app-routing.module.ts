import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { CisStudentRoutingModule } from './CisStudentCrud/cis-student.routing';
import { StudentPageComponent } from './student-page/student-page.component';
import { AuthoGurd } from './AuthoGurd';
import { RegisterationComponent } from './CisStudentCrud/registeration/registeration.component';
import { ProfileComponent } from './profile/profile.component';
import { CisStudentPostsComponent } from './cis-student-posts/cis-student-posts.component';
import { CommentServces } from './CommentServse';
import { PublicPostComponent } from './public-post/public-post.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { PrivatePostsComponent } from './private-posts/private-posts.component';
import { TrainingComponent } from './training/training.component';
import { JobsComponent } from './jobs/jobs.component';
const routes: Routes = [{path:'',redirectTo:'Register',pathMatch:'full'},{path:'Jobs/:Id',component:JobsComponent},{path:'Training/:Id',component:TrainingComponent},{path:'PrivatePosts/:Id',component:PrivatePostsComponent},{path:'AllFrieds/:Id',component:AllFriendsComponent},{path:'HomePage/:Id/:AsVisited/:currentstudent',component:StudentPageComponent,canActivate:[AuthoGurd]},{path:'Publicpost/:Id',component:PublicPostComponent},{path:'AddPosts/:Id',component:CisStudentPostsComponent},{path:'Updateprofile/:Id',component:ProfileComponent},{path:'AddProfile/:Id',component:ProfileComponent},{path:'HomePage/:Id',component:StudentPageComponent,canActivate:[AuthoGurd]},{path:'Register',component:RegisterationComponent}];
@NgModule({
  imports: [CisStudentRoutingModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthoGurd,CommentServces]
})
export class AppRoutingModule { 

  
}
