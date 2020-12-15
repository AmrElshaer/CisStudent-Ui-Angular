import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationInitStatus } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CisStudentModule } from './CisStudentCrud/cis-student.module';

import { HttpClientModule } from '@angular/common/http';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProfileComponent } from './profile/profile.component'; 
import { StudentProfileSercies } from './CisStudentProfileServices';
import { CisStudentPostsComponent } from './cis-student-posts/cis-student-posts.component';
import { PostsServices } from './PostsServices';
import { correctimage } from './Custompipeforimage';
import { Responsetocommentservieces } from './ResponseToCommentServices';
import { converttexttohtml } from './converttexttohtml';
import { Responsetoresponseservieces } from './responsetoresponseservices';
import { CisStudentProfileComponentComponent } from './cis-student-profile-component/cis-student-profile-component.component';
import { CommentoposttComponentComponent } from './commentopostt-component/commentopostt-component.component';
import { ResponseforcommentComponent } from './responseforcomment/responseforcomment.component';
import { ResponsetoresponseComponent } from './responsetoresponse/responsetoresponse.component';
import { PublicPostComponent } from './public-post/public-post.component';
import { publicpostservices } from './publicpostservices';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { followusservcies } from './followusservcies';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { PrivatePostsComponent } from './private-posts/private-posts.component';
import { privatepostservices } from './Privateservices';
import { Safe } from './bindtextofhtml';
import { TrainingComponent } from './training/training.component';
import { TrainingServices } from './TrainingServices';
import { ApplyTrainingServices } from './ApplyTrainingServces';
import { JobsComponent } from './jobs/jobs.component';
import { ApplyJobServices } from './ApplyJobServces';
import { JobsServeces } from './JobsServeces';
import { PersonalDataFroAllFrientComponent } from './personal-data-fro-all-frient/personal-data-fro-all-frient.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    ProfileComponent,
    CisStudentPostsComponent,
    correctimage,
    converttexttohtml,
    CisStudentProfileComponentComponent,
    CommentoposttComponentComponent,
    ResponseforcommentComponent,
    ResponsetoresponseComponent,
    PublicPostComponent,
    PersonalDataComponent,
    AllFriendsComponent,
    PrivatePostsComponent,
    Safe,
    TrainingComponent,
    JobsComponent,
    PersonalDataFroAllFrientComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CisStudentModule
    
   
  ],
  providers: [ApplyJobServices,JobsServeces,ApplyTrainingServices,TrainingServices,privatepostservices,Responsetoresponseservieces,Responsetocommentservieces,StudentProfileSercies,PostsServices,publicpostservices,followusservcies],
  bootstrap: [AppComponent]
})
export class AppModule { }
