import { FollowerRoutingModule } from './Followers/follower/follower-routing.module';
import { MailPipe } from './common/pipes/mail.pipe';
import { JobRoutingModule } from './job/job-routing.module';
import { AllTrainingComponent } from './training/all-training/all-training.component';
import { CreateTrainingComponent } from './training/create-training/create-training.component';
import { TrainingRoutingModule } from './training/training-routing.module';
import { PostRoutingModule } from './post/post-routing.module';
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
import { CreatePostComponent } from './post/create-post/create-post.component';
import { AllPostsComponent } from './post/all-posts/all-posts.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { TrainingDetailsComponent } from './training/training-details/training-details.component';
import { AllJobsComponent } from './job/all-jobs/all-jobs.component';
import { CreateJobComponent } from './job/create-job/create-job.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { StudentProfileComponent } from './profile/student-profile/student-profile.component';
import { AllFollowersComponent } from './Followers/all-followers/all-followers.component';
import { ViewBlogComponent } from './post/view-blog/view-blog.component';
import { ResponseToCommentComponent } from './response-to-comment/response-to-comment.component';
import { DisplayCommentComponent } from './display-comment/display-comment.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { FixedpluginComponent } from './common/fixedplugin/fixedplugin.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarLayoutComponent } from './sidebar/sidebar.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { ReactionComponent } from './common/reaction/reaction.component';
@NgModule({
  declarations: [RegisterUserComponent, LoginUserComponent, HomeComponent ,
    ErrorComponent, CreateProfileComponent, ProfileDetailsComponent,
    HeaderComponent, SidebarComponent, CreatePostComponent, AllPostsComponent, PostDetailsComponent,
    CreateTrainingComponent, TrainingDetailsComponent, AllTrainingComponent,
     AllJobsComponent, CreateJobComponent, JobDetailsComponent,MailPipe,
      StudentProfileComponent, AllFollowersComponent, ViewBlogComponent, ResponseToCommentComponent, DisplayCommentComponent, AdminLayoutComponent, FixedpluginComponent,
      FooterComponent, NavbarComponent,SidebarLayoutComponent, UserProfilePageComponent, ReactionComponent]
    ,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  exports: [UserRoutingModule, HomeRoutingModule, ProfileRoutingModule, HeaderComponent,
                 PostRoutingModule, TrainingRoutingModule, JobRoutingModule,FollowerRoutingModule]
})
export class PresentationModule { }
