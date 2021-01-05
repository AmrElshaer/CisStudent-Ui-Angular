import { ProfileService } from 'src/app/data/services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './data/services/user.service';
import { AuthGuard } from './presentation/common/guard/auth.guard';


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
  providers: [AuthGuard, UserService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
