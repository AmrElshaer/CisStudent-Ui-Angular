import { Post } from 'src/app/core/domain/post';
import { User } from 'src/app/core/domain/user';
import { PostService } from 'src/app/data/services/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/data/services/user.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styles: []
})
export class AllPostsComponent implements OnInit {
   posts: Post[];
   errors: string[];
  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    const user = this.userService.getUser();
    this.postService.GetPosts(+user.id).subscribe(data => this.posts = data,
      err => this.errors = ValidationHelper.GetErrors(err));
  }

}
