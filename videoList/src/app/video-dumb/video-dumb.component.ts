import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { videoListModel } from '../model/videoList.model';


@Component({
  selector: 'app-video-dumb',
  templateUrl: './video-dumb.component.html',
  styleUrls: ['./video-dumb.component.css']
})
export class VideoDumbComponent implements OnInit {
  @Input() videolist: videoListModel[];
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
  }
  videoDetails(videolist) {
    console.log('videolist',videolist);
    this.router.navigate(['/video-details', videolist._id]);
  }

}
