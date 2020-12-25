import { UserService } from './data/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Name: string;
  Email: string;
  Image: string;
  Authorize = false;
  constructor(private router: Router, private userSerivce: UserService) {

    if (this.userSerivce.isLoggedIn()) {
      this.Authorize = true;
    }

  }

  ngOnInit(): void {


  }

  logOut() {
    window.localStorage.clear();
    this.router.navigate(['signIn']);
  }






}
