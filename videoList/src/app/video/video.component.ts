import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{LoginService} from '../login.service';
import{videoListModel} from '../model/videoList.model'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videoForList:videoListModel[];
  videoForList$:Observable <videoListModel[]>
  constructor(private loginservice:LoginService) { }

  ngOnInit() {
   this.videoForList$= this.loginservice.videoList$;
    
  }

}
