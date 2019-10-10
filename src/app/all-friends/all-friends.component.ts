import { Component, OnInit } from '@angular/core';
import { followusservcies } from '../followusservcies';
import { Followus } from '../Followus';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent implements OnInit {
AllFriends:Followus[];
Id:string;
  constructor(private _httpclient:ActivatedRoute,private followsservieces:followusservcies) {

   }

  ngOnInit() {
    this._httpclient.paramMap.subscribe(a=>{
      this.Id=a.get("Id");
      this.followsservieces.AllFriends(this.Id).subscribe(a=>{
        this.AllFriends=a;
        
      });
    });

  }

}
