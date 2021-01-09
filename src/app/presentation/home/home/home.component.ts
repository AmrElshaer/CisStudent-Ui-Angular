import { Post } from 'src/app/core/domain/post';
import { PostService } from 'src/app/data/services/post.service';
import { Component, OnInit } from '@angular/core';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  posts: Post[];
  errors: string[];
  constructor(private postService: PostService) { }

  ngOnInit() {
     this.postService.GetStudentsPosts().subscribe(data => this.posts = data,
      err => this.errors = ValidationHelper.GetErrors(err));
  }

}
