import { Comment } from 'src/app/core/domain/comment';
import { Observable } from 'rxjs';
import { BaseRepository } from './base-repository';

export abstract class  CommentRepository extends BaseRepository {
  abstract InsertComment(comment: Comment): Observable<number>;
  abstract DeleteComment(commentId: number): Observable<void>;
  abstract GetComments(commentId: number): Observable<Comment[]>;
}
