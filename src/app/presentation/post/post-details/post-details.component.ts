import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/domain/post';
import { PostService } from 'src/app/data/services/post.service';
import { ValidationHelper } from '../../common/ValidationHelper';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styles: [
  ]
})
export class PostDetailsComponent implements OnInit {
  postId: number;
  post: Post;
  errors: string[];
  constructor(private rote: Router, private router: ActivatedRoute, private postService: PostService) {

   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(rot => this.postId = +rot.get('id'));
    this.postService.GetPost(this.postId).subscribe(res => this.post = res, err =>
      this.errors = ValidationHelper.GetErrors(err));
  }

  DeletePost() {
    this.postService.DeletePost(this.postId).subscribe(() => this.rote.navigate(['/Blog/All']),
     err => this.errors = ValidationHelper.GetErrors(err));
  }
}
