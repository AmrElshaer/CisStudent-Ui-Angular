import { Post } from 'src/app/core/domain/post';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../../../data/services/post.service';
import { UserService } from 'src/app/data/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationHelper } from '../../common/ValidationHelper';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styles: []
})
export class CreatePostComponent implements OnInit {

  postGroup: FormGroup;
  studentId: number;
  errors: string[];
  postId: number|null;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private userService: UserService, private postService: PostService, private activeRoute: ActivatedRoute) {

  }



  ngOnInit() {
    const user = this.userService.getUser();
    this.studentId = +user.id;
    this.InitBlog();
    this.UpdateBLog();
  }
  private InitBlog() {
    this.postGroup = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  private UpdateBLog() {
    this.activeRoute.paramMap.subscribe(rot => {
      const postId = rot.get('id');
      if (postId) {
        this.postId = +postId;
        this.GetBlog();
      }
    });
  }
  private GetBlog() {
      this.postService.GetPost(this.postId).subscribe(data => {
        this.postGroup.patchValue(data);
      }, err => this.errors = ValidationHelper.GetErrors(err));
  }
  Save(post: Post) {
    if (this.postId) {
       post.id = this.postId;
    }
    post.cisStudentId = this.studentId;
    this.postService.UpSrtPost(post).subscribe(postId => {
    this.router.navigate([`/Blog/Delete/${postId}`]);
    }, err => this.errors = ValidationHelper.GetErrors(err));
  }
}
