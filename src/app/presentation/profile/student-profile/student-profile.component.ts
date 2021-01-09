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
  studentId:number;
  constructor(private postService: PostService,private userService:UserService,
              private profileService: ProfileService, private router: ActivatedRoute) { }
  ngOnInit() {
      this.router.paramMap.subscribe(rot => {
        this.visitorId = +rot.get('id');
        this.postService.GetPosts(this.visitorId).subscribe(data => this.posts = data,
        err => this.errors = ValidationHelper.GetErrors(err));
        this.profileService.GetProfile(this.visitorId).subscribe(
          data =>this.profile = data,
          err => this.errors = ValidationHelper.GetErrors(err));
      });
      this.studentId=+this.userService.getUser().id;
  }
  follow(){
   
  }
}
