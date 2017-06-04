import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent}from './login/login.component';
import{VideoComponent} from './video/video.component';

@NgModule({
    imports:[
        RouterModule.forRoot([{
            path:'',
            component:LoginComponent
        },
        {
            path:'login',
            component:LoginComponent
        },
        {
            path:'videos',
            component:VideoComponent
        },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
        
        ])
    ],
    providers:[],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}