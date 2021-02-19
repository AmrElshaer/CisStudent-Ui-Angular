import { CommentService } from './../../../data/services/comment.service';
import { UserService } from './../../../data/services/user.service';
import { Comment } from './../../../core/domain/comment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/domain/post';
import { PostService } from 'src/app/data/services/post.service';
import { ValidationHelper } from '../../common/ValidationHelper';
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']

})
export class ViewBlogComponent implements OnInit {

  postId: number;
  post: Post;
  commentGroup: FormGroup;
  errors: string[];
  constructor(private rote: Router, private commentService: CommentService, private userService: UserService,
    private formBuilder: FormBuilder, private router: ActivatedRoute, private postService: PostService) {

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(rot => this.postId = +rot.get('id'));
    this.postService.GetPost(this.postId).subscribe(res => this.post = res, err =>
      this.errors = ValidationHelper.GetErrors(err));
    this.InitBlog();
  }
  private InitBlog() {
    this.commentGroup = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }
  Save(comment: Comment) {
    comment.postId = this.postId;
    const user = this.userService.getUser();
    comment.cisStudentId = +user.id;
    this.commentService.InsertComment(comment).subscribe(a => {
      comment.cisStudent = { name: user.name, image: user.image, id: user.id };
      comment.id = a;
      this.post.comments.push(comment);
      this.commentGroup.reset({content:'Enter your comment'});
    });

  }
}
