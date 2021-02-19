import { Observable } from 'rxjs';
import { Comment } from '../domain/comment';
import { BaseRepository } from './base-repository';

export abstract class  CommentRepository extends BaseRepository {
  abstract InsertComment(comment: Comment): Observable<number>;
  abstract DeleteComment(commentId: number): Observable<void>;
}
