import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ UserModel } from '../model/userDetails.model'

@Component({
  selector: 'app-login-dumb',
  templateUrl: './login-dumb.component.html',
  styleUrls: ['./login-dumb.component.css']
})
export class LoginDumbComponent implements OnInit {
  @Output() authenticationPayload: EventEmitter<object> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
   userAuthenticate(username: string,password: string) {
      this.authenticationPayload.emit({username:username,password:password});
  }

}
