import { ResponseToComment } from './../domain/ResponseToComment';
import { Observable } from "rxjs";
import { ResponseToResponse } from "../domain/ResponseToResponse";
import { BaseRepository } from "./base-repository";

export abstract class  ResponseToCommentRepository extends BaseRepository {
  abstract InsertResToComment(resToComment: ResponseToComment): Observable<number>;
}
