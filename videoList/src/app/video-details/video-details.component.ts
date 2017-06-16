import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginservice: LoginService
  ) { }

  ngOnInit() {
    console.log('videoDetails');
    // (+) converts string 'id' to a number
    // this.route.params.switchMap((params: Params) => this.loginservice.getVideoDetails(+params['id']))
    //   .subscribe();
     this.route.data.subscribe(data=>{
       console.log(data);
     })
  }

}
