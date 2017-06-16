import { Component, OnInit,Input } from '@angular/core';
import{LoginService} from '../login.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Input() userName:string;
  constructor(private loginservice:LoginService) { }

  ngOnInit() {
    this.userName=JSON.parse(localStorage.getItem('currentUser')).username;
  }
  logout(){
    this.loginservice.userLogout();
  }
}
