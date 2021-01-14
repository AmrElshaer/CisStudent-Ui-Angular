import { Follow } from './../../../core/domain/follow';
import { FollowService } from './../../../data/services/follow.service';
import { UserService } from 'src/app/data/services/user.service';
import { Profile } from 'src/app/core/domain/profile';
import { ProfileService } from 'src/app/data/services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/domain/post';
import { PostService } from 'src/app/data/services/post.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styles: [
  ]
})
export class StudentProfileComponent implements OnInit {

  profile: Profile;
  posts: Post[];
  errors: string[];
  visitorId: number;
  studentId: number;
  textFollow: string;
  followId: number|null;
  constructor(private postService: PostService, private userService: UserService,
              private profileService: ProfileService, private router: ActivatedRoute, private followService: FollowService) { }
  ngOnInit() {
      this.router.paramMap.subscribe(rot => {
        this.visitorId = +rot.get('id');
        this.studentId = +this.userService.getUser().id;
        // Get Posts
        this.postService.GetPosts(this.visitorId).subscribe(data => this.posts = data,
        err => this.errors = ValidationHelper.GetErrors(err));
        // Get Profile
        this.profileService.GetProfile(this.visitorId).subscribe(
          data => this.profile = data,
          err => this.errors = ValidationHelper.GetErrors(err));
        // Check That Have Profile
        this.followService.HaveFollow({SendId: this.studentId, ReceiveId: this.visitorId}).subscribe(data => {
             this.followId = data.id;
             this.textFollow = 'UnFollow';
        }, err => this.textFollow = 'Follow');
      });

  }
  FollowManage() {
      if (this.followId) {
        this.followService.DeleteFollow(this.followId).subscribe(() => {
          this.textFollow = 'Follow';
          this.followId = null;
        },
        err => this.textFollow = 'UnFollow');
      } else {
         const follow = {
        id: undefined,
        cisStudentSendId: this.studentId,
        cisStudentRecieveId: this.visitorId,
        createDate: undefined,
        isAccepte: true ,
        cisStudentSend: undefined ,
         cisStudentRecieve: undefined
      };
         this.followService.UpSrtFollow(follow).subscribe(data => {
        this.textFollow = 'UnFollow';
        this.followId = data;
      }, err => this.textFollow = 'Follow');
      }

  }

}
