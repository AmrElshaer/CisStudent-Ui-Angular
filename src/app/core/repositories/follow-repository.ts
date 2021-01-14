import { Observable } from 'rxjs';
import { Follow } from '../domain/follow';
import { BaseRepository } from './base-repository';

export abstract class  FollowRepository extends BaseRepository {
  abstract UpSrtFollow(follow: Follow): Observable<number>;
  abstract GetFollow(followId: number): Observable<Follow>;
  abstract DeleteFollow(followId: number): Observable<void>;
  abstract GetFollows(studentId: number): Observable<Follow[]>;
  abstract HaveFollow(haveFollow: {SendId: number, ReceiveId: number}): Observable<Follow>;
}
