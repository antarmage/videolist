import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ISubscription } from "rxjs/Subscription";
import {Observable} from 'rxjs/Rx';

import{videoListModel} from '../model/videoList.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
videoFordetailList$:Observable <any>;
@Input() rawbobject:videoListModel[]=[];
videoForList:videoListModel[];
  videoForList$:Observable <videoListModel[]>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginservice: LoginService
  ) { }

  ngOnInit() {
    this.videoDetails();
    this.videoForList$= this.loginservice.videoList$;
  }
  ngOnDestroy() {
      
   }
  videoDetails(){
    let rawdata;
    console.log('videoDetails page'+this.route.snapshot.data['videoDetails'].data);
    rawdata = new videoListModel(this.route.snapshot.data['videoDetails'].data);
    rawdata.truncate=false;
    rawdata.ratingTotal = this.loginservice.calculateRating(rawdata.ratings);
    this.rawbobject.splice(0,1,rawdata);
    console.log(this.rawbobject);
  }
  additionalVideolist(){

  }

}
