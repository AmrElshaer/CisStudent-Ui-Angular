import { Observable } from 'rxjs';
import { Post } from './../domain/post';
import { BaseRepository } from './base-repository';

export abstract class PostRepository  extends BaseRepository {
   abstract UpSrtPost(post: Post): Observable<number>;
   abstract GetPost(postId: number): Observable<Post>;
   abstract DeletePost(postId: number): Observable<void>;
   abstract GetPosts(studentId: number): Observable<Post[]>;
}
