import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login.service';

@Injectable()
export class VideoDetailsResolver implements Resolve<any>{
    constructor(private loginservice:LoginService){

    }
    resolve(route:ActivatedRouteSnapshot):Observable<any>{
        console.log(route.params.id);
        return this.loginservice.getVideoDetails(route.params.id);
    }
}