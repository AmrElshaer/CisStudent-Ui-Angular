import { ResponseToComment } from './../../core/domain/ResponseToComment';
import { ResToCommentService } from './../../data/services/responseToComment.service';
import { Comment } from './../../core/domain/comment';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/data/services/comment.service';
import { PostService } from 'src/app/data/services/post.service';
import { UserService } from 'src/app/data/services/user.service';
import { ValidationHelper } from '../common/ValidationHelper';
import { Input,EventEmitter,Output  } from '@angular/core';
@Component({
  selector: 'app-response-to-comment',
  templateUrl: './response-to-comment.component.html',
  styleUrls: ['./response-to-comment.component.css']
})
export class ResponseToCommentComponent implements OnInit {
  @Input('commentId') commentId: number;
  @Output() pushResToComm = new EventEmitter<ResponseToComment>();
  comment: Comment;
  responseTocommentGroup: FormGroup;
  errors: string[];
  constructor(private rote: Router, private responseTocommentService: ResToCommentService, private userService: UserService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.InitBlog();
  }
  private InitBlog() {
    this.responseTocommentGroup = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }
  Save(respTocomment: ResponseToComment) {
    respTocomment.commentId = this.commentId;
    const user = this.userService.getUser();
    respTocomment.cisStudentId = +user.id;
    this.responseTocommentService.InsertResToComment(respTocomment).subscribe(a => {
      respTocomment.cisStudent = { name: user.name, image: user.image, id: user.id };
      respTocomment.id = a;
      this.pushResToComm.emit(respTocomment);
      this.responseTocommentGroup.reset({content:'Enter your comment'});
    });
  }


}
