import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{AppRoutingModule} from './app.routing.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginDumbComponent } from './login-dumb/login-dumb.component';
import {LoginService } from './login.service';
import { VideoComponent } from './video/video.component';
import { VideoDumbComponent } from './video-dumb/video-dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDumbComponent,
    VideoComponent,
    VideoDumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
