import { Reactions } from './../domain/reaction';
import { Observable } from 'rxjs';
import { BaseRepository } from './base-repository';

export abstract class ReactionRepository  extends BaseRepository {
   abstract DeleteReaction(userId,postId): Observable<void>;
   abstract GetReactions(postId:number): Observable<Reactions[]>;
   abstract UpSrtReaction(userId,postId,reactIndex:number):Observable<number>;
}
