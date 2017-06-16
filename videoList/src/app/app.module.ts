import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{AppRoutingModule} from './app.routing.module'

import {LoginService } from './login.service';
import{AuthguardService} from './authguard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginDumbComponent } from './login-dumb/login-dumb.component';
import { VideoComponent } from './video/video.component';
import { VideoDumbComponent } from './video-dumb/video-dumb.component';
import { StarComponent } from './star/star.component';
import { NavComponent } from './nav/nav.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import{VideoDetailsResolver}from './resolvers/video-details.resolver';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDumbComponent,
    VideoComponent,
    VideoDumbComponent,
    StarComponent,
    NavComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService,AuthguardService,VideoDetailsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
