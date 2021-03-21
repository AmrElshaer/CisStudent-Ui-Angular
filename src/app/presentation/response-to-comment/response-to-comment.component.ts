import { Comment } from 'src/app/core/domain/comment';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/data/services/comment.service';
import { UserService } from 'src/app/data/services/user.service';
import { Input,EventEmitter,Output  } from '@angular/core';
@Component({
  selector: 'app-response-to-comment',
  templateUrl: './response-to-comment.component.html',
  styleUrls: ['./response-to-comment.component.css']
})
export class ResponseToCommentComponent implements OnInit {
  @Input('commentId') commentId: number;
  @Output() pushResToComm = new EventEmitter<Comment>();
  comment: Comment;
  responseTocommentGroup: FormGroup;
  errors: string[];
  constructor(private rote: Router, private commentService: CommentService, private userService: UserService,
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
  Save(comm:Comment) {
    comm.commentId = this.commentId;
    const user = this.userService.getUser();
    comm.cisStudentId = +user.id;
    this.commentService.InsertComment(comm).subscribe(a => {
      comm.cisStudent = { name: user.name, image: user.image, id: user.id };
      comm.id = a;
      this.pushResToComm.emit(comm);
      this.responseTocommentGroup.reset({content:'Enter your comment'});
    });
  }


}
