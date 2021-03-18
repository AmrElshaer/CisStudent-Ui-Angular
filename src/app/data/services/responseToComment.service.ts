import { ResponseToComment } from './../../core/domain/ResponseToComment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseToCommentRepository } from 'src/app/core/repositories/responseTocomment-repository';
@Injectable({
  providedIn: 'root'
})
export class ResToCommentService extends ResponseToCommentRepository {
  /**
   *
   */
  constructor(private http: HttpClient) {
    super();

  }
  InsertResToComment(resToComment: ResponseToComment): Observable<number> {
    const url = `${this.baseUrl}/ResponseToComment/InsertResponseToComment`;
    return this.http.post<number>(url, resToComment, this.options);
  }

}
