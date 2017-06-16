import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private loginservice: LoginService,
    private route: ActivatedRoute,
        private router: Router,
  ) { }

  ngOnInit() {
      // reset login status
     //   this.loginservice.userLogout();
 
  }
  //passing userdetails to service
  onClickSendUserRequest(userDetails: object) {
    this.loginservice.getUserDetails(userDetails);
  }

}
