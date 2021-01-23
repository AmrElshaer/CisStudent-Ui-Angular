import { Follow } from './../../../core/domain/follow';
import { FollowService } from './../../../data/services/follow.service';
import { UserService } from 'src/app/data/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-all-followers',
  templateUrl: './all-followers.component.html',
  styles: [
  ]
})
export class AllFollowersComponent implements OnInit {
  followers:Follow[];
  errors:string[];
  constructor(private userService: UserService , private followService: FollowService) {

   }

  ngOnInit(): void {
    const userId=this.userService.getUser().id;
    this.followService.GetFollows(+userId).subscribe(allfollowers=>this.followers=allfollowers,
      err=>this.errors=ValidationHelper.GetErrors(err));
  }

}
