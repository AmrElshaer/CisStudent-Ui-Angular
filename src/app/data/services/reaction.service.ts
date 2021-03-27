import { Reactions } from 'src/app/core/domain/reaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactionRepository } from 'src/app/core/repositories/reaction-repository';
import * as _ from "lodash";
@Injectable({
  providedIn: 'root'
})
export class ReactionService extends ReactionRepository{
  constructor(private http:HttpClient) {
    super();
  }
  emojiList = ['like', 'love', 'wow', 'haha', 'sad', 'angry']
  DeleteReaction(userId: any, postId: any): Observable<void> {
    const url = `${this.baseUrl}/Reactions/DeleteReaction?postId=${postId}&studentId=${userId}`;
    return this.http.delete<void>(url, this.options);
  }
  GetReactions(postId: number): Observable<Reactions[]> {
    const url = `${this.baseUrl}/Reactions/GetReactions?postId=${postId}`;
    return this.http.get<Reactions[]>(url, this.options);
  }
  UpSrtReaction(userId: any, postId: any,reactIndex:number): Observable<number> {
    const url = `${this.baseUrl}/Reactions/UpSrtReaction`;
    return this.http.post<number>(url, {PostId:postId,StudentId:userId,ReactionIndex:reactIndex}, this.options);
  }
  userReaction(reactions: Array<Reactions>,studentId:number) {
    return reactions.filter(a=>a.studentId==studentId);
  }
}
