import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Followus } from './Followus';
import { followusservcies } from './followusservcies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  Name: string;
  Email: string;
  Image: string;
  Authorize: boolean;
  realsrcimage:string;
   myTest: any;
  Id:string;
  constructor(private activaterouter:ActivatedRoute,private followusservice:followusservcies) {
  
    this.Image = window.localStorage.getItem("Image");
    
    if (localStorage.getItem("Authorize")=="true") {
      this.Authorize = true;
      this.realsrcimage="http://localhost:57761/upload/"+this.Image;

    
    }
    else {
      this.Authorize = false;
    }
   
  }
 
  ngOnInit(): void {

  
  }

  LogOut()
  {
    window.localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }
 
  

  
 

}