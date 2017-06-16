import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';
import { AuthguardService } from './authguard.service';
import { VideoDetailsComponent } from './video-details/video-details.component';
import{VideoDetailsResolver} from './resolvers/video-details.resolver'

@NgModule({
    imports: [
        RouterModule.forRoot([{
            path: '',
            component: LoginComponent
        },
        {
            path: 'video-details/:id',
            component: VideoDetailsComponent,
            resolve:{
             videoDetails: VideoDetailsResolver
    }
            
        },
        {
            path: 'videos',
            component: VideoComponent,
            canActivate: [AuthguardService]
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'videos',
            component: VideoComponent
        },
        {
            path: '**',
            redirectTo: '',
            pathMatch: 'full'
        }

        ])
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }