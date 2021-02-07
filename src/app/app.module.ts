import { TrainingService } from './data/services/training.service';
import { JobService } from 'src/app/data/services/job.service';
import { PostService } from './data/services/post.service';
import { ProfileService } from 'src/app/data/services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './data/services/user.service';
import { AuthGuard } from './presentation/common/guard/auth.guard';
import { HttpErrorInterceptor } from './presentation/common/HttpErrorInterceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    DataModule,
    PresentationModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, UserService, ProfileService,PostService,JobService,TrainingService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
