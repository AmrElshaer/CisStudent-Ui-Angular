import { Observable } from "rxjs";
import { ResponseToResponse } from "../domain/ResponseToResponse";
import { BaseRepository } from "./base-repository";

export abstract class  ResponseToResponseRepository extends BaseRepository {
  abstract InsertResToRes(resTores: ResponseToResponse): Observable<number>;
}
