import { CommentService } from 'src/app/data/services/comment.service';
import { Comment } from 'src/app/core/domain/comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})
export class DisplayCommentComponent implements OnInit {
  @Input() comments: Comment[];
  constructor(private commentService: CommentService) { }
  togglePanel: any = {};
  togglePanelbtn: any = {};
  ngOnInit(): void {
  }
  PushResponseToComment(comment: Comment) {
    let comm = this.comments.find(a => a.id == comment.commentId);
    if (comm.comments) {
      comm.comments.push(comment);
    } else {
      comm.comments = [comment];
    }
  }
  ShowReplies(commId, index) {
    this.togglePanelbtn[index] = !this.togglePanelbtn[index];
    this.commentService.GetComments(commId).subscribe(a => {
      a.forEach(x => this.comments.find(a => a.id == commId).comments.push(x));
    });
  }
}
