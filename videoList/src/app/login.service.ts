
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Http } from '@angular/http';


import { UserModel } from './model/userDetails.model';
import { UserResponseModel } from './model/userResponse.model';
import {videoListModel}from './model/videoList.model';
@Injectable()
export class LoginService {
  baseUrl: string = 'http://localhost:27017';
  sessionId:string;
  private videoListSub: BehaviorSubject<videoListModel[]>; 
  public videoList$: Observable<videoListModel[]>;
  private videoDetailSub:BehaviorSubject<any>;
  public videoDetail$:Observable<any>;
  constructor(private router: Router, private http: Http) {
    this.videoListSub = new BehaviorSubject([]);
    this.videoDetailSub = new BehaviorSubject([]);
    this.videoList$ = this.videoListSub.asObservable();
    this.videoDetail$ = this.videoDetailSub.asObservable();
  }

  //get user details
  getUserDetails(userdetailsObject) {
    this.authCall(new UserModel(userdetailsObject.username, userdetailsObject.password));
  }

  //making authentication calls
  authCall(requestPayload: UserModel) {
    let relativePath='/user/auth';
    return this.http.post(`${this.baseUrl}${relativePath}`, requestPayload).subscribe((data) => {
      let resp = data.json();
      if(resp.status==='success'){
        let responseModel = new UserResponseModel(resp);
        this.sessionId = resp.sessionId;
        this.postAuthcall(resp);
      }
      
    },
     err => {
          console.log(err);
        });
  }

  //post call
  postAuthcall(resp){
    localStorage.setItem('currentUser', JSON.stringify(resp));
        console.log(localStorage.getItem('currentUser'));
        this.redirection();
  }

  //video url redirection
  redirection(){
    this.getvideolist();
  }

  //video list service calls
  getvideolist(){
    let requestparam = '/videos'+ '?sessionId=' + this.sessionId;
    this.http.get(`${this.baseUrl}${requestparam}`).subscribe(data=>{
      let response = data.json();
      let responseModel,videoList=[];
      if(response.status==='success'){
        response.data.forEach(videolists => {
          videolists.ratingTotal=this.calculateRating(videolists.ratings);
          responseModel = new videoListModel(videolists);
          videoList.push(responseModel);
        });
        this.videoListSub.next(videoList);
        this.router.navigate(['/videos']);
      }
    });
  }

  //calculate ratings
  calculateRating(ratings){
    let ratingSum=0;
    ratings.forEach((elements)=>{
      ratingSum+=elements;
    });
    return ratingSum/ratings.length;
  }

  //user logout
  userLogout(){
    let requestparam="/user/logout"+ '?sessionId='+ this.sessionId;
    this.http.get(`${this.baseUrl}${requestparam}`).subscribe((data) => {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    });
  }

  //video Details
  videoDetailsList(videoId){
    let requestparam="/video"+ '?sessionId='+ this.sessionId+'&videoId=' + videoId;
    this.http.get(`${this.baseUrl}${requestparam}`).subscribe((data) => {
    });
  }
  getVideoDetails(videoId){
   let requestparam="/video"+ '?sessionId='+ this.sessionId+'&videoId=' + videoId;
   let videoDetailsData;
    this.http.get(`${this.baseUrl}${requestparam}`).subscribe((data) => {
  videoDetailsData=data;
  console.log(videoDetailsData);
});
this.videoDetailSub.next(videoDetailsData);
    console.log('get video detail triggered '+videoId);
    return this.videoDetail$;
  }
}
