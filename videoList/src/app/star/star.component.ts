import { Component, OnInit,Input } from '@angular/core';
import{LoginService} from '../login.service';
import{videoListModel}from '../model/videoList.model';
import{StarModel}from '../model/star.model'
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() ratingslist:number;
  @Input() classRatingModel:StarModel[];
  @Input() classRating:[StarModel];
  constructor(private loginservice:LoginService) { 
    //this.classRating = null;
    this.classRating=[{
      className:'',
      backgroundColorValue:''
     }];
  }

  ngOnInit() {
    console.log('from star component'+ this.ratingslist);
    this.repeatstars();
  }
repeatstars(){
  let starModel;
  for(let i=this.ratingslist;i>0;i--){
    let remain = 0,initial=0,actualvalue=0,classProperty;

    if(i<1){
      actualvalue = i*100;
      remain = 100 - actualvalue;
      classProperty='-webkit-linear-gradient(left, rgba(247,249,97,1)'+ initial +'%, rgba(247,249,97,1)'+ actualvalue +'%, rgba(237, 237, 237, 1)'+ remain+'%, rgba(255,255,255,0)100%)';
      starModel=new StarModel('partialStar',classProperty);
      this.classRating.push(starModel);
    }
    else{
      classProperty = 'transparent';
       starModel=new StarModel('activeStar',classProperty);
       this.classRating.push(starModel); 
     }
  }
  for (let remaining=5-this.ratingslist;remaining>1;remaining--){
    let classProperty;
     classProperty = 'transparent';
       starModel=new StarModel('inactiveStar',classProperty);
       this.classRating.push(starModel); 
  }
  return this.classRating.splice(0,1);
}
}
