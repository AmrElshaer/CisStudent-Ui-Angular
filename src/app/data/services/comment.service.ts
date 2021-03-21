import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/core/domain/comment';
import { CommentRepository } from 'src/app/core/repositories/comment-repository';

@Injectable({
  providedIn: 'root'
})

export class CommentService extends CommentRepository {
  GetComments(commentId: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/Comment/Get?commentId=${commentId}`;
    return this.http.get<Comment[]>(url, this.options);
  }


  constructor(private http: HttpClient) {
    super();

  }

  InsertComment(comment: Comment): Observable<number> {
    const url = `${this.baseUrl}/Comment/InsertComment`;
    return this.http.post<number>(url, comment, this.options);
  }

  DeleteComment(commenId: number): Observable<void> {
    const url = `${this.baseUrl}/Comment/DeleteComment?id=${commenId}`;
    return this.http.delete<void>(url, this.options);
  }
}
