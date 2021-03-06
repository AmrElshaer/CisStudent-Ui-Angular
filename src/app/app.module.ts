import { from } from 'rxjs';
import { ReactionService } from './data/services/reaction.service';
import { CommentService } from './data/services/comment.service';
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
import { LoaderInterceptor } from './presentation/common/LoaderInterceptor';
import { LoaderComponent } from './presentation/common/components/loader/loader.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EncodeHttpParamsInterceptor } from './presentation/common/EncodeHttpParamsInterceptor';
@NgModule({
  declarations: [
    AppComponent, LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    DataModule,
    PresentationModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard, UserService, ProfileService, PostService, JobService,ReactionService,
    TrainingService, CommentService, [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: EncodeHttpParamsInterceptor,
    multi: true,
  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
